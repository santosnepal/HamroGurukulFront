<div>
  {'{'}% extends 'hod_template/base_template.html' %{'}'}
  {'{'}% block page_title %{'}'}
  Edit Subject | Subject ID : {'{'}{'{'} subject.id {'}'}{'}'}
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
              <h3 className="card-title">Edit Subject</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form role="form" action="/edit_subject_save" method="post">
              {'{'}% csrf_token %{'}'}
              <div className="card-body">
                <div className="form-group">
                  <label>Subject Name </label>
                  <input type="text" className="form-control" name="subject_name" placeholder="Enter Subject" defaultValue="{{ subject.subject_name }}" />
                  <input type="hidden" className="form-control" name="subject_id" placeholder="Enter Subject" defaultValue="{{ subject.id }}" />
                </div>
                <div className="form-group">
                  <label>Course </label>
                  <select className="form-control" name="course">
                    {'{'}% for course in courses %{'}'}
                    <option value="{{ course.id }}" {% if course.id="=" subject.course_id.id %} selected endif>{'{'}{'{'} course.course_name {'}'}{'}'}</option>
                    {'{'}% endfor %{'}'}
                  </select>
                </div>
                <div className="form-group">
                  <label>Staff</label>
                  <select className="form-control" name="staff">
                    {'{'}% for staff in staffs %{'}'}
                    <option value="{{ staff.id }}" {% if staff.id="=" subject.staff_id.id %} selected endif>{'{'}{'{'} staff.first_name {'}'}{'}'} {'{'}{'{'} staff.last_name {'}'}{'}'}</option>
                    {'{'}% endfor %{'}'}
                  </select>
                </div>
                <div className="form-group">
                  {'{'}% if messages %{'}'}
                  {'{'}% for message in messages %{'}'}
                  {'{'}% if message.tags == 'error' %{'}'}
                  <div className="alert alert-danger" style={{marginTop: 10}}>{'{'}{'{'} message {'}'}{'}'}</div>
                  {'{'}% endif %{'}'}
                  {'{'}% if message.tags == 'success' %{'}'}
                  <div className="alert alert-success" style={{marginTop: 10}}>{'{'}{'{'} message {'}'}{'}'}</div>
                  {'{'}% endif %{'}'}
                  {'{'}% endfor %{'}'}
                  {'{'}% endif %{'}'}
                </div>
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" className="btn btn-primary btn-block">Save Subject</button>
              </div>
            </form>
          </div>
          {/* /.card */}
        </div>
      </div>
    </div>
  </section>
  {/* /.content */}
  {'{'}% endblock main_content %{'}'}
</div>
