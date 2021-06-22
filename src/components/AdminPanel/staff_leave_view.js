<div>
  {'{'}% extends 'hod_template/base_template.html' %{'}'}
  {'{'}% block page_title %{'}'}
  Staff Apply for Leave
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
              <h3 className="card-title">Staff Apply for Leave</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <div className="table">
              {'{'}% for leave in leaves %{'}'}
              {'{'}% endfor %{'}'}
              <table className="table">
                <tbody><tr>
                    <th>ID</th>
                    <th>Staff ID</th>
                    <th>Staff Name</th>
                    <th>Leave Date</th>
                    <th>Leave Message</th>
                    <th>Apply On</th>
                    <th>Action</th>
                  </tr><tr>
                    <td>{'{'}{'{'} leave.id {'}'}{'}'}</td>
                    <td>{'{'}{'{'} leave.staff_id.admin.id {'}'}{'}'}</td>
                    <td>{'{'}{'{'} leave.staff_id.admin.first_name {'}'}{'}'} {'{'}{'{'} leave.staff_id.admin.last_name {'}'}{'}'}</td>
                    <td>{'{'}{'{'} leave.leave_date {'}'}{'}'}</td>
                    <td>{'{'}{'{'} leave.leave_message {'}'}{'}'}</td>
                    <td>{'{'}{'{'} leave.created_at {'}'}{'}'}</td>
                    <td>
                      {'{'}% if leave.leave_status == 0 %{'}'}
                      <a href="{% url 'staff_approve_leave' leave_id=leave.id %}" className="btn btn-success">Approve</a>
                      <a className="btn btn-danger" href="{% url 'staff_disapprove_leave' leave_id=leave.id %}">Disapprove</a>
                      {'{'}% elif leave.leave_status == 1  %{'}'}
                      <button className="btn btn-warning" disabled="disabled" data-toggle="modal" data-target="#reply_modal">Approved</button>
                      {'{'}% else %{'}'}
                      <button className="btn btn-danger" disabled="disabled" data-toggle="modal" data-target="#reply_modal">Disapproved</button>
                      {'{'}% endif %{'}'}
                    </td>
                  </tr></tbody></table>
            </div>
          </div>
          {/* /.card */}
        </div>
      </div>
    </div>
  </section>
  {/* Modal */}
  {/* /.content */}
  {'{'}% endblock main_content %{'}'}
</div>
