import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './user/home/home.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'user', redirectTo:'user/signin' },
  { path: 'user/signin', component: SignInComponent },
  { path: 'user/signup', component: SignUpComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
