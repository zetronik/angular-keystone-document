import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {IChildren} from "../interfaces/renderers.interface";

export type ChildrenType = {
  text: string;
  [key: string]: string;
};

@Directive({
  selector: '[childrenRender]'
})
export class ChildrenDirective implements OnInit {

  @Input('childrenRender') children!: IChildren;
  private el: ChildrenType = {
    text: 'span',
    bold: 'strong',
    italic: 'em',
    superscript: 'sup',
    subscript: 'sub',
    keyboard: 'kbd',
    code: 'code',
    strikethrough: 's',
    underline: 'u',
  }

  constructor(
    private elementRef: ElementRef,
    private render: Renderer2
  ) {}

  private get getKeys(): string[] {
    return Object.keys(this.children).filter(k => k !== 'text');
  }

  private createSpan(text: string): any {
    const el = this.render.createElement('span')
    const domText = this.render.createText(text)
    this.render.appendChild(el, domText)
    return el
  }

  private renderer() {
    const children = this.getKeys.map((key: string) => {
      return this.elementCreator(this.el[key])
    })
    if (!children.length) {
      this.appendParentText()
      return
    }

    this.appendParent(children)
  }

  private appendParentText() {
    const span = this.createSpan(' ' + this.children.text)
    this.append(this.elementRef.nativeElement, span)
  }

  private appendParent(children: any[]) {
    const span = this.createSpan(' ' + this.children.text)
    children.length === 1
      ? this.append(children[0], span)
      : this.append(children[children.length - 1], span)
    for (let i = children.length - 1; i >= 1 ; i--) {
      this.append(children[i - 1], children[i])
    }
    this.append(this.elementRef.nativeElement, children[0])
  }

  private elementCreator(teg: string) {
    return this.render.createElement(teg)
  }


  private append(parent: any, children: any) {
    this.render.appendChild(parent, children)
  }

  ngOnInit(): void {
    this.renderer()
  }
}
