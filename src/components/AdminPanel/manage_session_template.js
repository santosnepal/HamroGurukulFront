<div>
  {'{'}% extends 'hod_template/base_template.html' %{'}'}
  {'{'}% block page_title %{'}'}
  Add Session Year
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
              <h3 className="card-title">Add Session Year</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form role="form" action="/add_session_save" method="post">
              {'{'}% csrf_token %{'}'}
              <div className="card-body">
                <div className="form-group">
                  <label>Session Start Year </label>
                  <input type="date" className="form-control" name="session_start" placeholder="Enter Session Start Year" />
                </div>
                <div className="form-group">
                  <label>Session End Year </label>
                  <input type="date" className="form-control" name="session_end" placeholder="Enter Session End Year" />
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
                <button type="submit" className="btn btn-primary btn-block">Add Session Year</button>
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
