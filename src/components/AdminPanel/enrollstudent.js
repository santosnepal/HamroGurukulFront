import React, { useState,useEffect } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';
import { signup } from '../../actions/auth';
import axios from 'axios';

const EnrollStudent = ({signup,isAuthenticated  })=>{
  const [courses,updateCourses] = useState([]);
  const [sessionyear,updateSessionyear] = useState([]);
  const [student,updateStudent] = useState([]);
  const [bharti,updateBharti] = useState([]);
  const [chaures,updateChaures] = useState([]);
  
const LoadData =async ()=>{
  const config ={
    headers:{
        'content-type':'application/json',
        'Authorization': `JWT ${localStorage.getItem("access")}`,
        'Accept':'application/json'
    }
};
const cours = await axios.get("http://127.0.0.1:8000/api/viewcourses",config);
const syear = await axios.get("http://127.0.0.1:8000/api/viewsessionyear",config);
const stds = await axios.get("http://127.0.0.1:8000/api/suser/3",config);
const laure  = await axios.get("http://127.0.0.1:8000/api/getenroled",config);
updateBharti(laure);
updateCourses(cours);
updateSessionyear(syear);
updateStudent(stds);
console.log(stds);


}
useEffect(() => {
  console.log("Hey i am calling");
 LoadData();
 
}, []);

const Chaure = () =>{
  const i = student.data.length;
  const j = bharti.data.length;
  console.log('called');
  let k=0;
  for(const std in student.data){
    k=0;
    for(const laure in bharti.data){
      if(std.id===laure.student_id){
       break;
      }
      k=k+1;
      if(k===i){
        const hai = {...chaures,std};
        updateChaures(hai);
        console.log(chaures);
      }

      
    }
  }
}

const worker =async ()=>{
  const stdids = bharti.data.map(br=>(
    br.student_id
  ))
  console.log(stdids);
//     const student_id=+document.getElementById("student_id").value;
//     const course_id = +document.getElementById("course_name").value;
//     const session_year_id = +document.getElementById("session_year").value;
   
//     const config ={
//         headers:{
//             'content-type':'application/json',
//             'Authorization': `JWT ${localStorage.getItem("access")}`,
//             'Accept':'application/json'
//         }
//     };

//     const body1=JSON.stringify({student_id,course_id,session_year_id})
    
 
// //   console.log(body1);
// //   console.log(body2);
// const res1=await axios.post("http://127.0.0.1:8000/api/enrollstudent",body1,config);

    

   

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
              <h2 className="card-title">Enroll Student</h2>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <div className='container mt-5'>
            
           
             
            <div className='form-group'>
                <div className='form-group'>
                    <p>Student Name</p>
                    <select className='form-control'
                            name="student_name"
                            id = "student_id"
                            >
                             {/* <Chaure /> */}
                               
                            </select>
                </div>
            <div className='form-group'>
                <p>Course Name</p>
                 <select className='form-control'
                 name="course_id"
                 id= 'course_name'
                 
                 >
                   
                   {courses.data?(courses.data.map(csr=>(
                     <option  value={csr.id}>{csr.course_name}</option>
                   )))
                   :<option>N/A</option>}
                 </select>
               </div>
               <div className='form-group'>
                   <p>Session Year</p>
                 <select className='form-control' id = 'session_year'
                 name="session_year_id"
                   
                 >
                   {sessionyear.data?sessionyear.data.map(syr=>(
                     <option   value = {syr.id}>{syr.session_start_year} to {syr.session_end_year}</option>
                   )):<option>N/A</option>}
                 </select>
               </div>
                <button className='btn btn-primary' onClick={Chaure} type='submit'>Register</button>
            </div>
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

export default connect( mapStateToProps, { signup  })(EnrollStudent);

//#region 

//#endregion