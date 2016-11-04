import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ContactService } from '../../shared';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
  providers: [ContactService]
})
export class ContactEditComponent implements OnInit {
  contactForm: FormGroup;
  success: boolean;
  id: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService,
    private fb: FormBuilder,
    @Inject(Window) public window: Window
  ) {
    this.contactForm = this.fb.group({
      name: '',
      job: '',
      email: '',
      birthdate: '',
    });
   }
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
      this.contactService.findContactById(this.id)
        .subscribe((contact) => {
          contact.birthdate = contact.birthdate.slice(0, 10);
          let frmContact = Object.assign({
            name: '',
            job: '',
            email: '',
            birthdate: '',
          }, contact);
          this.contactForm = this.fb.group(frmContact);
      });
    });
  }
  updateContact() {
    let result = this.contactService.updateContact(this.id, this.contactForm.value)
      .subscribe((res) => {
        this.success = true;
        this.window.setTimeout(() => {
          this.success = false;
        }, 2000);
      });
  }
}
