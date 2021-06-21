<div>
  {'{'}% extends 'student_template/base_template.html' %{'}'}
  {'{'}% block page_title %{'}'}
  Feedback Message
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
              <h3 className="card-title">Leave a Feedback Message</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form action="{% url 'student_feedback_save' %}" method="post">
              <div className="card-body">
                {'{'}% csrf_token %{'}'}
                <div className="form-group">
                  <label>Feedback Message</label>
                  <textarea className="form-control" rows={6} name="feedback_msg" defaultValue={""} />
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
                <button type="submit" className="btn btn-primary btn-block" id="fetch_student">Leave a Feedback Message</button>
              </div>
            </form>
          </div>
          {/* /.card */}
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Feedback History</h3>
            </div>
            <div className="table">
              {'{'}% for row in feedback_data %{'}'}
              {'{'}% endfor %{'}'}
              <table className="table">
                <tbody><tr>
                    <th>ID</th>
                    <th>Feedback Message</th>
                    <th>Feedback Reply</th>
                  </tr><tr>
                    <td>{'{'}{'{'} row.id {'}'}{'}'}</td>
                    <td>{'{'}{'{'} row.feedback {'}'}{'}'}</td>
                    <td>{'{'}{'{'} row.feedback_reply {'}'}{'}'}</td>
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
