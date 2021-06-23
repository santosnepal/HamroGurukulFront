import React, { useState } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';
import { signup } from '../../actions/auth';

const AddStaff = ({signup,isAuthenticated  })=>{
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      re_password: '',
      user_types:'',
  });

  const { first_name, last_name, email, password, re_password,user_types } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
      e.preventDefault();

      if (password === re_password) {
          signup(first_name, last_name, email, 'P@$$w0rd123', 'P@$$w0rd123','2');
          setAccountCreated(true);
      }
  };
return(
<div>
<div className="hold-transition sidebar-mini  layout-fixed">
  
  <AdminBase/>
  
 
  </div>
  <div className="content-wrapper">
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          {/* general form elements */}
          <div className="card card-primary">
            <div className="card-header">
              <h2 className="card-title">Add a new Staff</h2>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <div className='container mt-5'>
            
            <p>Create New  Account For your staff</p>
             
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='First Name*'
                        name='first_name'
                        value={first_name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Last Name*'
                        name='last_name'
                        value={last_name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email*'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
               </div>
                <button className='btn btn-primary' type='submit'>Register</button>
            </form>
            <p className='mt-3'>
                
            </p>
        </div>
          </div>
          {/* /.card */}
        </div>
      </div>
    </div>
  </section>
  </div>
  <Footer/>
</div>
);
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect( mapStateToProps, { signup  })(AddStaff);