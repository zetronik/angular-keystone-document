import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[grid]'
})
export class GridDirective implements OnInit{

  @Input('grid') grid!: number[]

  constructor(
    private elementRef: ElementRef,
    private render: Renderer2
  ) {}

  ngOnInit(): void {
    const calcGrid = this.grid.join('fr ')+'fr'
    this.render.setStyle(this.elementRef.nativeElement, 'grid-template-columns', calcGrid)
  }
}
