import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexpageComponent } from './indexpage/indexpage.component';
import { JavaContentsComponent } from './java-contents/java-contents.component';
import { JavaWelcomeComponent } from './java-welcome/java-welcome.component';

const routes: Routes = [
  { path:'',component: IndexpageComponent },
  {path:'java-tutorial',component:JavaWelcomeComponent},
  { path: 'java-content/:id', component: JavaContentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
