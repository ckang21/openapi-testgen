import { promises as fs } from 'fs';
import path from 'path';
export async function writeOutputFile(outDir, filename, content) {
    await fs.mkdir(outDir, { recursive: true });
    const filePath = path.join(outDir, filename);
    await fs.writeFile(filePath, content, 'utf-8');
}
//# sourceMappingURL=fileWriter.js.map