import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const Navbar = ({ logout, isAuthenticated }) => {
    const [redirect, setRedirect] = useState(false);

    const logout_user = () => {
        logout();
        setRedirect(true);
    };

    const guestlinks = () => (
        <Fragment>
            <li className='nav-item'>
                <Link className='nav-link' to='/login'>Login</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/signup'>Signup</Link>
            </li>
            
        </Fragment>
    );

    const authLinks = () => (
        <li className='nav-item'>
            <a className='nav-link' href='#!' onClick={logout_user}>Logout</a>
        </li>
    );

    return (
        <Fragment>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item active'>
                            
                        </li>
                        {isAuthenticated ? authLinks() : guestlinks()}
                    </ul>
                </div>
            </nav>
            {redirect ? <Redirect to='/' /> : <Fragment></Fragment>}
        </Fragment>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);