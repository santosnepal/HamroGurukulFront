<div>
  {'{'}% extends 'hod_template/base_template.html' %{'}'}
  {'{'}% block page_title %{'}'}
  Edit Student |  Username : {'{'}{'{'} username {'}'}{'}'} | #ID : {'{'}{'{'} id {'}'}{'}'}
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
              <h3 className="card-title">Edit Student</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            {'{'}% url 'edit_student_save' as action_path %{'}'}
            {'{'}% include 'hod_template/form_template.html' with messages=messages form=form action_path=action_path button_text="Edit Student" %{'}'}
            {/* /.card */}
          </div>
        </div>
      </div>
    </div></section>
  {/* /.content */}
  {'{'}% endblock main_content %{'}'}
</div>
