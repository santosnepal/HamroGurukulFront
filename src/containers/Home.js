import React from 'react';
import { Link} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
const Home = ()=>(
    <div className="container">
        <div className="jumbotron mt-5">
            <h1 className="display-4">Welcome to Authentication System</h1>
            <p className="lead">This is an awesome auhentication system </p>
            <hr className="my-4"/>
            <p>Click the Log In Button</p>
        
            
            <Link className="btn btn-primary btn-lg" to="/login" role="button">Log In</Link>
            
            
            </div>
    </div>
    
);
export default Home;