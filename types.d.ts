export type PreviewContainerType = 'Scroll' | 'View';

export interface ComponentPreviewData {
  title: string;
  previews: Array<() => JSX.Element>;
  containerType: PreviewContainerType;
}
