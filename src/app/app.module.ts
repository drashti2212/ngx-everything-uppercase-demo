import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEverythingUppercaseModule } from '@ngx-everything-uppercase';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxEverythingUppercaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
