import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response } from '@angular/http';
import {ContactConst} from '../../../const';

import {Observable} from 'rxjs/Observable';

import '../../rxjs-operators';

/**
 * ContactService
 */
@Injectable()
export class ContactService {
  rootUrl = ContactConst.url + '/contacts/';
  constructor(private http: Http) {

  }
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  listAllContacts() {
    return this.http.get(this.rootUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }
  deleteContact(id) {
    return this.http.delete(this.rootUrl + id)
      .map(this.extractData)
      .catch(this.handleError);
  }
  createContact(contact) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({'headers': headers});
    return this.http.post(this.rootUrl, {contact}, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
  findContactById(id) {
    return this.http.get(this.rootUrl + id)
      .map(this.extractData)
      .catch(this.handleError);
  }
  updateContact(id, contact) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({'headers': headers});
    return this.http.put(this.rootUrl + id, {contact}, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
}
