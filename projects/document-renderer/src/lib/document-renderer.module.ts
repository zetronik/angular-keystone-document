import {NgModule} from '@angular/core';
import {DocumentRendererComponent} from './document-renderer.component';
import {BrowserModule} from "@angular/platform-browser";
import {ChildrenDirective} from './directive/children.directive';
import { GridPipe } from './pipe/grid.pipe';
import { GridDirective } from './directive/grid.directive';


@NgModule({
  declarations: [
    DocumentRendererComponent,
    ChildrenDirective,
    GridPipe,
    GridDirective
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
