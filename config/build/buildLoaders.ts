import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders({ isDev, isProd }: BuildOptions): webpack.RuleSetRule[] {
	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	const babelLoader = buildBabelLoader({ isTsx: false, isProd, isDev });
	const tsxBabelLoader = buildBabelLoader({ isTsx: true, isProd, isDev });
	const cssLoader = buildCssLoader(isDev);

	// Если не используем тайпскрипт - нужен babel-loader
	// const typescriptLoader = {
	// 	test: /\.tsx?$/,
	// 	use: 'ts-loader',
	// 	exclude: /node_modules/,
	// };

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	return [fileLoader, svgLoader, cssLoader, babelLoader, tsxBabelLoader];
}
