import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { resolveWindowTarget } from '../src/window-target';

describe('resolveWindowTarget', () => {
  it('uses localhost during development', () => {
    expect(resolveWindowTarget(false, '/tmp/resources')).toBe('http://localhost:3000');
  });

  it('uses packaged index.html in production', () => {
    const resourcesPath = path.join('C:', 'Program Files', 'Telugu Learning App', 'resources');
    const result = resolveWindowTarget(true, resourcesPath);

    expect(result).toMatch(/index\.html$/);
    expect(result).toContain('/web/');
  });
});
