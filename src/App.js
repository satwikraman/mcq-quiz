import React from 'react';
import C1 from './components/C1'



class App extends React.Component {
constructor(props){
  super(props);
  this.state={
    resp:{},
    rowNo:0
  }
}

componentDidMount(){
  fetch("https://test.stag.talentscreen.io/v1/tsq/tschallenges?subjectid=56&levelid=1&questiontype=choice&authentication=false")
  .then(resp=>resp.json())
  .then(resp=>{
    this.setState({
      resp: resp
    })
    
  })
}

handleSubmit=(e)=>{
  
  let resp=this.state.resp;
  if(resp.questions[this.state.rowNo].candidateAnswer===resp.questions[this.state.rowNo].originalAnswer){
    resp.correct++;
    this.setState({
      resp:resp
    })
  }
  let rowNo=this.state.rowNo+1;
  this.setState({
    rowNo: rowNo
  })
}

handleChange=(e)=>{
  let rowNo=this.state.rowNo
  let resp=this.state.resp
  let questions=resp.questions 
  let candidateAnswer=e.target.value
  questions[rowNo].candidateAnswer=candidateAnswer
  resp.questions=questions
  this.setState({
    resp:resp
  })
}

  render(){
  
  return (
    <div className="App">
    <C1 handleSubmit={this.handleSubmit}  rowNo={this.state.rowNo} handleChange={this.handleChange} resp={this.state.resp}/>
    </div>
  )
}
}
export default App;
