import React from 'react';

export class ComponentPreviewBuilder<P> {
  private title: string;
  private component: React.ComponentType<P>;
  private previews: Array<P> = [];

  constructor(title: string, component: React.ComponentType<P>) {
    this.title = title;
    this.component = component;
  }

  withPreview(props: P) {
    this.previews.push(props);
    return this;
  }

  build() {
    const previews = this.previews.map((preview) => () => <this.component {...preview} />);

    return {
      title: this.title,
      previews,
    };
  }
}
