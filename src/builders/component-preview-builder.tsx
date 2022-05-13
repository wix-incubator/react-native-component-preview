import React from 'react';
import {ComponentPreviewData, PreviewContainerType, PreviewConfig} from '../../types';

export class ComponentPreviewBuilder<P> {
  private title: string;
  private containerType: PreviewContainerType;
  private component: React.ComponentType<P>;
  private previews: Array<{props: P; config: PreviewConfig}> = [];

  constructor({
    title,
    component,
    containerType = 'Scroll',
  }: {
    title: string;
    component: React.ComponentType<P>;
    containerType?: PreviewContainerType;
  }) {
    console.log(component);
    this.title = title;
    this.containerType = containerType;
    this.component = component;
  }

  withPreview(props: P, config: PreviewConfig = {}) {
    this.previews.push({props, config});
    return this;
  }

  build(): ComponentPreviewData {
    const previews = this.previews.map((preview) => ({
      component: () => <this.component {...preview.props} />,
      config: preview.config,
    }));

    return {
      title: this.title,
      containerType: this.containerType,
      previews,
    };
  }
}
