<div>
  {'{'}% extends 'hod_template/base_template.html' %{'}'}
  {'{'}% block page_title %{'}'}
  Add Course
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
              <h3 className="card-title">Add Course</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form role="form" action="/add_course_save" method="post">
              {'{'}% csrf_token %{'}'}
              <div className="card-body">
                <div className="form-group">
                  <label>Course Name </label>
                  <input type="text" className="form-control" name="course" placeholder="Enter Course" />
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
                <button type="submit" className="btn btn-primary btn-block">Add Course</button>
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
