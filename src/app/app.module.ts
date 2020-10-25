// import { UserComponent } from './user/user.component';
// import { HomeComponent } from './home/home.component';
// import { AdminComponent } from './admin/admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
    // AdminComponent,
    // HomeComponent,
    // UserComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
