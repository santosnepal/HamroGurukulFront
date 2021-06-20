import React ,{ useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
const StudentPanel =({isAuthenticated})=>{
    if (!isAuthenticated) {
        return <Redirect to='/login' />
    }
    return(
        <div>
            
            <h1>Hello from Student  Panel</h1>
        </div>

    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(StudentPanel);