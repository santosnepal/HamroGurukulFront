import React, { useState } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';


const StudentFeedBackAdmin = ({logout,isAuthenticated  })=>{
  const [redirect, setRedirect] = useState(false);
  const logout_user = () => {
      logout();
      setRedirect(true);
      
  };
  if(isAuthenticated ){
    console.log("chor haina ma ");
  } 
  else{
    
    return <Redirect to="/"/>
  }
  let showModel=false;
  const Model=()=>{
    return(
      <div>
        <div className="modal fade" id="reply_modal" role="dialog">
    <div className="modal-dialog">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Reply</h4>
          <button type="button" className="close" data-dismiss="modal">×</button>
        </div>
        <div className="modal-body">
          <p>Reply To : <span id="reply_name" /></p>
          <input type="hidden" id="reply_id" name="reply_id" />
          <textarea className="form-control" rows={5} id="reply_message" defaultValue={""} />
          <button id="reply_btn" className="btn btn-info btn-block">Reply</button>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
      </div>
    );
  }
  
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
              <h3 className="card-title">Student Feedback</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <div className="table">
              
              <table className="table">
                <tbody><tr>
                    <th>ID</th>
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Student Session</th>
                    <th>Message</th>
                    <th>Sended On</th>
                    <th>Reply</th>
                  </tr><tr>
                    <td>id </td>
                    <td>id </td>
                    <td>first_name  last_name </td>
                    <td>session_start_year  - session_end_year </td>
                    <td>feedback </td>
                    <td>created_at </td>
                    <td>
                     
                      <button className="btn btn-success reply_open_modal" data-toggle="modal" data-target="#reply_modal" onClick={showModel=true}>Reply</button>
                     
                    </td>
                  </tr></tbody></table>
            </div>
          </div>
          {/* /.card */}
        </div>
      </div>
    </div>
  </section>
  {/* Modal */}
  {showModel?<Model/>:` `}
  </div>
  <Footer/>
</div>
);
// return(
//   <div>
//     Hello guys
//   </div>
// )
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect( mapStateToProps, { logout })(StudentFeedBackAdmin);