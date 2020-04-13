import { join } from 'path';

export const getContentPath = (file: string, dir: Array<string> = []): string =>
  join(process.cwd(), 'content', ...dir, file);

export default getContentPath;
