<div>
  {'{'}% extends 'student_template/base_template.html' %{'}'}
  {'{'}% block page_title %{'}'}
  Result
  {'{'}% endblock page_title %{'}'}
  {'{'}% block main_content %{'}'}
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          {/* general form elements */}
          {/* /.card */}
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Result</h3>
            </div>
            <div className="table">
              {'{'}% for row in studentresult %{'}'}
              {'{'}% endfor %{'}'}
              <table className="table">
                <tbody><tr>
                    <th>ID</th>
                    <th>Subject</th>
                    <th>Assignment Marks</th>
                    <th>Exam Marks</th>
                    <th>Status</th>
                  </tr><tr>
                    <td>{'{'}{'{'} row.id {'}'}{'}'}</td>
                    <td>{'{'}{'{'} row.subject_id.subject_name {'}'}{'}'}</td>
                    <td>{'{'}{'{'} row.subject_assignment_marks {'}'}{'}'}</td>
                    <td>{'{'}{'{'} row.subject_exam_marks {'}'}{'}'}</td>
                    <td>
                      {'{'}% if row.subject_exam_marks &gt;= 40 %{'}'}
                      <span className="alert alert-success">PASS</span>
                      {'{'}% else %{'}'}
                      <span className="alert alert-danger">FAIL</span>
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
