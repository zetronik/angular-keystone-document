export type DocumentRender = DocumentChildren[];
export type DocumentChildren = (IParentHeading | IParentParagraph | IUnorderedList | IOrderedList | IDivider | IBlockquote | ICode | ILayout | IComponentBlock);
export type Children = (IChildren | ILink)[]
export type ComponentChildren = (IComponentPropBlock | IComponentPropInline)[]

export interface IComponentBlock {
  type: 'component-block';
  component: string;
  props: any;
  children: ComponentChildren;
}

export interface IComponentPropBlock {
  type: 'component-block-prop';
  propPath: ['content'];
  children: IParentParagraph[];
}

export interface IComponentPropInline {
  type: 'component-inline-prop';
  propPath: ['attribution'];
  children: ChildrenInlineProp[]
}

export interface ChildrenInlineProp {
  text: string
}

export interface IParentHeading {
  type: 'heading';
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: Children;
  textAlign?: 'center' | 'end';
}

export interface IParentParagraph {
  type: 'paragraph';
  children: Children;
  textAlign?: 'center' | 'end';
}

export interface IUnorderedList {
  type: 'unordered-list';
  children: IListItem[];
}

export interface IOrderedList {
  type: 'ordered-list';
  children: IListItem[];
}

export interface IListItem {
  type: 'list-item';
  children: IListItemContent[];
}

export interface IListItemContent {
  type: 'list-item-content';
  children: Children;
}

export interface IDivider {
  type: 'divider',
  children: [
    {
      text: ''
    }
  ];
}

export interface ILink {
  type: 'link';
  href: string;
  children: IChildren[];
}

export interface IBlockquote {
  type: 'blockquote';
  children: DocumentChildren[];
}

export interface ICode {
  type: 'code';
  children: [
    {
      text: string
    }
  ];
}

export interface ILayout {
  type: 'layout';
  layout: number[];
  children: ILayoutArea[];
}

export interface ILayoutArea {
  type: 'layout-area';
  children: DocumentChildren[];
}

export interface IChildren {
  text: string;
  bold?: boolean; // strong
  italic?: boolean // em
  superscript?: boolean; //sup
  subscript?: boolean; // sub
  keyboard?: boolean; // kbd
  code?: boolean; // code
  strikethrough?: boolean; // s
  underline?: boolean; // u
}
