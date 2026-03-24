import { promises as fs } from 'fs';
import path from 'path';

export async function writeOutputFile(outDir: string, filename: string, content: string): Promise<void> {
    await fs.mkdir(outDir, { recursive: true });
    const filePath = path.join(outDir, filename);
    await fs.writeFile(filePath, content, 'utf-8');
}