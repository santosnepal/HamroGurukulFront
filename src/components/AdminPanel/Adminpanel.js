import React ,{ useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Footer from './Footer';
const AdminPanel =({isAuthenticated})=>{
    if (!isAuthenticated) {
        return <Redirect to='/login' />
    }
    return (
        <div className="wrapper">
          <Header/>
          <Menu/>
          <Dashboard/>
          <Footer/>
        </div>
      );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(AdminPanel);