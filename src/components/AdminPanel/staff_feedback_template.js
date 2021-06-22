<div>
  {'{'}% extends 'hod_template/base_template.html' %{'}'}
  {'{'}% block page_title %{'}'}
  Staff Feedback
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
              <h3 className="card-title">Staff Feedback</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <div className="table">
              {'{'}% for feedback in feedbacks %{'}'}
              {'{'}% endfor %{'}'}
              <table className="table">
                <tbody><tr>
                    <th>ID</th>
                    <th>Staff ID</th>
                    <th>Staff Name</th>
                    <th>Message</th>
                    <th>Sended On</th>
                    <th>Reply</th>
                  </tr><tr>
                    <td>{'{'}{'{'} feedback.id {'}'}{'}'}</td>
                    <td>{'{'}{'{'} feedback.staff_id.admin.id {'}'}{'}'}</td>
                    <td>{'{'}{'{'} feedback.staff_id.admin.first_name {'}'}{'}'} {'{'}{'{'} feedback.staff_id.admin.last_name {'}'}{'}'}</td>
                    <td>{'{'}{'{'} feedback.feedback {'}'}{'}'}</td>
                    <td>{'{'}{'{'} feedback.created_at {'}'}{'}'}</td>
                    <td>
                      {'{'}% if feedback.feedback_reply == "" %{'}'}
                      <button className="btn btn-success reply_open_modal" data-toggle="modal" data-target="#reply_modal">Reply</button>
                      {'{'}% else %{'}'}
                      {'{'}{'{'} feedback.feedback_reply {'}'}{'}'}
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
  <div className="modal fade" id="reply_modal" role="dialog">
    <div className="modal-dialog">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Reply</h4>
          <button type="button" className="close" data-dismiss="modal">×</button>
        </div>
        <div className="modal-body">
          <p>Reply To : <span id="reply_name" /></p>
          <input type="hidden" id="reply_id" name="reply_id" />
          <textarea className="form-control" rows={5} id="reply_message" defaultValue={""} />
          <button id="reply_btn" className="btn btn-info btn-block">Reply</button>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  {/* /.content */}
  {'{'}% endblock main_content %{'}'}
  {'{'}% block custom_js %{'}'}
  {'{'}% endblock custom_js %{'}'}
</div>
