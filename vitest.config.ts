import { getViteConfig } from 'astro/config';

interface UserConfig {
  // other properties
  
  test?: {
    globals: boolean;
    environment: string;
    include: string[];
    exclude: string[];
    setupFiles: string;
  };
  
  // other properties
}

// export default getViteConfig( <UserConfig>{
// 	test: {
// 		globals: true,
//     environment: 'jsdom',
//     include: ['./test/**/*.test.{js,ts,tsx}', './src/**/*.test.{js,ts,tsx}'],
//     exclude: ['node_modules', 'dist'],
// 		setupFiles: './setupTests.ts',
// 	},
// });


const config: UserConfig = {
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		exclude: ['node_modules', 'dist'],
		setupFiles: './vitest.setup.ts',
	},
};

export default getViteConfig(config);

