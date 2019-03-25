import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ElectionComponent } from './dashboard/election/election.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'user', redirectTo:'user/signin' },
  { path: 'user/signin', component: SignInComponent },
  { path: 'user/signup', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/election', component: ElectionComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: 'SignInComponent' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
