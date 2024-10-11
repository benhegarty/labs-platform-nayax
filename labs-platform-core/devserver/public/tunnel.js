const xhrOpen = window.XMLHttpRequest.prototype.open;
window.XMLHttpRequest.prototype.open = function (method, url) {
  if (url.includes(window.tunnelUrl)) {
    this.withCredentials = true;
    this.addEventListener('readystatechange', function () {
      if (this.readyState === XMLHttpRequest.OPENED) {
        const cookies = document.cookie;
        if (cookies) {
          this.setRequestHeader('Cookie', cookies);
        }
      }
    }, false);
  }

  return xhrOpen.apply(this, arguments);
};

const originalFetch = window.fetch;
window.fetch = function (resource, init) {
  let url = resource;
  if (typeof resource === 'object' && resource.url) {
    url = resource.url;
  }
  if (url.includes(window.tunnelUrl)) {
    const cookies = document.cookie;
    init = init || {};
    init.credentials = 'include';

    if (init.headers) {
      init.headers['Cookie'] = cookies;
    } else {
      init.headers = {
        'Cookie': cookies
      };
    }
  }
  return originalFetch.call(this, resource, init);
};

const originalSubmit = HTMLFormElement.prototype.submit;
HTMLFormElement.prototype.submit = function () {
  const action = this.action;
  if (action.includes(window.tunnelUrl)) {
    const cookies = document.cookie;
    if (!this.querySelector('[name="Cookie"]')) {
      const cookieInput = document.createElement('input');
      cookieInput.type = 'hidden';
      cookieInput.name = 'Cookie';
      cookieInput.value = cookies;
      this.appendChild(cookieInput);
    }
  }
  return originalSubmit.call(this);
};

