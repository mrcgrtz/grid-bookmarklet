import {readFile, writeFile} from 'node:fs/promises';
import {defineConfig} from 'tsup';

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
	async onSuccess() {
		const code = await readFile('./dist/grid.bookmarklet.js', 'utf8');
		const bookmarklet = `javascript:${encodeURI(code.trim())}`;
		try {
			await writeFile('./dist/grid.bookmarklet.txt', bookmarklet);
		} catch (error: unknown) {
			console.log(error);
		}
	},
});
