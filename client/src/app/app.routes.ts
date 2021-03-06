import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactNewComponent } from './components/contact-new/contact-new.component';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';

const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/new', component: ContactNewComponent },
  { path: 'contacts/edit/:id', component: ContactEditComponent }
];

export default RouterModule.forRoot(routes);
