import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      intervalRef: null
    };
  }

  startTimer = () => {
    if (!this.state.intervalRef) {
      this.setState({
        intervalRef: setInterval(() => {
          this.setState((prevState) => {
            const nextState = { ...prevState };

            nextState.seconds++;

            if (nextState.seconds >= 60) {
              nextState.seconds = 0;
              nextState.minutes++;

              if (nextState.minutes >= 60) {
                nextState.minutes = 0;
                nextState.hours++;
              }
            }

            return nextState;
          });
        }, 1000)
      });
    }
  };

  stopTimer = () => {
    if (this.state.intervalRef) {
      clearInterval(this.state.intervalRef);
      this.setState({ intervalRef: null });
    }
  };

  resetTimer = () => {
    this.stopTimer();
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0
    });
  };

  handleInterval = () => {
    if (this.state.intervalRef) {
      clearInterval(this.state.intervalRef);
      this.setState({ intervalRef: null });
    } else {
      this.setState({
        intervalRef: setInterval(() => {
          this.setState((prevState) => {
            const nextMinutes = prevState.minutes + 1;
  
            if (nextMinutes >= 60) {
              return {
                hours: prevState.hours + 1,
                minutes: 0
              };
            }
  
            return { minutes: nextMinutes };
          });
        }, 10000)
      });
    }
  };

  componentWillUnmount() {
    this.stopTimer();
  }

  render() {
    const { hours, minutes, seconds } = this.state;

    return (
      <div className="timer-container">
        <h1 className='mb-4'><span>Online</span> Stopwatch</h1>

        <div className="timer-col">
          <p className='timer-hours'><span>{hours}</span></p>
          <p className='timer-label'>Hours</p>
        </div>

        <div className="timer-col">
          <p className='timer-minutes'><span>{minutes}</span></p>
          <p className='timer-label'>Minutes</p>
        </div>

        <div className="timer-col">
          <p className='timer-seconds'><span>{seconds}</span></p>
          <p className='timer-label'>Seconds</p>
        </div>

        <div className="timer-container text-center">
          <div className="timer-btn">
            <button className='btn btn-success' onClick={this.startTimer}>Start</button>
          </div>

          <div className="timer-btn">
            <button className='btn btn-danger' onClick={this.stopTimer}>Stop</button>
          </div>

          <div className="timer-btn">
            <button className='btn btn-secondary' onClick={this.handleInterval}>Interval</button>
          </div>

          <div className="timer-btn">
            <button className='btn btn-warning' onClick={this.resetTimer}>Clear</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;


