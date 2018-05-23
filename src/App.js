import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      events: [{ id: 1, name: 'John', event: 'Rock Skipping', desc: "We're going to skip some rocks on water and it's going to be oh so fun."},
                   { id: 2, name: 'Alexis', event: 'Chip Dipping', desc: "We're going to dip so many chips in so many dips. I may even bring cheese. The good kind."},
                   { id: 3, name: 'Riley', event: 'Speed Walking', desc: "We will be walking at insane speeds, but never having both feet off the ground at the same time."}],
      nameInput: '',
      titleInput: '',
      descInput: '',
    }

    this.id = 4
  }

  createEvent() {
    let post = {id: this.id, name: this.state.nameInput, title: this.state.titleInput, desc: this.state.descInput}
    this.setState({events: [...this.state.events, post]})
    this.id++
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Mapping Components</h1>
        </header>
        <h2>Create Event</h2>
        <h3>Name</h3>
        <input onChange={e => this.setState({nameInput: e.target.value})}/>
        <h3>Title</h3>
        <input onChange={e => this.setState({titleInput: e.target.value})}/>
        <h3 id='desc'>Description</h3>
        <textarea onChange={e => this.setState({descInput: e.target.value})}/>
        <br/><br/>
        <button onClick={() => this.createEvent()}>Create Event</button>
        <hr />
        <h2>Events :D</h2>
        <div className='eventsDisplay'>
          {/* Let's display our mapped components here */}
        </div>
      </div>
    );
  }
}

export default App;
