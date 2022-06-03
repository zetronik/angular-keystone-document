import { NgModule } from '@angular/core';
import { DocumentRendererComponent } from './document-renderer.component';
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    DocumentRendererComponent
  ],
    imports: [
        BrowserModule
    ],
  exports: [
    DocumentRendererComponent
  ]
})
export class DocumentRendererModule { }
