import React from 'react';
import {Text} from 'react';
//import './App.css';
//import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
//import logo from 'public/logo.png';

class Home extends React.Component{

  
  

    render(){
       

        return(<>
   
            <div>
            <img className="container"
      src="https://images.pexels.com/photos/2125075/pexels-photo-2125075.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt="new"
      />
      </div>
        </>
        )
    }
}

export default Home;