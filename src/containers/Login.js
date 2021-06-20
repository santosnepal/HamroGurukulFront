import React ,{useState} from 'react';
import {Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { login } from '../actions/auth';
const Login=({login,isAuthenticated,who})=>{
    const[formData,setFormData] = useState({
        email:'',
        password:'',
    });
    const{email,password}=formData;
    const onChange = e => setFormData({...formData,[e.target.name]:e.target.value});
    const onSubmit = e =>{
        e.preventDefault();
        login(email,password)
    };
    //Is user Authenticated?
    //Reedirect to home
    if(isAuthenticated){
      console.log("kkkkkahahah");
        <Redirect to="/"/>
       
    }
    return(
       
<body className="hold-transition login-page">
<div className="login-box">
<div className="login-logo">
    <a href="../../index2.html"><b>Hamro</b> Gurukul</a>
  </div>
 
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Sign in to Gurukul</p>
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
        <div className="input-group mb-3">

        
                    <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    value={password}
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
            <button type="submit" className="btn btn-primary btn-block" >Sign In</button>
          </div>
          <div className="col-12 text-center">
          Forget Your Password ? <Link to="/ResetPassword">Reset</Link>
          </div>
       </form>
      </div>
    </div>
</div>
</body>
    );
}
const mapStateToProps = (state) =>({
    isAuthenticated:state.auth.isAuthenticated,
    who:state.auth.user_types
});
export default connect(mapStateToProps,{login})(Login);