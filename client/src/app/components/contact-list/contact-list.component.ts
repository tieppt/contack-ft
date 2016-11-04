import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../shared';

import {IContact} from '../../Types/contact.interface';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  providers: [ContactService]
})
export class ContactListComponent implements OnInit {
  contacts: IContact[];

  constructor(private service: ContactService) { }

  ngOnInit() {
    this.service.listAllContacts()
      .subscribe(res => {
        this.contacts = res;
      });
  }

  deleteContact(contact) {
    this.service.deleteContact(contact._id)
      .subscribe((res) => {
        if (res.deleted == 1) {
          this.contacts = this.contacts.filter((c) => c._id != contact._id);
        }
      });
  }

}
