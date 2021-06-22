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
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody><tr>
                    <td>{'{'}{'{'} staff.admin.id {'}'}{'}'}</td>
                    <td>{'{'}{'{'} staff.admin.first_name {'}'}{'}'}</td>
                    <td>{'{'}{'{'} staff.admin.last_name {'}'}{'}'}</td>
                    <td>{'{'}{'{'} staff.admin.username {'}'}{'}'}</td>
                    <td>{'{'}{'{'} staff.admin.email {'}'}{'}'}</td>
                    <td><a href="#" className="btn btn-success show_notification" data-toggle="modal" data-target="#myModal">Send Notification</a></td>
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
  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Send Notification to <span id="name_span" /></h4>
          <button type="button" className="close" data-dismiss="modal">×</button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <input type="text" name="message" className="form-control" id="message_not" />
            <input type="hidden" name="student_id" className="form-control" id="student_id" />
          </div>
          <div className="form-group">
            <button className="btn btn-info btn-block send_notification_btn" type="button">Send Notification</button>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  {'{'}% endblock main_content %{'}'}
  {'{'}% block custom_js %{'}'}
  {'{'}% endblock custom_js %{'}'}
</div>