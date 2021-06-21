<div>
  {'{'}% extends 'student_template/base_template.html' %{'}'}
  {'{'}% block custom_css %{'}'}
  <style dangerouslySetInnerHTML={{__html: "\n.col-lg-3.attendance_div_red {\n    padding: 10px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    background: #f44336;\n    border: 10px solid white;\n    text-align: center;\n    color: #fff;\n    border-radius: 30px;\n    box-shadow: 1px 1px 1px grey;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n.col-lg-3.attendance_div_green {\n    padding: 10px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    background: #388e3c;\n    border: 10px solid white;\n    text-align: center;\n    color: #fff;\n    border-radius: 30px;\n    box-shadow: 1px 1px 1px grey;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n" }} />
  {'{'}% endblock custom_css %{'}'}
  {'{'}% block page_title %{'}'}
  Attendance Data
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
              <h3 className="card-title">View Attendance</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <div className="card-body">
              <div className="row">
                {'{'}% if attendance_reports %{'}'}
                {'{'}% for attendance_report in attendance_reports %{'}'}
                {'{'}% if attendance_report.status == True %{'}'}
                <div className="col-lg-3 attendance_div_green">
                  <b>Date : {'{'}{'{'} attendance_report.attendance_id.attendance_date {'}'}{'}'}</b>
                  <br />
                  <b>[ Status : Present ]</b>
                </div>
                {'{'}% else %{'}'}
                <div className="col-lg-3 attendance_div_red">
                  <b>Date : {'{'}{'{'} attendance_report.attendance_id.attendance_date {'}'}{'}'}</b>
                  <br />
                  <b>[ Status : Absent ]</b>
                </div>
                {'{'}% endif %{'}'}
                {'{'}% endfor %{'}'}
                {'{'}% else %{'}'}
                <div className="alert alert-danger text-center">No Attendance Data Found!</div>
                {'{'}% endif %{'}'}
              </div>
            </div>
            {/* /.card */}
          </div>
        </div>
      </div>
    </div></section>
  {/* /.content */}
  {'{'}% endblock main_content %{'}'}
</div>
