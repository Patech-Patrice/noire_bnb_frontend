import React  from 'react';
import DestinationsContainer from './containers/DestinationsContainer'
import AttractionsContainer from './containers/AttractionsContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentsContainer from './containers/CommentsContainer'
import './index.css';
//import './App.css'

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
      <div className="container">
        <Router>
      
       <Route exact path='/' component={DestinationsContainer}/>
       <Route exact path='/' component={AttractionsContainer}/>

       <Route exact path='/' component={CommentsContainer}/>
       </Router>
       <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>
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

