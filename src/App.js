import React from 'react';
import {connect} from 'react-redux';
import {fetchDestinations} from './actions/fetchDestinations';



class App extends React.Component {
  componentDidMount() {
    this.props.fetchDestinations({type: 'FETCH_DESTINATIONS', payload: {name: 'Destinations'}})
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
       This is a React App!
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

export default connect(null, {fetchDestinations})(App);
