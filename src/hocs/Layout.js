import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {checkAuthenticated,load_user} from '../actions/auth';
import NavBar from '../components/NavBar';
import AdminPanel from '../components/AdminPanel/Adminpanel';
import StaffHome from '../components/StaffPanel/staff_home_template';

import StudentPanel from '../components/StudentPanel/StudentPanel';
import Base from '../components/StaffPanel/base_template';
import Dashboard from '../components/StaffPanel/Dashboard';
import EditStudent from '../components/StaffPanel/edit_student_result';
import { Link, Redirect } from 'react-router-dom';
const Layout=({ checkAuthenticated, load_user,who, children })=>{
    useEffect(()=>{
        console.log("aaye");
        checkAuthenticated();
        load_user();

    },[]);
    if(who==="1"){
        return(
            <div>
                <NavBar/>
                <AdminPanel/>
            </div>
        );
    }
    if(who==="2"){
        
      
        
           
         return  <Redirect to= "/staffhome" />
          
        // return(
        //     // <Redirect to="staffhomes" />
        //     // <Link to="/staffhomes"></Link>
        //     // <div>
        //     // <Redirect to="/staffhome"/>
        //     // {/* <StaffHome/> */}
        //     // </div>
        // )
       // <Redirect to="/staffhomes" />
    }
    if(who==="3"){
        return(
            <div>
                <NavBar/>
                <StudentPanel/>
            </div>
        )
    }
    else{
        return(
            <div>
                <NavBar/>
                {children}
            </div>
        );
    }

};
const mapStateToProps = (state) =>({
    who:state.auth.user_types
});
export default connect(mapStateToProps,{checkAuthenticated,load_user})(Layout);
