export type BuildMode = 'production' | 'development';

export interface BuildPaths {
	entry: string;
	build: string;
	html: string;
	src: string;
	locales: string;
	localesBuild: string;
}

export interface BuildEnv {
	mode: BuildMode;
	port: number;
	api: string;
}

export interface BuildOptions {
	mode: BuildMode;
	paths: BuildPaths;
	isDev: boolean;
	api: string;
	port: number;
}
