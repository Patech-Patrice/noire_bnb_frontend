import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component{

    render(){
        return(
            <div className="home">
               <h4>Welcome to my bucket destination app.  Please enjoy browsing through some of the destinations that I would love to visit before I kick the bucket!</h4><br/><br/>
               <h4>When you visit an attraction, feel free to leave a comment.  Is this attraction on your bucket list?  Have you already visited a certain city before?  Feel free to let me know!</h4> 
            </div>
        )
    }
}

export default Home;