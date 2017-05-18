import { Injectable, provide } from '@angular/core';
import { BaseRequestOptions, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class ExRequestOptions extends BaseRequestOptions  {
  constructor(private options = new RequestOptions()) {
    super();
    this.headers.append('X-CSRFToken', this.getCookie('csrftoken'));
  }

  getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2)
      return parts.pop().split(";").shift();
  }

  appendHeaders(headername: string, headervalue: string) {
    this.headers.append(headername, headervalue);
  }

  appendParams (paramName: string, paramValue: string) {
        let params: URLSearchParams = new URLSearchParams();
        params.set(paramName, paramValue);
        this.options.search = params;
  }
}
