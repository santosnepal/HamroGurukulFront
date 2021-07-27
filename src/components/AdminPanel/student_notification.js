import React, { useState,useEffect } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';
import axios from 'axios';
import { toast } from 'react-toastify';


const SendStudentNotificationAdmin = ({logout,isAuthenticated  })=>{
  const [Student,updateStudent] = useState([]);
  const [receiver,updateReceiver] = useState([]);
  
  const LoadData= async ()=>{
    const config ={
      headers:{
          'content-type':'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Accept':'application/json'
      }
  };
        const dataS= await axios.get("http://127.0.0.1:8000/api/suser/3",config);
        
	updateStudent(dataS);
  };
   useEffect(() => {
     
    LoadData();
  }, []);
  const Modal =({props})=>{
    console.log(props);
    const sendnotificaton = async () =>{
      const config ={
        headers:{
            'content-type':'application/json',
            'Authorization': `JWT ${localStorage.getItem("access")}`,
            'Accept':'application/json'
        }
    };
    const student_id = props.iid;
    const message = document.getElementById("message_not").value;
    const body = JSON.stringify({message,student_id});
    console.log(body);
    const res = await axios.post("http://127.0.0.1:8000/api/sendstudentnotification",body,config) ;
    if(res.status===200){
      showModel = false;
      toast.success(`Notification Sent to ${props.nam} sucessfully`);
    }
    else{
  
      toast.error(` Couldn't send  Notification to  ${props.nam}  please try again later`);
    }
    }
    
    return(
      <div>
         {/* /.content */}
  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Send Notification to {props.nam} <span id="name_span" /></h4>
          <button type="button" className="close" data-dismiss="modal">×</button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <input type="text" name="message" className="form-control" id="message_not" />
            <input type="hidden" name="student_id" className="form-control" id="student_id" />
          </div>
          <div className="form-group">
            <button className="btn btn-info btn-block send_notification_btn" onClick={sendnotificaton} type="button">Send Notification</button>
          </div>
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
  let showModel=false;
  const trys = (hello) =>{
    updateReceiver(hello);
    // <Modal props={receiver} />
    
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
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Students</h3>
              <div className="card-tools">
                <div className="input-group input-group-sm" style={{width: 150}}>
                  <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-default"><i className="fas fa-search" /></button>
                  </div>
                </div>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body table-responsive p-0">
              
              <table className="table table-hover text-nowrap">
              <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {Student.data?Student.data.map(std =>(

                      <tr>
                      <td> {std.id} </td>
                      <td> {std.first_name} </td>
                      <td> {std.last_name} </td>
                      <td> {std.email} </td>
                      <td><button to="#" className="btn btn-success show_notification" data-toggle="modal" data-target="#myModal"  onClick={ showModel=true ,()=>trys({nam:`${std.first_name} ${std.last_name}`,iid:std.id })}  >Send Notification</button></td>
                      </tr>
                    )):<tr>
                        <td>N/A</td>
                        <td>N/A</td>
                        <td>N/A</td>
                        <td>N/A</td>
                        
                        <td><button to="#" className="btn btn-success show_notification" data-toggle="modal" data-target="#myModal" disabled={true} onClick={showModel=true}>Send Notification</button></td>
                      </tr>}
                  {/* <tr>
                    <td> id </td>
                    <td> first_name </td>
                    <td> last_name </td>
                    <td> username </td>
                    <td> email </td>
                    <td><button to="#" className="btn btn-success show_notification" data-toggle="modal" data-target="#myModal" onClick={showModel=true}>Send Notification</button></td>
                  </tr> */}
                  </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
      </div>
    </div>
  </section>
  {showModel?<Modal props={receiver}/>:``}
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

export default connect( mapStateToProps, { logout })(SendStudentNotificationAdmin);