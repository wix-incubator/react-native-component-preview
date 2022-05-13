export type PreviewContainerType = 'Scroll' | 'View';

export interface PreviewConfig {
  title?: string;
}

export interface Preview {
  config: PreviewConfig;
  component: () => JSX.Element;
}

export interface ComponentPreviewData {
  title: string;
  previews: Array<Preview>;
  containerType: PreviewContainerType;
}
