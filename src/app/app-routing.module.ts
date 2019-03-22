import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WelcomeComponent } from './components/welcome-page/welcome/welcome.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { LoginComponent } from './components/auth/login/login.component';
// import { WelcomeComponent } from './components/welcome/welcome-page/welcome-page.component';

const appRoutes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotFoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
