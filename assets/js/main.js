class SiteHeader extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Common/header.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
  }
}
customElements.define("site-header", SiteHeader);

class SiteAnnouncementBar extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Common/announcement-bar.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
  }
}
customElements.define("site-announcement-bar", SiteAnnouncementBar);