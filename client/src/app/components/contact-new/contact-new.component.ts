import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ContactService } from '../../shared';

@Component({
  selector: 'contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.scss'],
  providers: [ContactService]
})
export class ContactNewComponent {
  contactForm: FormGroup;
  success: boolean;

  private createNewFG() {
    return this.fb.group({
      name: '',
      job: '',
      email: '',
      birthdate: '',
    });
  }

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    @Inject(Window) public window: Window
    ) {
    this.contactForm = this.createNewFG();
    this.success = false;
  }
  createContact() {
    let result = this.contactService.createContact(this.contactForm.value)
      .subscribe((res) => {
        this.success = true;
        this.contactForm = this.createNewFG();
        this.window.setTimeout(() => {
          this.success = false;
        }, 2000);
      });
  }
}
