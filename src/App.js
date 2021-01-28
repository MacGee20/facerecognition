import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import SignIn from './components/Signin/signin';
import Register from './components/Register/register';
import Particles from 'react-particles-js';
import './App.css';


const particlesOptions = {
          
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 800
              }
            }
              }
            }        
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',

      //UX modification
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    } 
  }

  loadUser = (data) => {
    this.setState ({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      entries: data.entries,
      joined: data.joined
    }})
  }

  componentDidMount() {
    fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(console.log)
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

 /*//Image detection:
    onButtonSubmit = () => {
    this.setState({imageUrl: this.setState.input});
    .then(response => {
      if (response) {
        fetch('http://localhost:3000/image', {
          method: 'put', 
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              id: this.state.user.id
        })
      } .then(response => response.json())
      .then(count => {
        this.setState(object.assign( this.state.user, { entries: count }))
      })
    }
       // api for face detection
   //app.models.predict("5270f7d22d414009bf014162b8f906f3", "")
*/

  onRouteChange =(route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
        this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

render () {

   const {isSignedIn, imageUrl, route}= this.state;
    return (
        <div className="App">
           <Particles  className= 'particles'
                params={particlesOptions}
                 />
      
            <Navigation isSignedIn= {isSignedIn} onRouteChange= {this.onRouteChange}/>
            { route === 'home'
              ? <div>
                  <Logo />
                  <Rank />
                  <ImageLinkForm 
                      onInputChange = {this.onInputChange}
                     onButtonSubmit = {this.onButtonSubmit} />
                  <FaceRecognition imageUrl= {imageUrl} />
              </div>
              :   (
                route === 'signin'
                ? <SignIn onRouteChange= {this.onRouteChange}/>
                : <Register loadUser= { this.loadUser} onRouteChange= {this.onRouteChange}/>
              )   
            }
        </div>
      );
    }
  }

export default App;
