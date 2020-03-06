import React  from 'react';
import DestinationsContainer from './containers/DestinationsContainer'
import AttractionsContainer from './containers/AttractionsContainer'
//import rootReducer from 'src/reducers/rootReducer.js';
import CommentsContainer from './containers/CommentsContainer'


//router will live in this file
import { BrowserRouter as Router, Route } from 'react-router-dom';
//navbar renders here




class App extends React.Component {
 
  componentDidMount() {
    //this.props.fetchDestinations({type: 'FETCH_DESTINATIONS', payload: {name: 'Destinations'}})
    //fetch("http://localhost:3000/api/v1/destinations", {
      // method: "GET",
       //headers : { 
        //'Content-Type': 'application/json',
        //'Accept': 'application/json'
      // }
     //})
     //.then(r => r.json())
     //.then(data => console.log(data))

  }

  render() {
  return (
    <div className="App">

       
        <Router>
    
       <DestinationsContainer />
       <Route exact path='/' component={AttractionsContainer}/>
       <Route exact path='/' component={CommentsContainer}/>
       </Router>
      
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

