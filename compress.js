import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = 'public/armarkets';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

async function processFiles() {
    for (const file of files) {
        const name = path.parse(file).name;
        const inputPath = path.join(dir, file);
        const outputPath = path.join(dir, `${name}_compressed.webp`);

        try {
            await sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath);
            console.log(`Compressed ${file}`);
        } catch (err) {
            console.error(`Error processing ${file}:`, err);
        }
    }
}

processFiles();
