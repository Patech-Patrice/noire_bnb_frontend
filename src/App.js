import React from 'react';



class App extends React.Component {
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/destinations/1", {
     
       method: "GET",
       headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
       
     })
     .then(r => r.json())
     .then(data => console.log(data))
    

   

  }

  render() {
  return (
    <div className="App">
       This is a React App!
    </div>
  );
}
}

export default App;
