<div>
  {'{'}% extends 'hod_template/base_template.html' %{'}'}
  {'{'}% block page_title %{'}'}
  Home
  {'{'}% endblock page_title %{'}'}
  {'{'}% block main_content %{'}'}
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-info">
            <div className="inner">
              <h3>{'{'}{'{'} student_count {'}'}{'}'}</h3>
              <p>Total Students</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph" />
            </div>
            <a href="{% url 'manage_student' %}" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-success">
            <div className="inner">
              <h3>{'{'}{'{'} staff_count {'}'}{'}'}</h3>
              <p>Total Staffs</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph" />
            </div>
            <a href="{% url 'manage_staff' %}" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>{'{'}{'{'} course_count {'}'}{'}'}</h3>
              <p>Total Course</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph" />
            </div>
            <a href="{% url 'manage_course' %}" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-danger">
            <div className="inner">
              <h3>{'{'}{'{'} subject_count {'}'}{'}'}</h3>
              <p>Total Subject</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph" />
            </div>
            <a href="{% url 'manage_subject' %}" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        {/* ./col */}
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="card card-danger">
            <div className="card-header">
              <h3 className="card-title">Student and Staff Chart</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" /></button>
              </div>
            </div>
            <div className="card-body">
              <canvas id="pieChart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
            </div>
            {/* /.card-body */}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card card-success">
            <div className="card-header">
              <h3 className="card-title">Total Subject in Each Courses</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" /></button>
              </div>
            </div>
            <div className="card-body">
              <canvas id="donutChart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
            </div>
            {/* /.card-body */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="card card-info">
            <div className="card-header">
              <h3 className="card-title">Total Student in Each Course</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" /></button>
              </div>
            </div>
            <div className="card-body">
              <canvas id="pieChart3" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
            </div>
            {/* /.card-body */}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card card-warning">
            <div className="card-header">
              <h3 className="card-title">Total Student in Each Subject</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" /></button>
              </div>
            </div>
            <div className="card-body">
              <canvas id="pieChart4" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
            </div>
            {/* /.card-body */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card card-success">
            <div className="card-header">
              <h3 className="card-title">Staff Leaves vs Attendance</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" /></button>
              </div>
            </div>
            <div className="card-body">
              <div className="chart">
                <canvas id="barChart1" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
              </div>
            </div>
            {/* /.card-body */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card card-success">
            <div className="card-header">
              <h3 className="card-title">Student Leaves vs Attendance</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" /></button>
              </div>
            </div>
            <div className="card-body">
              <div className="chart">
                <canvas id="barChart2" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
              </div>
            </div>
            {/* /.card-body */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /.content */}
  {'{'}% endblock main_content %{'}'}
  {'{'}% block custom_js %{'}'}
  {'{'}% endblock custom_js %{'}'}
</div>
