import { Routes } from '@angular/router';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';

import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { ManageUserComponent } from './pages/admin/manage-user/manage-user.component';
import { UpdateUserComponent } from './pages/admin/update-user/update-user.component';
import { AdminDonationComponent } from './pages/admin/admin-donation/admin-donation.component';
import { AddVolunteerComponent } from './pages/admin/add-volunteer/add-volunteer.component';
import { ManageVolunteerComponent } from './pages/admin/manage-volunteer/manage-volunteer.component';
import { UpdateVolunteerComponent } from './pages/admin/update-volunteer/update-volunteer.component';
import { DonationDeliveryComponent } from './pages/admin/donation-delivery/donation-delivery.component';
import { DeliveryFormComponent } from './pages/admin/delivery-form/delivery-form.component';
import { DonationDeliveredComponent } from './pages/admin/donation-delivered/donation-delivered.component';
import { ContactMessagesComponent } from './pages/admin/contact-messages/contact-messages.component';

import { DonorHomeComponent } from './pages/user/donor-home/donor-home.component';
import { DonationFormComponent } from './pages/user/donation-form/donation-form.component';
import { DonorProfileComponent } from './pages/user/donor-profile/donor-profile.component';
import { UpdateProfileComponent } from './pages/user/update-profile/update-profile.component';
import { DonationHistoryComponent } from './pages/user/donation-history/donation-history.component';

import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './layouts/private-layout/private-layout.component';
import { authGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';

import { HomeComponent } from './pages/public/home/home.component';
import { EventComponent } from './pages/public/event/event.component';
import { VolunteerComponent } from './pages/public/volunteer/volunteer.component';
import { ContactComponent } from './pages/public/contact/contact.component';
import { AboutComponent } from './pages/public/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'event', component: EventComponent },
      { path: 'volunteer', component: VolunteerComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },

  {
    path: '',
    component: PrivateLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'admin_home', component: AdminHomeComponent },
      { path: 'manage_users', component: ManageUserComponent },
      { path: 'update_users', component: UpdateUserComponent },
      { path: 'new_donation', component: AdminDonationComponent },
      { path: 'add_volunteer', component: AddVolunteerComponent },
      { path: 'manage_volunteer', component: ManageVolunteerComponent },
      { path: 'update_volunteer', component: UpdateVolunteerComponent },
      { path: 'donation_delivery', component: DonationDeliveryComponent },
      { path: 'delivery_form', component: DeliveryFormComponent },
       { path: 'donation_delivered', component: DonationDeliveredComponent },
      { path: 'contact_messages', component: ContactMessagesComponent },

      { path: 'donor_home', component: DonorHomeComponent },
      { path: 'donation_form', component: DonationFormComponent },
      { path: 'donor_profile', component: DonorProfileComponent },
      { path: 'update_profile', component: UpdateProfileComponent },
      { path: 'donation_history', component: DonationHistoryComponent }
    ]
  },

  { path: '**', redirectTo: 'home' }
];