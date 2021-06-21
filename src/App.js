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
      </Switch>
    </Router>
  </Provider>
)

export default App;
