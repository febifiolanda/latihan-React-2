import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col m4">
          <div className="row">
            <div className="col m12">
            <div className="card">
              <div className="card-content">
                <div class="input-field col m12">
                  <input id="last_name" type="text" class="validate"/>
                  <label for="last_name">Last Name</label>
                </div>
              </div>
            </div>
            </div>
           </div>
          </div>
      <div className="col m8">
        <div className="row">
          <div className="col m4">
            <Product/>
          </div>
          <div className="col m4">
            <Product/>
          </div>
          <div className="col m4">
           <Product/>
          </div>
        </div>
      </div>
      </div>
      // <div className="row">
      // <div className="col m6 offset-m3">
      // <div className="row">
      // <header className="App-header">
      //     <Product judul="" harga="Rp10.000"/>
      //     <Product judul="hp" harga="Rp20.000"/>
      //     <Product judul="hp" harga="Rp20.000"/>
      //     <Product judul="hp" harga="Rp20.000"/>
      //   </header>
      // </div>
      // </div>
      // </div>
    );
  }
}

export default App;
