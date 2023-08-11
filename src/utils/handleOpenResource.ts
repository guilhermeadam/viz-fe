declare const window: any;

export function handleOpenResource(title: string, description: string, path: string) {
  const context = window.top;
  context.mantle_setPerspective('opened.perspective');
  context.openURL(title, description, path);
}
