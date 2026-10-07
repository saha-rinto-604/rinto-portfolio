export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/rinto-portfolio';
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://saha-rinto-604.github.io/rinto-portfolio').replace(/\/$/, '');
export const asset = (path: string) => `${basePath}${path}`;
