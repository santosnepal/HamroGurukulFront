<div>
  {'{'}% extends 'hod_template/base_template.html' %{'}'}
  {'{'}% block page_title %{'}'}
  View Attendance
  {'{'}% endblock page_title %{'}'}
  {'{'}% block main_content %{'}'}
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          {/* general form elements */}
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">View Attendance</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <div className="card-body">
              <div className="form-group">
                <label>Subject </label>
                <select className="form-control" name="subject" id="subject">
                  {'{'}% for subject in subjects %{'}'}
                  <option value="{{ subject.id }}">{'{'}{'{'} subject.subject_name {'}'}{'}'}</option>
                  {'{'}% endfor %{'}'}
                </select>
              </div>
              <div className="form-group">
                <label>Session Year </label>
                <select className="form-control" name="session_year_id" id="session_year_id">
                  {'{'}% for session_year in session_year_id %{'}'}
                  <option value="{{ session_year.id }}">{'{'}{'{'} session_year.session_start_year {'}'}{'}'} TO {'{'}{'{'} session_year.session_end_year {'}'}{'}'}</option>
                  {'{'}% endfor %{'}'}
                </select>
              </div>
              <div className="form-group">
                <button type="button" className="btn btn-primary btn-block" id="fetch_attendance">Fetch Attendance Date</button>
              </div>
              <div className="form-group" id="attendance_block" style={{display: 'none'}}>
                <label>Attendance Date </label>
                <select className="form-control" name="attendance_date" id="attendance_date">
                </select>
              </div>
              <div className="form-group">
                <div className="alert alert-danger" id="error_attendance" style={{display: 'none'}}>
                </div>
              </div>
              <div className="form-group" id="fetch_student_block" style={{display: 'none'}}>
                <button type="button" className="btn btn-primary btn-block" id="fetch_student">Fetch Student Data</button>
              </div>
            </div>
            {/* /.card-body */}
            <div id="student_data" className="card-footer">
            </div>
          </div>
          {/* /.card */}
        </div>
      </div>
    </div>
  </section>
  {/* /.content */}
  {'{'}% endblock main_content %{'}'}
  {'{'}% block custom_js %{'}'}
  {'{'}% endblock custom_js %{'}'}
</div>
