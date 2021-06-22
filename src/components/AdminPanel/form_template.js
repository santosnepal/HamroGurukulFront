<form role="form" action="{{ action_path }}" method="post" encType="multipart/form-data">
  {'{'}% csrf_token %{'}'}
  <div className="card-body">
    {'{'}% for field in form %{'}'}
    <div className="form-group">
      {'{'}{'{'} field.errors {'}'}{'}'}
      {'{'}{'{'} field.label_tag {'}'}{'}'}
      {'{'}{'{'} field {'}'}{'}'}
    </div>
    {'{'}% endfor %{'}'}
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
    <button type="submit" className="btn btn-primary btn-block">{'{'}{'{'} button_text {'}'}{'}'}</button>
  </div>
</form>
