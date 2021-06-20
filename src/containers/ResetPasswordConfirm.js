import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../actions/auth';

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });

    const { new_password, re_new_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        const uid = match.params.uid;
        const token = match.params.token;

        reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Redirect to='/' />
    }

    return (
        // <div className='container mt-5'>
        //     <form onSubmit={e => onSubmit(e)}>
        //     <div className='form-group'>
        //             <input
        //                 className='form-control'
        //                 type='password'
        //                 placeholder='New Password'
        //                 name='new_password'
        //                 value={new_password}
        //                 onChange={e => onChange(e)}
        //                 minLength='8'
        //                 required
        //             />
        //         </div>
        //         <div className='form-group'>
        //             <input
        //                 className='form-control'
        //                 type='password'
        //                 placeholder='Confirm New Password'
        //                 name='re_new_password'
        //                 value={re_new_password}
        //                 onChange={e => onChange(e)}
        //                 minLength='8'
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
type="password"
placeholder="Password"
name="password"
required
value={new_password}
minLength="8"
onChange={e=> onChange(e)}

/>
<div className="input-group-append">
<div className="input-group-text">
<span className="fas fa-lock"></span>
</div>
</div>

</div>
<div className="input-group mb-3">

        
<input
className="form-control"
type="password"
placeholder="Password"
name="password"
required
value={re_new_password}
minLength="8"
onChange={e=> onChange(e)}

/>
<div className="input-group-append">
<div className="input-group-text">
<span className="fas fa-lock"></span>
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

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);