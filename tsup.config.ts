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
	/**
	 * This function is executed after a successful build.
	 * It reads the generated JavaScript file, converts its content into a bookmarklet format,
	 * and writes the result to a text file. Any errors encountered during this process
	 * are logged to the console but are not propagated further.
	 */
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
