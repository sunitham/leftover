import { Routes, RouterModule } from '@angular/router';
import { PickmeComponent }from "./pickme/pickme.component";
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {SignupComponent} from './signup/signup.component';


// Route config let's you map routes to components
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  // map '/pick' to the people list component
  {
    path: 'pick',
    component: PickmeComponent,
  },
  // map '/' to '/pick' as our default route
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'donate',
    component: DonateComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
 
  {
    path: 'signup',
    component: SignupComponent,
    data: { title: 'Sign Up' }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

export const appRouterModule = RouterModule.forRoot(routes);