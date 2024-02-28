import { User } from 'entities/User/model/types';

export enum ArticleBlockType {
	CODE = 'CODE',
	IMAGE = 'IMAGE',
	TEXT = 'TEXT',
}
export enum ArticleSortField {
	TITLE = 'title',
	VIEWS = 'views',
	CREATED = 'created',
}

export interface ArticleBlockBase {
	id: string;
	type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
	type: ArticleBlockType.CODE;
	code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
	type: ArticleBlockType.IMAGE;
	src: string;
	title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
	type: ArticleBlockType.TEXT;
	paragraphs: string[];
	title?: string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export enum ArticleType {
	ALL = 'ALL',
	IT = 'IT',
	SCIENCE = 'SCIENCE',
	ECONOMICS = 'ECONOMICS',
}

export interface Article {
	id: string;
	title: string;
	subtitle: string;
	img: string;
	userId: User;
	views: number;
	createdAt: string;
	type: ArticleType[];
	blocks: ArticleBlock[];
}

export enum ArticleView {
	FULL = 'full',
	MULT = 'mult',
}
