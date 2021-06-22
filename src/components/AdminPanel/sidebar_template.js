<div>
  {'{'}% load static %{'}'}
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="index3.html" className="brand-link">
      <img src="{% static " dist img adminltelogo.png" %}" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">AdminLTE 3</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="{% static " dist img user2-160x160.jpg" %}" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="{% url 'admin_profile' %}" className="d-block">{'{'}{'{'} user.username {'}'}{'}'}</a>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          <li className="nav-item">
            {'{'}% url 'admin_home' as admin_home %{'}'}
            <a href="{{ admin_home }}" className="nav-link {% if request.path == admin_home %} active {% endif %}">
              <i className="nav-icon fas fa-th" />
              <p>
                Home
              </p>
            </a>
          </li>
          <li className="nav-item">
            {'{'}% url 'add_staff' as add_staff %{'}'}
            <a href="{{ add_staff }}" className="nav-link {% if request.path == add_staff %} active {% endif %}">
              <i className="nav-icon fas fa-th" />
              <p>
                Add Staff
              </p>
            </a>
          </li>
          <li className="nav-item">
            {'{'}% url 'manage_staff' as manage_staff %{'}'}
            {'{'}% url 'edit_staff' staff_id=id as edit_staff %{'}'}
            <a href="{% url 'manage_staff' %}" className="nav-link {% if request.path == manage_staff %} active {% endif %} {% if request.path == edit_staff %} active {% endif %}">
              <i className="nav-icon fas fa-th" />
              <p>
                Manage Staff
              </p>
            </a>
          </li>
          <li className="nav-item">
            {'{'}% url 'add_student' as add_student %{'}'}
            <a href="{% url 'add_student' %}" className="nav-link {% if request.path == add_student %} active {% endif %}">
              <i className="nav-icon fas fa-th" />
              <p>
                Add Student
              </p>
            </a>
          </li>
          <li className="nav-item">
            {'{'}% url 'manage_student' as manage_student %{'}'}
            {'{'}% url 'edit_student' student_id=id as edit_student %{'}'}
            <a href="{% url 'manage_student' %}" className="nav-link {% if request.path == manage_student %} active {% endif %} {% if request.path == edit_student %} active {% endif %}">
              <i className="nav-icon fas fa-th" />
              <p>
                Manage Students
              </p>
            </a>
          </li>
          <li className="nav-item">
            {'{'}% url 'add_course' as add_course %{'}'}
            <a href="{% url 'add_course' %}" className="nav-link {% if request.path == add_course %} active {% endif %}">
              <i className="nav-icon fas fa-th" />
              <p>
                Add Course
              </p>
            </a>
          </li>
          <li className="nav-item">
            {'{'}% url 'manage_course' as manage_course %{'}'}
            {'{'}% url 'edit_course' course_id=id as edit_course %{'}'}
            <a href="{% url 'manage_course' %}" className="nav-link {% if request.path == manage_course %} active {% endif %} {% if request.path == edit_course %} active {% endif %}">
              <i className="nav-icon fas fa-th" />
              <p>
                Manage Course
              </p>
            </a>
          </li>
          <li className="nav-item">
            {'{'}% url 'add_subject' as add_subject %{'}'}
            <a href="{% url 'add_subject' %}" className="nav-link {% if request.path == add_subject %} active {% endif %}">
              <i className="nav-icon fas fa-th" />
              <p>
                Add Subject
              </p>
            </a>
          </li>
          <li className="nav-item">
            {'{'}% url 'manage_subject' as manage_subject %{'}'}
            {'{'}% url 'edit_subject' subject_id=id as edit_subject %{'}'}
            <a href="{% url 'manage_subject' %}" className="nav-link {% if request.path == manage_subject %} active {% endif %} {% if request.path == edit_subject %} active {% endif %} ">
              <i className="nav-icon fas fa-th" />
              <p>
                Manage Subject
              </p>
            </a>
          </li>
          <li className="nav-item">
            {'{'}% url 'manage_session' as manage_session %{'}'}
            <a href="{% url 'manage_session' %}" className="nav-link {% if request.path == manage_session %} active {% endif %} ">
              <i className="nav-icon fas fa-th" />
              <p>
                Manage Session Year
              </p>
            </a>
          </li>
          <li className="nav-item">
            {'{'}% url 'student_feedback_message' as student_feedback_message %{'}'}
            <a href="{% url 'student_feedback_message' %}" className="nav-link {% if request.path == student_feedback_message %} active {% endif %}">
              <i className="nav-icon fas fa-th" />
              <p>
                Student Feedback
              </p>
            </a>
          </li>
          <li className="nav-item">
            {'{'}% url 'staff_feedback_message' as staff_feedback_message %{'}'}
            <a href="{% url 'staff_feedback_message' %}" className="nav-link {% if request.path == staff_feedback_message %} active {% endif %}">
              <i className="nav-icon fas fa-th" />
              <p>
                Staff Feedback
              </p>
            </a>
          </li>
          <li className="nav-item">
            {'{'}% url 'student_leave_view' as student_leave_view %{'}'}
            <a href="{% url 'student_leave_view' %}" className="nav-link {% if request.path == student_leave_view %} active {% endif %}">
              <i className="nav-icon fas fa-th" />
              <p>
                Student Leave
              </p>
            </a>
          </li>
          <li className="nav-item">
            {'{'}% url 'staff_leave_view' as staff_leave_view %{'}'}
            <a href="{% url 'staff_leave_view' %}" className="nav-link {% if request.path == staff_leave_view %} active {% endif %}">
              <i className="nav-icon fas fa-th" />
              <p>
                Staff Leave
              </p>
            </a>
          </li>
          <li className="nav-item">
            {'{'}% url 'admin_view_attendance' as admin_view_attendance %{'}'}
            <a href="{% url 'admin_view_attendance' %}" className="nav-link {% if request.path == admin_view_attendance %} active {% endif %}">
              <i className="nav-icon fas fa-th" />
              <p>
                View Attendance
              </p>
            </a>
          </li>
          <li className="nav-item">
            {'{'}% url 'admin_send_notification_staff' as admin_send_notification_staff %{'}'}
            <a href="{% url 'admin_send_notification_staff' %}" className="nav-link {% if request.path == admin_send_notification_staff %} active {% endif %}">
              <i className="nav-icon fas fa-th" />
              <p>
                Send Staff Notification
              </p>
            </a>
          </li>
          <li className="nav-item">
            {'{'}% url 'admin_send_notification_student' as admin_send_notification_student %{'}'}
            <a href="{% url 'admin_send_notification_student' %}" className="nav-link {% if request.path == admin_send_notification_student %} active {% endif %}">
              <i className="nav-icon fas fa-th" />
              <p>
                Send Student Notification
              </p>
            </a>
          </li>
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>
