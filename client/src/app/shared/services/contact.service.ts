import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {ContactConst} from '../../../const';

import 'rxjs/add/operator/map';

/**
 * ContactService
 */
@Injectable()
export class ContactService {
  rootUrl = ContactConst.url + '/contacts/';
  constructor(private http: Http) {

  }
  listAllContacts() {
    return this.http.get(this.rootUrl)
      .map(res => res.json());
  }
  deleteContact(id) {
    return this.http.delete(this.rootUrl + id)
      .map(res => res.json());
  }
}
