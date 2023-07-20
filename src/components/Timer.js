import React from 'react';

class Timer extends React.Component {
    state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      btnDisabled: false,
      interval: "null",
      intervalsStorage: ["1:05:15"],
    };
  

  startTimer = () => {
        this.setState({
          btnDisabled: true,
        });
        let timer = setInterval(() => {
          const {seconds, minutes, hours} = this.state;
          if (seconds === 59) {
            if (minutes === 59) {
              this.setState({
                seconds: 0,
                minutes: minutes + 1,
                hours: hours + 1,
              });
            }
          }else {
            this.setState({
              seconds: seconds + 1,
            });
          }
        }, 1000)
        this.setState({
          interval: timer,
        })
      };

  stopTimer = () => {
    clearInterval(this.state.interval);
    this.setState({
      btnDisabled: false,
    });
  };

  resetTimer = () => {
    this.stopTimer();
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0,
      intervalsStorage: []
    });
  };
  handleInterval = () => {
    const {hours, minutes, seconds, intervalsStorage} = this.state;
    intervalsStorage.push(`${hours}:${minutes}:${seconds}`);
    this.setState({
      intervalsStorage,
    });
  };
  render() {
    const { hours, minutes, seconds, btnDisabled, intervalsStorage } = this.state;
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
            <button className='btn btn-success' onClick={this.startTimer} disabled={btnDisabled}>Start</button>
          </div>

          <div className="timer-btn"> 
            <button className='btn btn-danger' onClick={this.stopTimer}>Stop</button>
          </div>

          <div className="timer-btn">
            <button className='btn btn-secondary' onClick={this.handleInterval} disabled={!btnDisabled}>Interval</button>
          </div>

          <div className="timer-btn">
            <button className='btn btn-warning' onClick={this.resetTimer}>Clear</button>
          </div>
        </div>
        <div className="timer-container-intervals">
          {intervalsStorage.map((item, index) => <p>{index} =&gt; {item}</p>)}
      </div>
    </div>
    );
  }
}

export default Timer;


