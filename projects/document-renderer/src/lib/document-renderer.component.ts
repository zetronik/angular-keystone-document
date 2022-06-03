import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'akd-document-renderer',
  templateUrl: 'document-renderer.component.html',
  styles: ['document-renderer.component.scss']
})
export class DocumentRendererComponent implements OnInit {

  @Input() document!: any[]

  constructor() {
  }

  ngOnInit(): void {
  }
}
