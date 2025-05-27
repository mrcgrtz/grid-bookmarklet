import {readFile, writeFile} from 'node:fs/promises';
import {defineConfig, type Options} from 'tsup';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default defineConfig({
	entry: ['src'],
	format: ['iife'],
	minify: true,
	clean: true,
	outExtension() {
		return {
			js: '.bookmarklet.js',
		};
	},
	async onSuccess(): Promise<void> {
		try {
			const code = await readFile('./dist/grid.bookmarklet.js', 'utf8');
			const bookmarklet = `javascript:${encodeURI(code.trim())}`;
			await writeFile('./dist/grid.bookmarklet.txt', bookmarklet);
		} catch (error: unknown) {
			console.error(error);
		}
	},
});
