import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddJavaComponent } from './add-java/add-java.component';
import { ListJavaComponent } from './list-java/list-java.component';
import { AddPythonComponent } from './add-python/add-python.component';
import { ListPythonComponent } from './list-python/list-python.component';
import { AddCComponent } from './add-c/add-c.component';
import { ListCComponent } from './list-c/list-c.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'add-java',component:AddJavaComponent},
  {path:'list-java',component:ListJavaComponent},
  {path:'add-python',component:AddPythonComponent},
  {path:'list-python',component:ListPythonComponent},
  {path: 'add-c', component:AddCComponent},
  {path: 'list-c', component:ListCComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
