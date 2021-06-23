//#region 
import './App.css';
import Home from './containers/Home';
import Login from'./containers/Login';
//import Activate from'./containers/Activate';
import ResetPasswordConfirm from'./containers/ResetPasswordConfirm';
import ResetPassword from'./containers/ResetPassword';
import Signup from'./containers/Signup';
import Activate from './containers/Activate';
import {Provider} from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import{ BrowserRouter as Router ,Route,Switch } from 'react-router-dom';
import Layout from './hocs/Layout';
import Notification from './components/StaffPanel/all_notification';
import EditStudent from './components/StaffPanel/edit_student_result';
import AddResult from './components/StaffPanel/staff_add_result';
import StaffHome from './components/StaffPanel/staff_home_template';
import ApplyLeave from './components/StaffPanel/staff_apply_leave';
import FeedBack from './components/StaffPanel/staff_feedback';
import Profile from './components/StaffPanel/staff_profile';
import TakeAttendance from './components/StaffPanel/staff_take_attendance';
import UpdateAttendance from './components/StaffPanel/staff_update_attendance';
import StudentHome from './components/StudentPanel/student_home_template';
import StudentApplyLeave from './components/StudentPanel/student_apply_leave';
import StudentViewAttendance from './components/StudentPanel/student_attendance_data';
import StudentFeedback from './components/StudentPanel/student_feedback';
import StudentResult from './components/StudentPanel/student_result';
import StudentAttendancePost from './components/StudentPanel/student_view_attendance';
import StudentNotification from './components/StudentPanel/all_notification';
import AdminHome from './components/AdminPanel/home_content';
import AddStaff from './components/AdminPanel/add_staff_template';
import AddStudent from './components/AdminPanel/add_student_template';
import ManageStaffs from './components/AdminPanel/manage_staff_template';
import ManageStudent from './components/AdminPanel/manage_student_template';
import AddCousrse from './components/AdminPanel/add_course_template';
import ManageCourse from './components/AdminPanel/manage_course_template';
import AddSubject from './components/AdminPanel/add_subject_template';
import ManageSubject from './components/AdminPanel/manage_subject_template';
import ManageSession from './components/AdminPanel/manage_session_template';
import StudentFeedBackAdmin from './components/AdminPanel/student_feedback_template';
import StaffFeedBackAdmin from './components/AdminPanel/staff_feedback_template';
import StaffLeaveAdmin from './components/AdminPanel/staff_leave_view';
import StudentLeaveAdmin from './components/AdminPanel/student_leave_view';
import AdminViewAttendance from './components/AdminPanel/admin_view_attendance';
import SendStaffNotificationAdmin from './components/AdminPanel/staff_notification';
import SendStudentNotificationAdmin from './components/AdminPanel/student_notification';
//#endregion
const App =()=>(
  <Provider store={store}>
    <Router>
      <Layout>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/ResetPassword" component={ResetPassword}/>
        <Route exact path="/password/reset/confirm/:uid/:token" component={ResetPasswordConfirm}/>
        <Route exact path='/activate/:uid/:token' component={Activate} />
        <Route exact path='/signup' component={Signup} />
        </Switch>

      </Layout>
      <Switch>
        <Route exact path='/staffhome' component={StaffHome} />
        <Route exact path='/staffnotification' component={Notification} />
        <Route exact path='/staffeditresult' component={EditStudent} />
        <Route exact path='/staffaddresult' component={AddResult} />
        <Route exact path='/staffapplyleave' component={ApplyLeave} />
        <Route exact path='/stafffeedback' component={FeedBack} />
        <Route exact path='/staffprofile' component={Profile} />
        <Route exact path='/safftakeattendance' component={TakeAttendance} />
        <Route exact path='/staffupdateattendance' component={UpdateAttendance} />
        </Switch>
      <Switch>
      <Route exact path='/studenthome' component={StudentHome}/>
      <Route exact path='/studentapplyleave' component={StudentApplyLeave}/>
      <Route exact path='/studentviewattendance' component={StudentViewAttendance}/>
      <Route exact path='/studentfeedback' component={StudentFeedback}/>
      <Route exact path='/studentviewresult' component={StudentResult}/>
      <Route exact path='/studentviewattendancedata' component={StudentAttendancePost}/>
      <Route exact path='/studentviewnotification' component={StudentNotification}/> 
      </Switch>
      <Switch>
        <Route exact path='/adminhome' component={AdminHome}/>
        <Route exact path='/addstaff' component={AddStaff}/>
        <Route exact path='/addstudent' component={AddStudent}/>
        <Route exact path='/managestaff' component={ManageStaffs}/>
        <Route exact path='/managestudent' component={ManageStudent}/>
        <Route exact path='/addcourse' component={AddCousrse}/>
        <Route exact path='/managecourse' component={ManageCourse}/>
        <Route exact path='/addsubject' component={AddSubject}/>
        <Route exact path='/managesubject' component={ManageSubject}/>
        <Route exact path='/managesession' component={ManageSession}/>
        <Route exact path='/studentfeedbackadmin' component={StudentFeedBackAdmin}/>
        <Route exact path='/stafffeedbackadmin' component={StaffFeedBackAdmin}/>
        <Route exact path='/staffleaveadmin' component={StaffLeaveAdmin}/>
        <Route exact path='/studentleaveadmin' component={StudentLeaveAdmin}/>
        <Route exact path='/adminviewhajir' component={AdminViewAttendance}/>
        <Route exact path='/ssna' component={SendStaffNotificationAdmin}/>
        <Route exact path='/sstna' component={SendStudentNotificationAdmin}/>
      </Switch>
    </Router>
  </Provider>
)

export default App;
