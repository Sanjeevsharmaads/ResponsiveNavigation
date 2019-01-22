import React, { Component } from 'react';
import {HamburgerMenu} from 'react-hamburger-menu';
import './NavigationTest.css';

class NavigationTest extends Component {
	constructor(props){
		super(props)
		this.state ={menuStatus :true,close:false,data:["Men","Women","Collection","Handbags","Wallets","Shoes","Watches"],
		}
		this.handleScroll = this.handleScroll.bind(this)
	}

	componentDidMount(){
		window.addEventListener('resize',this.handleScroll);
	}

	componentWillUmount(){
		window.removeEventListener('resize',this.handleScroll);
	}

	hamburger = () => {
		console.log('hamburger');
		this.setState({menuStatus:!this.state.menuStatus});
		this.setState({close:!this.state.close});
	}

	handleScroll(){
		console.log('hello'+window.innerWidth);
		if(window.innerWidth>768){
			this.setState({close:false});
		}
	}


  render() {
    return (
      <div className="navigation">
        <ul className="nav-list" style={{display:this.state.close ? "none" : "block"}}>
        	<li className="list-item" style={{display:this.state.close ? "none" : "block"}}>{this.state.data[0]}</li>
        	<li className="list-item" style={{display:this.state.close ? "none" : "block"}}>{this.state.data[1]}</li>
        	<li className="list-item" style={{display:this.state.close ? "none" : "block"}}>{this.state.data[2]}</li>
        	<li className="list-item" style={{display:this.state.close ? "none" : "block"}}>{this.state.data[3]}</li>
        	<li className="list-item" style={{display:this.state.close ? "none" : "block"}}>{this.state.data[4]}</li>
        	<li className="list-item" style={{display:this.state.close ? "none" : "block"}}>{this.state.data[5]}</li>
        	<li className="list-item" style={{display:this.state.close ? "none" : "block"}}>{this.state.data[6]}</li>
        </ul>

       

        <div className="hamburger">
			    <button onClick={this.hamburger}>
			      <i class="fa fa-bars" style={{display:this.state.close ? "none" : "block"}}></i>
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

export default NavigationTest;
