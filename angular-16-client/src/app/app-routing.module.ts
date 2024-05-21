import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { CompilerComponent } from './compiler/compiler.component';


import { JavaContentsComponent } from './java-contents/java-contents.component';
import { JavaWelcomeComponent } from './java-welcome/java-welcome.component';
import { CWelcomeComponent } from './c-welcome/c-welcome.component';
import { CContentComponent } from './c-contents/c-content.component';
import { TutorialPageComponent } from './tutorial-page/tutorial-page.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path:'compiler',component:CompilerComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'java-tutorial',component:JavaWelcomeComponent},
  {path: 'java-content/:id', component: JavaContentsComponent },
  {path: 'c-tutorial', component: CWelcomeComponent},
  {path: 'c-content/:id', component: CContentComponent},
  {path: 'tutorial-page', component: TutorialPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
