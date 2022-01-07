import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'signin', component: SigninComponent},
      {path: 'signup', component: SignupComponent},
      {path: '**', redirectTo: 'signin'}
    ]
  }
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)   
  ]
})
export class AuthRoutingModule { }
