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
        // this.Toggle();
        let toggletime =this.props.autoToggle;
        // if(this.props.transition === true){
        //     this.toggle();
        // }
        if(!isNaN(this.props.autoToggle)){
            this.transition();
            window.setTimeout(() =>  this.openclose(), toggletime);

        }else if(this.props.autoToggle === true){
            this.toggle();
        }else{
            this.toggle();
        }
      
    }

    // Toggle = () =>{
    //     let now =this.props.openAtStart === true ? 'opened':'closed';
    //     this.setState({
    //         nameclass:now
    //     })
    // }
   

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
            //  this.time();
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

    toggle =() =>{
        if(this.props.transition === true){
            this.transition();
            const transition = document.querySelector('.transition');
            transition.addEventListener('transitionend', () => {
                this.openclose()
            });

        }else{
            this.openclose();
        }

    }
    openclose = () =>{
        if (this.state.nameclass === "closed" || this.state.nameclass === "closing"){
            this.openbanner();
        }else {
            this.closebanner();
        }
        
    }
    openbanner =()=>{
            this.setState({
                nameclass:"opened",
                button:this.props.openText
            });
    }
    closebanner =() =>{
        this.setState({
            nameclass:"closed",
            button:this.props.closeText
        });
    }

    transition =() =>{
        let nowbtn = this.state.nameclass;
        let opencloseing;
        let txtname ;
        if(nowbtn === 'opened'){
            opencloseing = "closing";
            txtname=this.props.closeText;
        }else if (nowbtn === 'closed'){
            opencloseing ="opening";
            txtname=this.props.openText;
          
        }
        this.setState({
            nameclass:opencloseing,
            button:txtname
        });

    }

    time = () =>{
       window.setInterval(() =>{
            console.log("dd");
        },1000);
       

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
                <span className={this.props.btnclass} onClick={this.toggle} >
                    {button}
                </span>
            </div>
        )
    }
}
export default Banner;