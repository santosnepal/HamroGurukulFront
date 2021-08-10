import React, { useState,useEffect } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';
import axios from 'axios';
import { toast } from 'react-toastify';


const StaffFeedBackAdmin = ({logout,isAuthenticated  })=>{
  const [feedbacks,updateFeedback] = useState([]);
  const [staffs,updateStaffs] = useState([]);
  const [receiver,updateReceiver] = useState([]);
  const [fedr,updateFedr] = useState({created_at:'',
  feedback:'',
  feedback_reply:'',
  id:'',
  staff_id:'',
  updated_at: ''});
  let name = '';
  const LoadData= async ()=>{
    const config ={
      headers:{
          'content-type':'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Accept':'application/json'
      }
  };
        const dataS= await axios.get("http://127.0.0.1:8000/api/getstafffeedback",config);
        const data= await axios.get("http://127.0.0.1:8000/api/suser/2",config);
        updateFeedback(dataS);
        updateStaffs(data);
      
  };
  let showModel=false;
  const Model=({props})=>{
    console.log(props);
  //   return(
  //     <div>
  //       <div className="modal fade" id="reply_modal" role="dialog">
  //   <div className="modal-dialog">
  //     {/* Modal content*/}
  //     <div className="modal-content">
  //       <div className="modal-header">
  //         <h4 className="modal-title">Reply</h4>
  //         <button type="button" className="close" data-dismiss="modal">×</button>
  //       </div>
  //       <div className="modal-body">
  //         <p>Reply To :{staffs.data?staffs.data.map(stf=>(
  //           stf.id===props.iid?`${stf.first_name} ${stf.last_name}`:null
  //         )): null } <span id="reply_name" /></p>
  //         <input type="hidden" id="reply_id" name="reply_id" />
  //         <textarea className="form-control" rows={5} id="reply_message" defaultValue={""} />
  //         <button id="reply_btn" className="btn btn-info btn-block">Reply</button>
  //       </div>
  //       <div className="modal-footer">
  //         <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  //     </div>
  //   );

  const reply = async ()=>{
    const config ={
      headers:{
          'content-type':'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Accept':'application/json'
      }
    };
    const rep_msg = document.getElementById("reply_message").value;
   const feeds =  feedbacks.data.filter(fee=>{
      if(fee.id===props.fid){
        console.log(fee);
        return fee;
      }
    });
    console.log(feeds[0]);
   const aa= feeds[0];
 const {created_at,feedback,id,staff_id,updated_at} = aa;
 const feedback_reply=rep_msg;
  const  body = JSON.stringify({created_at,feedback,feedback_reply,id,staff_id,updated_at});
   console.log(body);
  
 // const rep_msg = document.getElementById("reply_message").value;
  //fees.feedback_reply= rep_msg;
  ///fff.feedback_reply=rep_msg;
  //console.log(fedr);
  const res = await axios.put(`http://127.0.0.1:8000/api/editstafffeedback/${props.fid}`,body,config)
  if(res.status===200){
    showModel = false;
    toast.success(`Reply Sent  sucessfully`);
    document.getElementById("reply_message").value="";
   LoadData();
   document.getElementById("closes").click();
  }
  else{

    toast.error(` Couldn't send  Reply  please try again later`);
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
        <h4 className="modal-title">Send Reply to {staffs.data?staffs.data.map(stf=>(
            stf.id===props.iid?`${stf.first_name} ${stf.last_name}`:null
           )): null } <span id="name_span" /></h4>
        <button type="button" className="close" data-dismiss="modal">×</button>
      </div>
      <div className="modal-body">
        <div className="form-group">
        <textarea className="form-control" rows={5} id="reply_message" defaultValue={""} />
          
        </div>
        <div className="form-group">
          <button className="btn btn-info btn-block send_notification_btn"  onClick={reply}  type="button">Reply</button>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button"  id = "closes" className="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
  }
  useEffect(async ()=>{
    LoadData();
  },[])
  const trys = (hello) =>{
    updateReceiver(hello);
    console.log(hello);
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
        <div className="col-md-12">
          {/* general form elements */}
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Staff Feedback</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <div className="table">
              
              <table className="table">
                <tbody><tr>
                    <th>ID</th>
                    <th>Staff ID</th>
                    <th>Staff Name</th>
                    <th>Message</th>
                    <th>Reply Message</th>
                    <th>Sended On</th>
                    <th>Reply</th>
                  </tr>{feedbacks.data?feedbacks.data.map(fee=>(
                    <tr>
                    <td>{fee.id} </td>
                    <td>{fee.staff_id} </td>
                    <td>{staffs.data?staffs.data.map(staff=>(
                      fee.staff_id===staff.id?`${staff.first_name} ${staff.last_name}`:``
                    )):`N/A`} </td>
                    <td>{fee.feedback} </td>
                    <td>{fee.feedback_reply}</td>
                    <td>{fee.created_at} </td>
                    <td>
                     
                    <button to="#" className="btn btn-success show_notification" data-toggle="modal" data-target="#myModal"  onClick={showModel=true, ()=>trys({hello:'hello',iid:fee.staff_id ,fid:fee.id})}  >Reply</button>
                     
                    </td>
                  </tr>

                  )):
                  <tr>
                  <td>N/A </td>
                  <td>N/A </td>
                  <td>N/A </td>
                  <td>N/A </td>
                  <td>N/A </td>
                  <td>
                   
                    <button className="btn btn-success reply_open_modal" data-toggle="modal" data-target="#reply_modal" >Reply</button>
                   
                  </td>
                </tr>
}
                  
                  </tbody></table>
            </div>
          </div>
          {/* /.card */}
        </div>
      </div>
    </div>
  </section>
   {/* Modal */}
   {showModel?<Model props={receiver} />:``}
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

export default connect( mapStateToProps, { logout })(StaffFeedBackAdmin);