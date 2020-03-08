import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import DestinationsContainer from '../containers/DestinationsContainer'
//import Destination from './Destination';
//import Destination from '';

class  Dcard extends Component{

  render(){
      // console.log(this.props.city);
      
      return(
          <div className="destination col s12">
           
              <Link >
                  <div className="image">
                      <img  />
                  </div>
                  <div className="destination-name"></div>
                  <div className=""></div>
              </Link>
          </div>
      )
  }
}

export default Dcard;