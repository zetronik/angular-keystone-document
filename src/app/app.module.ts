import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DocumentRendererModule} from "angular-keystone-document-renderer";
// import {DocumentRendererModule} from 'document-renderer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DocumentRendererModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
