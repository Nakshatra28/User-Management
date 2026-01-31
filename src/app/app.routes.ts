import { Routes } from '@angular/router';
import { UserComponent } from './user/user/user.component';
import { ViewprofileComponent } from './user/user/viewprofile/viewprofile.component';
import { AddstafComponent } from './user/user/addstaf/addstaf.component';

export const routes: Routes = [
     { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserComponent },
  { path: 'users/add-staff', component: AddstafComponent },
   { path: 'users/:id', component: ViewprofileComponent },
 


];
