<div>
  {'{'}'{'{'}'{'}'}% extends 'student_template/base_template.html' %{'{'}'{'}'}'{'}'}
  {'{'}'{'{'}'{'}'}% block page_title %{'{'}'{'}'}'{'}'}
  View Attendance Data
  {'{'}'{'{'}'{'}'}% endblock page_title %{'{'}'{'}'}'{'}'}
  {'{'}'{'{'}'{'}'}% block main_content %{'{'}'{'}'}'{'}'}
  {'{'}/* Main content */{'}'}
  <section classname="content">
    <div classname="container-fluid">
      <div classname="row">
        <div classname="col-md-12">
          {'{'}/* general form elements */{'}'}
          <div classname="card card-primary">
            <div classname="card-header">
              <h3 classname="card-title">View Attendance</h3>
            </div>
            {'{'}/* /.card-header */{'}'}
            {'{'}/* form start */{'}'}
            <form action="{% url 'student_view_attendance_post' %}" method="post">
              <div classname="card-body">
                {'{'}'{'{'}'{'}'}% csrf_token %{'{'}'{'}'}'{'}'}
                <div classname="form-group">
                  <label>Subject </label>
                  <select classname="form-control" name="subject" id="subject">
                    {'{'}'{'{'}'{'}'}% for subject in subjects %{'{'}'{'}'}'{'}'}
                    <option value="{{ subject.id }}">{'{'}'{'{'}'{'}'}{'{'}'{'{'}'{'}'} subject.subject_name {'{'}'{'}'}'{'}'}{'{'}'{'}'}'{'}'}</option>
                    {'{'}'{'{'}'{'}'}% endfor %{'{'}'{'}'}'{'}'}
                  </select>
                </div>
                <div classname="row">
                  <div classname="col-lg-6">
                    <div classname="form-group">
                      <label>Start Date</label>
                      <input type="date" name="start_date" classname="form-control" placeholder="Start Date" />
                    </div>
                  </div>
                  <div classname="col-lg-6">
                    <div classname="form-group">
                      <label>End Date</label>
                      <input type="date" name="end_date" classname="form-control" placeholder="End Date" />
                    </div>
                  </div>
                </div>
                <div classname="form-group">
                  {'{'}'{'{'}'{'}'}% if messages %{'{'}'{'}'}'{'}'}
                  {'{'}'{'{'}'{'}'}% for message in messages %{'{'}'{'}'}'{'}'}
                  {'{'}'{'{'}'{'}'}% if message.tags == 'error' %{'{'}'{'}'}'{'}'}
                  <div classname="alert alert-danger" style={{{{margintop: ''}} 10}}>{'{'}'{'{'}'{'}'}{'{'}'{'{'}'{'}'} message {'{'}'{'}'}'{'}'}{'{'}'{'}'}'{'}'}</div>
                  {'{'}'{'{'}'{'}'}% endif %{'{'}'{'}'}'{'}'}
                  {'{'}'{'{'}'{'}'}% if message.tags == 'success' %{'{'}'{'}'}'{'}'}
                  <div classname="alert alert-success" style={{{{margintop: ''}} 10}}>{'{'}'{'{'}'{'}'}{'{'}'{'{'}'{'}'} message {'{'}'{'}'}'{'}'}{'{'}'{'}'}'{'}'}</div>
                  {'{'}'{'{'}'{'}'}% endif %{'{'}'{'}'}'{'}'}
                  {'{'}'{'{'}'{'}'}% endfor %{'{'}'{'}'}'{'}'}
                  {'{'}'{'{'}'{'}'}% endif %{'{'}'{'}'}'{'}'}
                </div>
                {'{'}/* /.card-body */{'}'}
                <div classname="card-footer">
                  <button type="submit" classname="btn btn-primary btn-block" id="fetch_student">Fetch Attendance</button>
                </div>
                <div id="student_data" classname="card-footer">
                </div>
              </div>
            </form>
            {'{'}/* /.card */{'}'}
          </div>
        </div>
      </div>
    </div></section>
  {'{'}/* /.content */{'}'}
  {'{'}'{'{'}'{'}'}% endblock main_content %{'{'}'{'}'}'{'}'}
</div>
