// export interface Renderers {
//   inline: {
//     link: Component<{ children: ReactNode; href: string }> | 'a';
//     relationship: Component<{
//       relationship: string;
//       data: { id: string; label: string | undefined; data: Record<string, any> | undefined } | null;
//     }>;
//   } & MarkRenderers;
//   block: {
//     block: OnlyChildrenComponent;
//     paragraph: Component<{ children: ReactNode; textAlign: 'center' | 'end' | undefined }>;
//     blockquote: OnlyChildrenComponent;
//     code: Component<{ children: string }> | keyof JSX.IntrinsicElements;
//     layout: Component<{ layout: [number, ...number[]]; children: ReactElement[] }>;
//     divider: Component<{}> | keyof JSX.IntrinsicElements;
//     heading: Component<{
//       level: 1 | 2 | 3 | 4 | 5 | 6;
//       children: ReactNode;
//       textAlign: 'center' | 'end' | undefined;
//     }>;
//     list: Component<{ type: 'ordered' | 'unordered'; children: ReactElement[] }>;
//   };
// }
