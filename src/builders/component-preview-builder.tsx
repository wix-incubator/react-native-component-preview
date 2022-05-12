import React from 'react';
import {ComponentPreviewData, PreviewContainerType} from '../../types';

export class ComponentPreviewBuilder<P> {
  private title: string;
  private containerType: PreviewContainerType;
  private component: React.ComponentType<P>;
  private previews: Array<P> = [];

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

  withPreview(props: P) {
    this.previews.push(props);
    return this;
  }

  build(): ComponentPreviewData {
    const previews = this.previews.map((preview) => () => <this.component {...preview} />);

    return {
      title: this.title,
      containerType: this.containerType,
      previews,
    };
  }
}
