import React from "react";
import ReactDOM from "react-dom";
import Banner from "./component/Banner"

import "./index.scss";
let data={
  openAtStart:true,
  autoToggle:true,
  btnclass:"btn" ,
  closeText:'收合',
  openText: '展開', 
  transition: true
}
class App extends React.Component {
  constructor(props){
    super(props);
    this.namefun = React.createRef();
  }
  openclose =()=>{
    // console.log( this.namefun)
    this.namefun.current.toggle();
  }
  opensshow = () =>{
    this.namefun.current.openAtStart();
  }
  closeshow = () =>{
    this.namefun.current.closeAtStart();
  }

  render(){
    return (
      <div className="App">
        <Banner ref={this.namefun} {...data} />
        <button onClick={this.openclose}>toggle</button>
        <button onClick={this.opensshow}>open</button>
        <button onClick={this.closeshow}>close</button>
      </div>
    ); 
  }
 
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
