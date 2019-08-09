const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    <div class="form-group">
      <label for="name" class="col-sm-2 control-label">Name</label>
      <div class="col-sm-10">
        <input placeholder="Type Your Name Here!" id="author-name" name="author" type="text" class="form-control">
      </div>
    </div>
    
    <div class="form-group">
      <label for="email" class="col-sm-2 control-label">Email</label>
      <div class="col-sm-10">
        <input placeholder="Your Email?" id="email" name="email" type="email" class="form-control">
      </div>
    </div>
    
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
    <label for="content" class="col-sm-2 control-label">Content</label>
      <div class="col-sm-10">
        <textarea placeholder="Your Content Here!" id="textarea" name="content" type="textarea" class="form-control"></textarea>
      </div>
    </div>
    
    <div class="form-group">
      <label for="pagestatus" class="col-sm-2 control-label">Page Status</label>
      <div class="col-sm-10">
        <input placeholder="Your Page Status" id="status" name="pagestatus" type="text" class="form-control">
      </div>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);