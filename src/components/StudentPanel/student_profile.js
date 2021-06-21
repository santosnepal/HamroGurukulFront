<div>
  {'{'}% extends 'student_template/base_template.html' %{'}'}
  {'{'}% block page_title %{'}'}
  Edit Profile
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
              <h3 className="card-title">Edit Profile</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form role="form" action="{% url 'student_profile_save' %}" method="post">
              {'{'}% csrf_token %{'}'}
              <div className="card-body">
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" name="username" defaultValue="{{ user.username }}" disabled="disabled" />
                </div>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" name="username" defaultValue="{{ user.email }}" disabled="disabled" />
                </div>
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" className="form-control" name="first_name" defaultValue="{{ user.first_name }}" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" className="form-control" name="last_name" defaultValue="{{ user.last_name }}" />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input type="text" className="form-control" name="address" defaultValue="{{ student.address }}" />
                </div>
                <div className="form-group">
                  <label>Change Password?</label>
                  <input type="text" className="form-control" name="password" placeholder="Fill Only If You want to Change Password" />
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
                <button type="submit" className="btn btn-primary btn-block">Save Profile</button>
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
