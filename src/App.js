import React  from 'react';
import DestinationsContainer from './containers/DestinationsContainer'

import AttractionsContainer from './containers/AttractionsContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentsContainer from './containers/CommentsContainer'
import './index.css';
//import 'style.css';
import './App.css'

//router will live in this file
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
//navbar renders here




class App extends React.Component {
 
  componentDidMount() {
   

  }

  render() {
  return (
    <div className="App">
      <div className="container"> 
      <nav>
        <ul>
      <li><Link to="/destinations">Destinations</Link></li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/attractions">Attractions</Link></li>
      <li><Link to="/comments">Comments</Link></li>
       <DestinationsContainer/>

       <Route path="/attractions">
            <AttractionsContainer />
          </Route>
          <Route path="/comments">
            <CommentsContainer />
          </Route>
       
 
 
       </ul>
        </nav> 
     </div> 
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

//export default connect(null, {fetchDestinations})(App);
//export default connect()(App);
export default App;

