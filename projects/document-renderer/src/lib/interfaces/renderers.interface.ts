export type DocumentRender = DocumentChildren[];
export type DocumentChildren = (IParentHeading | IParentParagraph | IUnorderedList | IOrderedList | IDivider | IBlockquote);

export interface IParentHeading {
  type: 'heading';
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: IChildren[];
  textAlign?: 'center' | 'end';
}

export interface IParentParagraph {
  type: 'paragraph';
  children: IChildren[];
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
  children: IChildren[];
}

export interface IDivider {
  type: 'divider',
  children: [
    {
      text: ''
    }
  ];
}

export interface IBlockquote {
  type: 'blockquote';
  children: IParentParagraph[] | IParentHeading[]
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
