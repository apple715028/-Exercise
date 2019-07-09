import React from "react";
import ReactDOM from "react-dom";
import Pathimg from '../imgs/img.png'
class Banner extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            button:this.props.openAtStart === true ? this.props.openText:this.props.closeText,
            nameclass:this.props.openAtStart === true ? 'opened':'closed',
            transition:this.props.transition,
            runtr:false,
            inttimervalId:"",
            time:""
        };
    }
    componentDidMount(){
        this.init();
       if(this.props.autoToggle === true){
            window.setTimeout(() => this.toggle(), 100);
       }else if(typeof (this.props.autoToggle) ==  "number"){
        window.setTimeout(() => this.toggle(), this.props.autoToggle);
       }
      
    }
    componentWillUnmount() {
        this.timeover();
    }
    init = () =>{
        let now =this.props.openAtStart === true ? 'opened':'closed';
        this.setState({
            nameclass:now
        })
    }
   

    toggle =() =>{
        this.time();
        if(this.props.transition === true){
            this.transition();
            // window.setTimeout(() => this.openclose(), 800);
        }else{
            this.openclose();
        }
    }
    tropenclose =() =>{
        this.timeover();
        console.log("end");
        if(this.state.runtr == true){
            if (this.state.nameclass == "opening" ){
                this.openbanner();
            }else  {
                this.closebanner();
            }
            clearInterval(this.timer);
            this.setState({
                runtr:false
            })
      
        }
    }
    openclose = () =>{
        if (this.state.nameclass == "closed" ){
            this.openbanner();
        }else  {
            this.closebanner();
            
        } 
    }
    openbanner =()=>{
        this.setState({
            nameclass:"opened",
            button:this.props.openText,
        });
    }
    closebanner =() =>{
        this.setState({
            nameclass:"closed",
            button:this.props.closeText,
        });
    }

    openAtStart = () =>{
        this.time();
        if(this.props.transition === true){
            this.transition();
            // window.setTimeout(() => this.openbanner(), 800);
        }else{
            this.openbanner()
        }
    }
    closeAtStart = () =>{
        this.time();
        if(this.props.transition === true){
            this.transition();
            // window.setTimeout(() => this.closebanner(), 800);
        }else{
            this.closebanner()
        }
    }

    transition = () =>{
        let nowbtn = this.state.nameclass;
        let opencloseing;
        let txtname ;
        if(nowbtn == 'opened'){
            opencloseing = "closing";
            txtname=this.props.closeText;
        }else if(nowbtn == 'closed'){
            opencloseing ="opening";
            txtname=this.props.openText;
        }
        this.setState({
            nameclass:opencloseing,
            button:txtname,
            runtr:true
        });
    }
    
    time = () =>{
        this.myInterval = setInterval(()=>{
            console.log("whenTransition");
          }, 100);
    }
    timeover = () =>{
        clearInterval(this.myInterval);
    }
    

    render(){
        const { data } = this.props;
        // console.log( this.props);
        const{openAtStart,autoToggle,button,nameclass,transition}=this.state;
        let class2 = transition === true ? "transition" :"";
        return(
            <div className={`banner ${class2} ${nameclass}`}  onTransitionEnd={this.tropenclose}>
                <a className="wrap" href="#">
                    <img className="img" src={Pathimg} title="輸入廣告促銷說明文字" alt="輸入廣告促銷說明文字"/>
                </a>
                <span className={this.props.btnclass} onClick={this.toggle}>
                    {button}
                </span>
            </div>
        )
    }
}
export default Banner;