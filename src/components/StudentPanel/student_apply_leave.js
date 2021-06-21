<div>
  {'{'}% extends 'student_template/base_template.html' %{'}'}
  {'{'}% block page_title %{'}'}
  Leave Report and Apply for Leave
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
              <h3 className="card-title">Apply for Leave</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form action="{% url 'student_apply_leave_save' %}" method="post">
              <div className="card-body">
                <div className="form-group">
                  <label>Leave Date </label>
                  {'{'}% csrf_token %{'}'}
                  <input type="date" name="leave_date" className="form-control" placeholder="Leave Date" />
                </div>
                <div className="form-group">
                  <label>Leave Reason</label>
                  <textarea className="form-control" rows={6} name="leave_msg" defaultValue={""} />
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
                <button type="submit" className="btn btn-primary btn-block" id="fetch_student">Apply for Leave</button>
              </div>
            </form>
          </div>
          {/* /.card */}
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Leave Apply History</h3>
            </div>
            <div className="table">
              {'{'}% for row in leave_data %{'}'}
              {'{'}% endfor %{'}'}
              <table className="table">
                <tbody><tr>
                    <th>ID</th>
                    <th>Leave Date</th>
                    <th>Leave Message</th>
                    <th>Leave Status</th>
                  </tr><tr>
                    <td>{'{'}{'{'} row.id {'}'}{'}'}</td>
                    <td>{'{'}{'{'} row.leave_date {'}'}{'}'}</td>
                    <td>{'{'}{'{'} row.leave_message {'}'}{'}'}</td>
                    <td>
                      {'{'}% if row.leave_status == 1 %{'}'}
                      <span className="alert alert-success">Approved</span>
                      {'{'}% elif row.leave_status == 2 %{'}'}
                      <span className="alert alert-danger">Rejected</span>
                      {'{'}% else %{'}'}
                      <span className="alert alert-info">Pending</span>
                      {'{'}% endif %{'}'}
                    </td>
                  </tr></tbody></table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /.content */}
  {'{'}% endblock main_content %{'}'}
</div>
