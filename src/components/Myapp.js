import React from 'react'
import Timer from 'react-compound-timer'
class Myapp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
  
    }

  }
  
  render() {
    let que,time
    if(this.props.questions){
      que=this.props.questions[this.props.rowNo]
      time=que.time
      console.log(time)
    }
    return(
      <div >
      <Timer 
      initialTime={this.time*1000} 
      direction="backward"
      onStop={()=>{this.props.handleSubmit()}}
      >
    {({ start, resume, pause, stop, reset, timerState }) => (
        <React.Fragment>
            <div>
                <Timer.Minutes /> :
                <Timer.Seconds /> :
                <Timer.Milliseconds /> 
            </div>
            <div>{timerState}</div>
        </React.Fragment>
    )}
</Timer>
      </div>
    )
  }
}
export default Myapp