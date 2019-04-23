import React from 'react';
import './Product.css'
import logo from './logo.svg';
import './App.css';

class Product extends React.Component{
    render(){
        return (
        <div className="card">
        <div className="card-image">
        <img className="App-logo"src={logo}/>
        <br></br>
        <br></br>
          <span className="card-title grey-text">Card Title<i className="material-icons red-text">add_circle</i></span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <a href="#">hapus</a>
        </div>
      </div>
    
  
        );
    }
}
export default Product
