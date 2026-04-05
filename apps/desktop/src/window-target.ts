import path from 'node:path';
import { pathToFileURL } from 'node:url';

export function resolveWindowTarget(isPackaged: boolean, resourcesPath: string): string {
  if (isPackaged) {
    const htmlPath = path.join(resourcesPath, 'web', 'index.html');
    return pathToFileURL(htmlPath).toString();
  }

  return 'http://localhost:3000';
}
