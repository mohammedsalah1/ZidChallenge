import { PaymentFormComponent } from './modules/payment/payment-form/payment-form.component';
import { EditProfileComponent } from './modules/profile/edit-profile/edit-profile.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'edit-profile',
    component: EditProfileComponent
  },
  {
    path: 'payment-form',
    component: PaymentFormComponent
  },
  {
    path: '',
    redirectTo: 'edit-profile',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
