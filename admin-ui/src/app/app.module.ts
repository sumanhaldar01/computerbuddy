import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddJavaComponent } from './add-java/add-java.component';
import { ApiService } from './api.service';
import { ListJavaComponent } from './list-java/list-java.component';
import { AddPythonComponent } from './add-python/add-python.component';
import { ListPythonComponent } from './list-python/list-python.component';
import { SearchComponent } from './search/search.component';
import { AddCComponent } from './add-c/add-c.component';
import { ListCComponent } from './list-c/list-c.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    AddJavaComponent,
    ListJavaComponent,
    AddPythonComponent,
    ListPythonComponent,
    SearchComponent,
    AddCComponent,
    ListCComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CKEditorModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
