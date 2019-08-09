const html = require("html-template-tag");
const layout = require("./layout");

module.exports = (pages) => layout(html`
  <h3>Pages</h3>
  <hr>
  <form method="GET" action="/wiki/search">
    <input type="text" name="search" />
    <button type="submit">Search</button>
  </form>
  <hr>
  <h1>${pages.count} articles on this site</h1>
  <ul class="list-unstyled">
    <ul>
      ${pages.rows.map(page => html`
        <a href="/wiki/${page.slug}">${page.title}</a><br>
      `)}
    </ul>
  </ul>`);