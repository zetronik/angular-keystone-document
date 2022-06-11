import {Component, Input, OnInit} from '@angular/core';
import {DocumentRender} from "./interfaces/renderers.interface";

@Component({
  selector: 'akd-document-renderer',
  templateUrl: 'document-renderer.component.html',
})
export class DocumentRendererComponent implements OnInit {

  @Input() document!: DocumentRender

  constructor() {
  }

  ngOnInit(): void {
  }
}
