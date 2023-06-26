import fs from 'fs';
import path from 'path';

export const writeFileSync = (
  file: string,
  data: string | NodeJS.ArrayBufferView
) => {
  if (fs.existsSync(file)) {
    fs.rmSync(file);
  }

  // Extract the directory path
  const directoryPath = path.dirname(file);

  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  fs.writeFileSync(file, data);
};
