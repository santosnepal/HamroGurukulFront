<div>
  {'{'}% load static %{'}'}
  <meta charSet="utf-8" />
  <title>Student Management System Live Video Conferencing Class</title>
  <meta name="description" content="WebRTC Dashboard including support for canvas drawing, canvas data syncing, video conferencing, screen sharing and video conferencing. Including chat and file sharing." />
  <link rel="stylesheet" type="text/css" href="{% static " others emojionearea.min.css" %}" />
  <link href="{% static " others bootstrap.min.css" %} " rel="stylesheet" />
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\nhtml, body, section, ul, li, nav, a, h1, h2 {\n    padding: 0;\n    margin: 0;\n    outline: none;\n    text-shadow: none;\n    box-shadow: none;\n    border-radius: 0;\n    text-decoration: none;\n}\n\nbody {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 17px;\n    line-height: 1.5em;\n}\n\ninput[disabled], button[disabled] {\n  background: transparent!important;\n  color: #dcd7d7!important;\n  border: 1px solid #dcd7d7!important;\n  cursor: not-allowed!important;\n  text-shadow: none!important;\n  box-shadow: none!important;\n  text-decoration: none!important;\n  outline: none!important;\n}\n" }} />
  <style dangerouslySetInnerHTML={{__html: "\n.extra-controls {\n    position: absolute;\n    right: 21%;\n}\n\n#btn-comments {\n  color: red;\n  margin-top: 5px;\n  font-size: 24px;\n  text-shadow: 1px 1px white;\n}\n\n#other-videos {\n    margin-top: 5px;\n}\n\n#other-videos video {\n    width: 45%;\n    margin: 5px;\n    border: 1px solid black;\n    padding: 1px;\n    border-radius: 3px;\n}\n\n#txt-chat-message {\n    width: 100%;\n    resize: vertical;\n    margin: 5px;\n    margin-right: 0;\n    min-height: 30px;\n}\n\n#btn-chat-message {\n    margin: 5px;\n}\n\n#conversation-panel {\n    margin-bottom: 20px;\n    text-align: left;\n    max-height: 200px;\n    overflow: auto;\n    border-top: 1px solid #E5E5E5;\n    width: 106%;\n}\n\n#conversation-panel .message {\n    border-bottom: 1px solid #E5E5E5;\n    padding: 5px 10px;\n}\n\n#conversation-panel .message img, #conversation-panel .message video, #conversation-panel .message iframe {\n    max-width: 100%;\n}\n\n#main-video {\n    width: 100%;\n    margin-top: -9px;\n    border-bottom: 1px solid #121010;\n    display: none;\n    padding-bottom: 1px;\n    display: none;\n}\n\nhr {\n    height: 1px;\n    border: 0;\n    background: #E5E5E5;\n}\n\n#btn-attach-file {\n    width: 25px;\n    vertical-align: middle;\n    cursor: pointer;\n    display: none;\n}\n\n#btn-share-screen {\n    width: 25px;\n    vertical-align: middle;\n    cursor: pointer;\n    display: none;\n}\n\n.checkmark {\n    display:none;\n    width: 15px;\n    vertical-align: middle;\n}\n\n#screen-viewer {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 9999999999999;\n    display: none;\n}\n#tool-box {\ndisplay:none!important;\n}\n" }} />
  <div style={{background: '#000', color: '#fff', textAlign: 'center', padding: 5}}><h2>Student Management System Live Video Confrencing Class Room</h2></div>
  <article>
    <div id="widget-container" style={{position: 'fixed', bottom: 0, right: 0, left: '20%', height: '91%', border: '1px solid black', borderTop: 0, borderBottom: 0, top: 60}} />
    <video id="screen-viewer" controls playsInline autoPlay />
    <div style={{width: '20%', height: '91%', position: 'absolute', left: 0, top: 50}}>
      <video id="main-video" controls playsInline autoPlay />
      <div id="other-videos" />
      <hr />
      <div style={{padding: '5px 10px', background: 'orange', color: '#fff', textTransform: 'capitalize', border: '1px solid grey'}}>
        <div id="onUserStatusChanged" />
      </div>
      <div style={{marginTop: 20, position: 'absolute', bottom: 0, background: 'white', width: '100%'}}>
        <div id="conversation-panel" />
        <div id="key-press" style={{textAlign: 'right', display: 'none', fontSize: 11}}>
          <span style={{verticalAlign: 'middle'}} />
          <img src="https://www.webrtc-experiment.com/images/key-press.gif" style={{height: 12, verticalAlign: 'middle'}} />
        </div>
        <textarea id="txt-chat-message" defaultValue={""} />
        <button className="btn btn-primary" id="btn-chat-message" disabled style={{borderRadius: 0, margin: 0, border: '1px solid grey', width: '70%'}}>Send</button>
        <img id="btn-attach-file" src="https://www.webrtc-experiment.com/images/attach-file.png" title="Attach a File" style={{display: 'inline-block', width: '10%'}} />
        <img id="btn-share-screen" src="https://www.webrtc-experiment.com/images/share-screen.png" title="Share Your Screen" style={{display: 'inline-block', width: '10%'}} />
      </div>
      <canvas id="temp-stream-canvas" style={{display: 'none'}} />
    </div>
  </article>
</div>
