import React, { Component } from 'react';
import logo from './logo.svg';
import {addresses} from './address';
import ContactPreview from './contactPreview';
import './index.css';

class App extends Component {
	setCurrentContact = (contact) =>{
		this.setState({
			currentContact: contact
					  })
	};
	constructor(props){
		super(props);
		this.changeCurrentContact=this.setCurrentContact.bind(this);
		this.state={
			currentContact: null
		};
	}
  render() {
	  console.log(this.state.currentContact);
    return (
      <div className="App">
			<ul>
				{
					addresses.map((address) =>{
					return(
						<li
							key={address.firstName}
						>	
							<ContactPreview
							contact={address}
							onClickFunction={this.changeCurrentContact}
							/>
							
                     
						</li>
					);
				})
				}

			</ul>
			<div className="contactCard">
				{
				this.state.currentContact ?
					<div>
						<p>{`Name: ${this.state.currentContact.firstName} ${this.state.currentContact.lastName}`}</p>
						<p>{`Address: ${this.state.currentContact.addressLineOne}`}</p>
						<p>{`${this.state.currentContact.addressLineTwo}`}</p>
						<p>{`City: ${this.state.currentContact.city}`}</p>
						<p>{`State: ${this.state.currentContact.state}`}</p>
						<p>{`Zip Code: ${this.state.currentContact.zipCode}`}</p>
						<p>{`Country: ${this.state.currentContact.country}`}</p>
					</div>
				:null
				}
			</div>
      </div>
	
    );
  }
}

export default App;
