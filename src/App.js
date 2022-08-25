import { Component } from 'react';
import ParticlesComponent from './Components/Particles';
import './App.css';
import FaceRecogntion from './Components/FaceRecognition';
import ImageLinkForm from './Components/ImageLinkForm';
import Logo from './Components/Logo';
import Navigation from './Components/Navigation';
import Rank from './Components/Rank';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      USER_ID: 'bzb0xw4yumac',
      // Your PAT (Personal Access Token) can be found in the portal under Authentification
      PAT: '01ba72f5e58f4a4b8afa0f86439cf98f',
      APP_ID: 'ZTM-Face-Recognition',
      // Change these to whatever model and image URL you want to use
      MODEL_ID: 'face-detection',
      MODEL_VERSION_ID: "6dc7e46bc9124c5c8824be4822abe105",
      IMAGE_URL: '',
      box: {},
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value },
      () => {
        console.log("onInputChange CL:", this.state.input)
      });
  };

  onButtonSubmit = (event) => {
    event.preventDefault();
    this.setState({ IMAGE_URL: this.state.input },
      () => {
        console.log("onButtonSubmit CL:", this.state.IMAGE_URL)
        return this.onApiCall()
      });
  }

  onApiCall = () => {
    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": this.state.USER_ID,
        "app_id": this.state.APP_ID
      },
      "inputs": [
        {
          "data": {
            "image": {
              "url": this.state.IMAGE_URL
            }
          }
        }
      ]
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + this.state.PAT
      },
      body: raw
    };

    fetch("https://api.clarifai.com/v2/models/" + this.state.MODEL_ID + "/versions/" + this.state.MODEL_VERSION_ID + "/outputs", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));



  };


  // ! RENDER METHOD BELOW THIS LINE
  render() {
    return (
      <div className="App">
        <ParticlesComponent className='particles' />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecogntion IMAGE_URL={this.state.IMAGE_URL} />
      </div>
    );
  }
}



export default App;

