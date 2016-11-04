import { Component, Input, Output, EventEmitter } from '@angular/core';
import {IContact} from '../../Types/contact.interface';

@Component({
  selector: 'contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent {
  @Input() contact: IContact;
  @Output() contactDeleted = new EventEmitter();

  constructor() { }
  deleteContact(contact) {
    this.contactDeleted.emit(contact);
  }

}
