import {NgModule} from '@angular/core';
import {DocumentRendererComponent} from './document-renderer.component';
import {ChildrenDirective} from './directive/children.directive';
import { GridDirective } from './directive/grid.directive';
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    DocumentRendererComponent,
    ChildrenDirective,
    GridDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DocumentRendererComponent
  ]
})
export class DocumentRendererModule {
}
