export type DocumentRender = DocumentChildren[];
export type DocumentChildren = (IParentHeading | IParentParagraph);

export interface IParentHeading {
  type: 'heading'
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: IChildren[];
  textAlign?: 'center' | 'end'
}

export interface IParentParagraph {
  type: 'paragraph'
  children: IChildren[];
  textAlign?: 'center' | 'end'
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
