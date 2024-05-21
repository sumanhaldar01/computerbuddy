import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { CompilerComponent } from './compiler/compiler.component';
import { JavaContentsComponent } from './java-contents/java-contents.component';

import { SidebarJavaComponent } from './sidebar-java/sidebar-java.component';
import { JavaWelcomeComponent } from './java-welcome/java-welcome.component';
import { ApiService } from './api.service';
import { CWelcomeComponent } from './c-welcome/c-welcome.component';
import { SidebarCComponent } from './sidebar-c/sidebar-c.component';
import { CContentComponent } from './c-contents/c-content.component';
import { TutorialPageComponent } from './tutorial-page/tutorial-page.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardUserComponent,
    CompilerComponent,
    JavaContentsComponent,
    SidebarJavaComponent,
    JavaWelcomeComponent,
    CWelcomeComponent,
    SidebarCComponent,
    CContentComponent,
    TutorialPageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders,
  ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
