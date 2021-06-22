<div>
  {'{'}% load static %{'}'}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <title>Student Management System</title>
  {/* Tell the browser to be responsive to screen width */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* Font Awesome */}
  <link rel="stylesheet" href="{% static " plugins fontawesome-free css all.min.css" %}" />
  {/* Ionicons */}
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
  {/* Tempusdominus Bbootstrap 4 */}
  <link rel="stylesheet" href="{% static " plugins tempusdominus-bootstrap-4 css tempusdominus-bootstrap-4.min.css" %}" />
  {/* iCheck */}
  <link rel="stylesheet" href="{% static " plugins icheck-bootstrap icheck-bootstrap.min.css" %}" />
  {/* JQVMap */}
  <link rel="stylesheet" href="{% static " plugins jqvmap jqvmap.min.css" %}" />
  {/* Theme style */}
  <link rel="stylesheet" href="{% static " dist css adminlte.min.css" %}" />
  {/* overlayScrollbars */}
  <link rel="stylesheet" href="{% static " plugins overlayscrollbars css overlayscrollbars.min.css" %}" />
  {/* Daterange picker */}
  <link rel="stylesheet" href="{% static " plugins daterangepicker daterangepicker.css" %}" />
  {/* summernote */}
  <link rel="stylesheet" href="{% static " plugins summernote summernote-bs4.css" %}" />
  {/* Google Font: Source Sans Pro */}
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />
  {'{'}% block custom_css %{'}'}{'{'}% endblock custom_css %{'}'}
  <div className="wrapper">
    {/* Navbar */}
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars" /></a>
        </li>
      </ul>
      <h4 style={{marginLeft: 10, marginTop: 5}}>Student Management Sytem HOD Login</h4>
      <ul className="navbar-nav ml-auto">
        {/* Messages Dropdown Menu */}
        <li className="nav-item">
          <a className="nav-link" href="{% url 'logout' %}">
            Logout
          </a>
        </li>
      </ul>
      {/* Right navbar links */}
    </nav>
    {/* /.navbar */}
    {/* Main Sidebar Container */}
    {'{'}% include 'hod_template/sidebar_template.html' with user=user id=id %{'}'}
    {/* Content Wrapper. Contains page content */}
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">
                {'{'}% block page_title %{'}'}
                {'{'}% endblock page_title %{'}'}
              </h1>
            </div>{/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="{% url 'admin_home' %}">Home</a></li>
              </ol>
            </div>{/* /.col */}
          </div>{/* /.row */}
        </div>{/* /.container-fluid */}
      </div>
      {/* /.content-header */}
      {'{'}% block main_content %{'}'}{'{'}% endblock main_content %{'}'}
    </div>
    {/* /.content-wrapper */}
    {'{'}% include 'hod_template/footer.html' %{'}'}
  </div>
  {/* ./wrapper */}
  {/* jQuery */}
  {/* jQuery UI 1.11.4 */}
  {/* Resolve conflict in jQuery UI tooltip with Bootstrap tooltip */}
  {/* Bootstrap 4 */}
  {/* ChartJS */}
  {/* Sparkline */}
  {/* JQVMap */}
  {/* jQuery Knob Chart */}
  {/* daterangepicker */}
  {/* Tempusdominus Bootstrap 4 */}
  {/* Summernote */}
  {/* overlayScrollbars */}
  {/* AdminLTE App */}
  {/* AdminLTE dashboard demo (This is only for demo purposes) */}
  {/* AdminLTE for demo purposes */}
  {'{'}% block custom_js %{'}'}
  {'{'}% endblock custom_js %{'}'}
</div>
