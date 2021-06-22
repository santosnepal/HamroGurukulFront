<div>
  {'{'}% extends 'hod_template/base_template.html' %{'}'}
  {'{'}% block page_title %{'}'}
  Manage Student
  {'{'}% endblock page_title %{'}'}
  {'{'}% block main_content %{'}'}
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Student Details</h3>
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
              {'{'}% for student in students %{'}'}
              {'{'}% endfor %{'}'}
              <table className="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Gender</th>
                    <th>Profile Pic</th>
                    <th>Session Year</th>
                    <th>Course</th>
                    <th>Last Login</th>
                    <th>Date Joined</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody><tr>
                    <td>{'{'}{'{'} student.admin.id {'}'}{'}'}</td>
                    <td>{'{'}{'{'} student.admin.first_name {'}'}{'}'}</td>
                    <td>{'{'}{'{'} student.admin.last_name {'}'}{'}'}</td>
                    <td>{'{'}{'{'} student.admin.username {'}'}{'}'}</td>
                    <td>{'{'}{'{'} student.admin.email {'}'}{'}'}</td>
                    <td>{'{'}{'{'} student.address {'}'}{'}'}</td>
                    <td>{'{'}{'{'} student.gender {'}'}{'}'}</td>
                    <td><img src="{{ student.profile_pic }}" style={{width: 100}} /></td>
                    <td>{'{'}{'{'} student.session_year_id.session_start_year {'}'}{'}'} TO {'{'}{'{'} student.session_year_id.session_end_year {'}'}{'}'}</td>
                    <td>{'{'}{'{'} student.course_id.course_name {'}'}{'}'}</td>
                    <td>{'{'}{'{'} student.admin.last_login {'}'}{'}'}</td>
                    <td>{'{'}{'{'} student.admin.date_joined {'}'}{'}'}</td>
                    <td><a href="{% url 'edit_student' student_id=student.admin.id %}" className="btn btn-success">Edit</a></td>
                  </tr></tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
      </div>
    </div>
  </section>
  {/* /.content */}
  {'{'}% endblock main_content %{'}'}
</div>
