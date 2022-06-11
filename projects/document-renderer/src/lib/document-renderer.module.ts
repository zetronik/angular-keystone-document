import {NgModule} from '@angular/core';
import {DocumentRendererComponent} from './document-renderer.component';
import {BrowserModule} from "@angular/platform-browser";
import {ChildrenDirective} from './directive/children.directive';


@NgModule({
  declarations: [
    DocumentRendererComponent,
    ChildrenDirective
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    DocumentRendererComponent
  ]
})
export class DocumentRendererModule {
}
