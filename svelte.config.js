import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: ({ path, message }) => {
				// CV PDFs aren't added yet — don't fail the static build on them
				if (path.startsWith('/cv/')) return;
				throw new Error(message);
			}
		}
	}
};

export default config;
