<div>
  {'{'}% extends 'hod_template/base_template.html' %{'}'}
  {'{'}% block page_title %{'}'}
  Manage Staff
  {'{'}% endblock page_title %{'}'}
  {'{'}% block main_content %{'}'}
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Staff Details</h3>
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
              {'{'}% for staff in staffs %{'}'}
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
                    <th>Last Login</th>
                    <th>Date Joined</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody><tr>
                    <td>{'{'}{'{'} staff.admin.id {'}'}{'}'}</td>
                    <td>{'{'}{'{'} staff.admin.first_name {'}'}{'}'}</td>
                    <td>{'{'}{'{'} staff.admin.last_name {'}'}{'}'}</td>
                    <td>{'{'}{'{'} staff.admin.username {'}'}{'}'}</td>
                    <td>{'{'}{'{'} staff.admin.email {'}'}{'}'}</td>
                    <td>{'{'}{'{'} staff.address {'}'}{'}'}</td>
                    <td>{'{'}{'{'} staff.admin.last_login {'}'}{'}'}</td>
                    <td>{'{'}{'{'} staff.admin.date_joined {'}'}{'}'}</td>
                    <td><a href="/edit_staff/{{ staff.admin.id }}" className="btn btn-success">Edit</a></td>
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
