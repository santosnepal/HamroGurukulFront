<div>
  {'{'}% extends 'hod_template/base_template.html' %{'}'}
  {'{'}% block page_title %{'}'}
  Manage Course
  {'{'}% endblock page_title %{'}'}
  {'{'}% block main_content %{'}'}
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Course Details</h3>
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
              {'{'}% for course in courses %{'}'}
              {'{'}% endfor %{'}'}
              <table className="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Course Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody><tr>
                    <td>{'{'}{'{'} course.id {'}'}{'}'}</td>
                    <td>{'{'}{'{'} course.course_name {'}'}{'}'}</td>
                    <td><a href="/edit_course/{{ course.id }}" className="btn btn-success">Edit</a></td>
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
