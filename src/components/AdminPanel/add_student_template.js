<div>
  {'{'}% extends 'hod_template/base_template.html' %{'}'}
  {'{'}% block page_title %{'}'}
  Add Student
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
              <h3 className="card-title">Add Student</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            {'{'}% url 'add_student_save' as action_path %{'}'}
            {'{'}% include 'hod_template/form_template.html' with messages=messages form=form action_path=action_path button_text="Add Student" %{'}'}
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
