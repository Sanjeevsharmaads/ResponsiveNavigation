import React, { Component } from 'react';
import {HamburgerMenu} from 'react-hamburger-menu';
import './App.css';

class Navigation extends Component {
	constructor(props){
		super(props)
		this.state ={count:0,menuStatus :true,close:false,data:["Men","Women","Collection","Handbags","Wallets","Shoes","Watches"]}
		this.handleScroll = this.handleScroll.bind(this)
	}

	componentDidMount(){
		window.addEventListener('resize',this.handleScroll);
	}

	componentWillUmount(){
		window.removeEventListener('resize',this.handleScroll);
	}

	handleScroll(){
		console.log('hello'+window.innerWidth);
		if(window.innerWidth>768){
			this.setState({close:false});
		}
	}

	hamburger = () => {
		console.log('hamburger');
		this.setState({menuStatus:!this.state.menuStatus,count:this.state.count+1});
		this.setState({close:!this.state.close});

	}

  render() {
    return (
      <div className="navigation">
        <ul className="nav-list" >
        	<li className="list-item" >{this.state.data[0]}</li>
        	<li className="list-item" >{this.state.data[1]}</li>
        	<li className="list-item" >{this.state.data[2]}</li>
        	<li className="list-item" >{this.state.data[3]}</li>
        	<li className="list-item" >{this.state.data[4]}</li>
        	<li className="list-item" >{this.state.data[5]}</li>
        	<li className="list-item" >{this.state.data[6]}</li>
        </ul>

        <div>
	        <ul  className="toggle" style={{backgroundColor:"black", width:"20%",paddingTop:'80px',textAlign: 'left',color:"white",display:this.state.close ? "block" : "none"}}>
	        	<li style={{marginBottom:'10px',fontSize: '20px',display:this.state.close ? "block" : "none"}}>{this.state.data[0]}</li>
	        	<li style={{marginBottom:'10px',fontSize: '20px',display:this.state.close ? "block" : "none"}}>{this.state.data[1]}</li>
	        	<li style={{marginBottom:'10px',fontSize: '20px',display:this.state.close ? "block" : "none"}}>{this.state.data[2]}</li>
	        	<li style={{marginBottom:'10px',fontSize: '20px',display:this.state.close ? "block" : "none"}}>{this.state.data[3]}</li>
	        	<li style={{marginBottom:'10px',fontSize: '20px',display:this.state.close ? "block" : "none"}}>{this.state.data[4]}</li>
	        	<li style={{marginBottom:'10px',fontSize: '20px',display:this.state.close ? "block" : "none"}}>{this.state.data[5]}</li>
	        	<li style={{marginBottom:'10px',fontSize: '20px',display:this.state.close ? "block" : "none"}}>{this.state.data[6]}</li>
	        </ul>
        </div>

        <div className="hamburger" >
			    <button onClick={this.hamburger} >
			      <i class="fa fa-bars" style={{display:this.state.close ? "none" : "block"}}></i>
			      <i class="fa fa-close" style={{display:this.state.close ? "block" : "none"}}></i>
					</button>
				</div>

				<div className="social-icons">
					<i class="fa fa-facebook" style={{float:"right",margin:'20px',marginLeft:'20px'}}></i>
					<i class="fa fa-instagram" style={{float:"right",margin:'20px',marginLeft:'20px'}}></i>
					<i class="fa fa-twitter" style={{float:"right",margin:'20px',marginLeft:'20px'}}></i>
				</div>

      </div>
    );
  }
}

export default Navigation;
