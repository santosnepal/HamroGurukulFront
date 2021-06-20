import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../actions/auth';

const ResetPassword = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Redirect to='/' />
    }

    return (
        // <div className='container mt-5'>
        //     <h1>Request Password Reset:</h1>
        //     <form onSubmit={e => onSubmit(e)}>
        //         <div className='form-group'>
        //             <input
        //                 className='form-control'
        //                 type='email'
        //                 placeholder='Email'
        //                 name='email'
        //                 value={email}
        //                 onChange={e => onChange(e)}
        //                 required
        //             />
        //         </div>
        //         <button className='btn btn-primary' type='submit'>Reset Password</button>
        //     </form>
        // </div>
        <body className="hold-transition login-page">
<div className="login-box">
<div className="login-logo">
    <a href="../../index2.html"><b>Reset</b> Password</a>
  </div>
 
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Provide your correct email to get password reset link </p>
    <form onSubmit={e => onSubmit(e)}>
      <div className="input-group mb-3">
                   <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    value={email}
                    onChange={e=> onChange(e)}
                    
                    />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary btn-block" >Reset</button>
          </div>
       </form>
      </div>
    </div>
</div>
</body>
    );
};

export default connect(null, { reset_password })(ResetPassword);
