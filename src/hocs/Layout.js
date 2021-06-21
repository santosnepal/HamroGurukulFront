import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {checkAuthenticated,load_user} from '../actions/auth';
import NavBar from '../components/NavBar';
import AdminPanel from '../components/AdminPanel/Adminpanel';
import StudentHome from '../components/StudentPanel/student_home_template';
import StudentBase from '../components/StudentPanel/base_template'
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
            // <div>
            //     <NavBar/>
            //     <StudentHome/>
                
                
            // </div>
            <Redirect to= "/studenthome" />
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
