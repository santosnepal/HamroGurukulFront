<div>
  {'{'}% extends 'hod_template/base_template.html' %{'}'}
  {'{'}% block page_title %{'}'}
  Edit Staff  | Username : {'{'}{'{'} staff.admin.username {'}'}{'}'} |  #ID : {'{'}{'{'} staff.admin.id {'}'}{'}'}
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
              <h3 className="card-title">Edit Staff</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form role="form" action="/edit_staff_save" method="post">
              {'{'}% csrf_token %{'}'}
              <div className="card-body">
                <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control" name="email" placeholder="Enter email" defaultValue="{{ staff.admin.email }}" />
                </div>
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" className="form-control" placeholder="First Name" name="first_name" defaultValue="{{ staff.admin.first_name }}" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" className="form-control" placeholder="Last Name" name="last_name" defaultValue="{{ staff.admin.last_name }}" />
                  <input type="hidden" name="staff_id" defaultValue="{{ staff.admin.id }}" />
                </div>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" placeholder="Username" name="username" defaultValue="{{ staff.admin.username }}" />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input type="text" className="form-control" placeholder="Address" name="address" defaultValue="{{ staff.address }}" />
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
                <button type="submit" className="btn btn-primary btn-block">Save Staff</button>
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
