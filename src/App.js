import { Component } from 'react';
import ParticlesComponent from './Components/Particles';
import './App.css';
import FaceRecogntion from './Components/FaceRecognition';
import ImageLinkForm from './Components/ImageLinkForm';
import Logo from './Components/Logo';
import Navigation from './Components/Navigation';
import Rank from './Components/Rank';
import SignIn from './Components/SignIn';
import Register from './Components/Register';

const initialState = {  // Your PAT (Personal Access Token) can be found in the portal under Authentification
  IMAGE_URL: '',
  input: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    email: '',
    name: '',
    entries: 0,
    joined: '',

  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        email: data.email,
        name: data.name,
        entries: data.entries,
        joined: data.joined
      }
    }, () => {
      return this.state.user;
    });
  };

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    };
    this.setState({ route: route });
  }

  calculateFaceLocation = (data) => {
    const ClarifaiFACE = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: ClarifaiFACE.left_col * width,
      topRow: ClarifaiFACE.top_row * height,
      rightCol: width - (ClarifaiFACE.right_col * width),
      bottomRow: height - (ClarifaiFACE.bottom_row * height)
    }
  };

  displayBoundingBox = (box) => {
    this.setState({ box: box },
      () => {
        return this.state.box;
      });
  };


  onInputChange = (event) => {
    this.setState({ input: event.target.value },
      () => {
        return this.state.input
      });
  };

  onButtonSubmit = () => {
    this.setState({ IMAGE_URL: this.state.input });
    fetch('https://smart-brain-api-production.up.railway.app/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('https://smart-brain-api-production.up.railway.app/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count }))
            })
            .catch(console.log)

        }
        this.displayBoundingBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

  // ! RENDER METHOD BELOW THIS LINE
  render() {
    const { IMAGE_URL, box, isSignedIn } = this.state;
    const { name, entries } = this.state.user;
    return (
      <div className="App">
        <ParticlesComponent className='particles' />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
        {
          this.state.route === 'home'
            ?
            <>
              <Logo />
              <Rank name={name} entries={entries} />
              <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
              <FaceRecogntion
                IMAGE_URL={IMAGE_URL}
                box={box}
              />
            </>
            :
            (
              this.state.route === 'signin'
                ?
                <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                :
                <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
            )

        }
      </div>
    );
  };
}



export default App;

