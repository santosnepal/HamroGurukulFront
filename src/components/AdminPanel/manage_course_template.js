import React, { useState } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';
import axios from 'axios';
import { useEffect } from 'react';
import {toast} from 'react-toastify';
import Swal from 'sweetalert2';


const ManageCourse = ({logout,isAuthenticated  })=>{
  let showModel=false;
const [courses,setCourses] = useState([]);
const [receiver,updateReceiver] = useState([]);
const loadData=async ()=>{
  const config ={
    headers:{
        'content-type':'application/json',
        'Authorization': `JWT ${localStorage.getItem("access")}`,
        'Accept':'application/json'
    }
};
const loadedData = await axios.get("http://127.0.0.1:8000/api/viewcourses",config);
setCourses(loadedData);  
}
useEffect(()=>{
  loadData();
},[])
const trys = (hello) =>{
  updateReceiver(hello);
  console.log(hello);
  // <Modal props={receiver} />
  
}


const Editstaff= ({props})=>{
  const config ={
    headers:{
        'content-type':'application/json',
        'Authorization': `JWT ${localStorage.getItem("access")}`,
        'Accept':'application/json'
    }
};
  console.log(props);
  console.log("clicked for me");
  let {course_name,created_at,id,updated_at} = props;
   
   const edit = async ()=>{
      course_name=document.getElementById("fname").value;
     
      const body = JSON.stringify({course_name,created_at,id,updated_at});
      console.log(body);
      const res = await axios.put(`http://127.0.0.1:8000/api/editcourse/${id}`,body,config);
      if(res.status===200){
        //showModel = false;
        console.log(res.data);
        toast.success(`Course Edited successfully`);
        
        loadData();
        document.getElementById("closes").click();
        //showModel=false;
      }
      else{
    
        toast.error(` Couldn't Edit Course`);
      }
   }
  return(
    <div className="modal fade" id="myModal" role="dialog">
  <div className="modal-dialog"></div>
    <div id = "second">
{/* Main content */}
<section className="content">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        {/* general form elements */}
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Edit Course</h3>
          </div>
          {/* /.card-header */}
          {/* form start */}
          <div>
           
            <div className="card-body">
              
              <div className="form-group">
                <label>Course Name</label>
                <input type="text"  id= "fname" className="form-control" placeholder={props.course_name} name="first_name" defaultValue={props.course_name} />
              </div>
             
             
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <button onClick={edit} className="btn btn-primary btn-block">Save Course</button>
            </div>
          </div>
        </div>
        {/* /.card */}
      </div>
    </div>
  </div>
</section>
<div className="modal-footer">
        <button type="button" id="closes" className="btn btn-default" data-dismiss="modal">Close</button>
      </div>
</div>
</div>


  )
}
const warning =(props)=>{
  const config ={
    headers:{
        'content-type':'application/json',
        'Authorization': `JWT ${localStorage.getItem("access")}`,
        'Accept':'application/json'
    }
};
  console.log(props);
  Swal.fire({  
   
    title: 'Are you sure?',  
    text: 'Subject and its all related data will be removed',  
    icon: 'warning',  
    showCancelButton: true,  
    confirmButtonColor: '#3085d6',  
    cancelButtonColor: '#d33',  
    confirmButtonText: 'Yes!'  
  }).then(
    function async () { 
      /*Your Code Here*/
    console.log(props); 
     axios.delete(`http://127.0.0.1:8000/api/deletecur/${props.id}`,config).then((res)=>{
      if(res.data==="200ok"){
        Swal.fire({  
          position: 'top-end',  
          icon: 'success',  
          title: 'courses Removed successsfully',  
          showConfirmButton: false,  
          timer: 1500  
        }); 
        loadData();
      }
      else{
        Swal.fire({  
          position: 'top-end',  
          icon: 'error',  
          title: 'Course Removed failed ',  
          showConfirmButton: false,  
          timer: 1500  
        }); 
        loadData();
      }
       
     })
    //console.log(res);
  },
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
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Course Details</h3>
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
                    <th>Course Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.data?courses.data.map(course=>(
                  <tr>
                    <td> {course.id} </td>
                    <td> {course.course_name} </td>
                    <td><button onClick={showModel=true, ()=>trys(course)} data-toggle="modal" data-target="#myModal" className="btn btn-success mr-3">Edit</button>
                    <button onClick={()=>warning(course)} className="btn btn-danger">Remove</button></td>
                  </tr>
                  )):
                  <tr>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td><Link to="#" className="btn btn-success">Edit</Link></td>
                  </tr>
                  }
                  </tbody>
              </table>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  </section>
  {showModel?<Editstaff props={receiver}/>:``}
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

export default connect( mapStateToProps, { logout })(ManageCourse);