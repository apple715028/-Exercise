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
        };
    }
    componentDidMount(){
        this.Toggle();
        let toggletime =this.props.autoToggle;
        if(this.props.transition === true){
           this.whenTransitio()
        }
       
        if(!isNaN(this.props.autoToggle)){
            // console.log("tes",toggletime);
            window.setTimeout(() =>  this.Btnclick(), toggletime);
        }else if(this.props.autoToggle === true){
            window.setTimeout(() =>  this.Btnclick(), 100);
        }else{
            this.Btnclick()
        }
      
    }

    Toggle = () =>{
        let now =this.props.openAtStart === true ? 'opened':'closed';
        this.setState({
            nameclass:now
        })
    }
   

    Btnclick = () =>{
      
        let nowbtn = this.state.nameclass;
        let opencloseing;
        let txtname ;
        if(this.props.transition === true){
            if(nowbtn === 'opened'){
                opencloseing = "closing";
                txtname=this.props.closeText;
            }else if (nowbtn === 'closed'){
                opencloseing ="opening";
                txtname=this.props.openText;
              
            }
            this.whenTransitio()
            this.setState({
                nameclass:opencloseing,
                button:txtname
            },() =>{
                window.setTimeout(() => this.openclose(), 800);
            });
        }else{
            if(nowbtn === 'opened'){
                opencloseing = "closed";
                txtname=this.props.closeText;
            }else if (nowbtn === 'closed'){
                opencloseing ="opened";
                txtname=this.props.openText;
              
            }
            this.setState({
                nameclass:opencloseing,
                button:txtname
            });
        }
    }
    openclose = () =>{
        let openclosed = this.state.nameclass === 'closing' ? 'closed':'opened';
        this.setState({
            nameclass:openclosed
        })
    }
    openbanner =()=>{
        let nowbtn = this.state.nameclass;
        let opencloseing;
        let txtname ;
        if(this.props.transition === true){
       if (nowbtn === 'closed'){
                opencloseing ="opening";
                txtname=this.props.openText;
              
            }
            this.whenTransitio()
            this.setState({
                nameclass:opencloseing,
                button:txtname
            },() =>{
                window.setTimeout(() => this.openclose(), 800);
            });
        }else{
            if (nowbtn === 'closed'){
                opencloseing ="opened";
                txtname=this.props.openText;
              
            }
            this.setState({
                nameclass:opencloseing,
                button:txtname
            });
        }
    }
    closebanner =() =>{
        let nowbtn = this.state.nameclass;
        let opencloseing;
        let txtname ;
        if(this.props.transition === true){
            if(nowbtn === 'opened'){
                opencloseing = "closing";
                txtname=this.props.closeText;
                this.whenTransitio()
                this.setState({
                    nameclass:opencloseing,
                    button:txtname
                },() =>{
                    window.setTimeout(() => this.openclose(), 800);
                });
            }
           
        }else{
            if(nowbtn === 'opened'){
                // next=false
                opencloseing = "closed";
                txtname=this.props.closeText;
                this.setState({
                    // openAtStart:next,
                    nameclass:opencloseing,
                    button:txtname
                });
            }
           
        }
        
    }
    whenTransitio = () => {
		console.log('whenTransition');
	}

    render(){
        const { data } = this.props;
        // console.log( this.props);
        const{openAtStart,autoToggle,button,nameclass,transition}=this.state;
        let class2 = transition === true ? "transition" :"";
        return(
            <div className={`banner ${class2} ${nameclass}`} >
                <a className="wrap" href="#">
                    <img className="img" src={Pathimg} title="輸入廣告促銷說明文字" alt="輸入廣告促銷說明文字"/>
                </a>
                <span className={this.props.btnclass} onClick={this.Btnclick}  >
                    {button}
                </span>
            </div>
        )
    }
}
export default Banner;