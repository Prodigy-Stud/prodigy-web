const rawBasePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? '';

export const SITE_BASE_PATH =
  rawBasePath && rawBasePath !== '/' ? rawBasePath.replace(/\/+$/, '') : '';

export function withBasePath(path: string): string {
  if (!path.startsWith('/')) return path;
  if (!SITE_BASE_PATH) return path;
  if (path.startsWith(`${SITE_BASE_PATH}/`) || path === SITE_BASE_PATH) return path;
  return `${SITE_BASE_PATH}${path}`;
}
