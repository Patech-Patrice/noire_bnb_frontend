import React from 'react';
import DestinationsContainer from './containers/DestinationsContainer'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import AttractionsContainer from './containers/AttractionsContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentsContainer from './containers/CommentsContainer'
import Home from './components/Home';
import './index.css';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {
   
  componentDidMount() {
  }

  render() {
  return (
      <div  className="App">  
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="mr-auto">
            <li><Link to="/home">Home</Link></li>
              <li><Link to="/destinations">Destinations</Link></li>
                <li><Link to="/attractions">Attractions</Link></li>
          </Nav>
        </Navbar>
         <Route path="/attractions">
            <AttractionsContainer />
          </Route>
           <Route path="/destinations">
             <DestinationsContainer/>
           </Route>
            <Route path="/home">
              <Home />
            </Route>
          <Route path="/comments">
            <CommentsContainer />
          </Route>
     </div> 
  );
}
}

//lets you see what is in the redux store
//const mapStateToProps = (state) => {
  //return {
    //destinations: state.destinations 
  //}
//}

//lets you add to the redux store(can also use an action creator)
//const mapDispatchToProps = (state) => {
  //return {
  //}
//}

export default App;

