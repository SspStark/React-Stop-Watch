import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeElapsedInSeconds: 0}

  resetTime = () => {
    clearInterval(this.timerID)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  stopTime = () => {
    clearInterval(this.timerID)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  startTime = () => {
    this.timerID = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  displayTime = () => {
    const {timeElapsedInSeconds} = this.state
    const timeInMinutes = Math.floor(timeElapsedInSeconds / 60)
    const timeInSeconds = Math.floor(timeElapsedInSeconds % 60)
    const minutes = timeInMinutes > 9 ? timeInMinutes : `0${timeInMinutes}`
    const seconds = timeInSeconds > 9 ? timeInSeconds : `0${timeInSeconds}`

    return `${minutes}:${seconds}`
  }

  render() {
    const {isTimerRunning} = this.state
    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="label">Timer</p>
            </div>
            <h1 className="time">{this.displayTime()}</h1>
            <div className="buttons-container">
              <button
                type="button"
                className="button btn1"
                onClick={this.startTime}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="button btn2"
                onClick={this.stopTime}
              >
                Stop
              </button>
              <button
                type="button"
                className="button btn3"
                onClick={this.resetTime}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
