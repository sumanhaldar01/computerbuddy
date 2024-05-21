import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { JavaContentsComponent } from './java-contents/java-contents.component';

import { SidebarJavaComponent } from './sidebar-java/sidebar-java.component';
import { JavaWelcomeComponent } from './java-welcome/java-welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexpageComponent,
    JavaContentsComponent,
    SidebarJavaComponent,
    JavaWelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
