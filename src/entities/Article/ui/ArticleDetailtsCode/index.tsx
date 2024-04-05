import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleCodeBlock } from '../../model/types/article';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import CheckIcon from '@/shared/assets/icons/check.svg';
import { Image } from '@/shared/ui/Image';
import { Button, ThemeButton } from '@/shared/ui/Button';
import cls from './ArticleDetailCode.module.scss';

interface ArticleDetailCodeProps {
	className?: string;
	block: ArticleCodeBlock;
}

export const ArticleDetailCode = memo(({ className, block }: ArticleDetailCodeProps) => {
	const [isCopied, setIsCopied] = useState(false);

	const copyCodeToClipboard = () => {
		navigator.clipboard
			.writeText(block.code)
			.then(() => {
				setIsCopied(true);
				setTimeout(() => {
					setIsCopied(false);
				}, 3000);
			})
			.catch((error) => {
				console.error('Failed to copy:', error);
			});
	};

	return (
		<div className={classNames(cls.ArticleDetailCode, {}, [className])}>
			<pre className={cls.code}>
				{isCopied ? (
					<Image sourse={<CheckIcon className={cls.icon} />} />
				) : (
					<Button onClick={copyCodeToClipboard} className={cls.icon} theme={ThemeButton.CLEAR}>
						<Image sourse={<CopyIcon />} />
					</Button>
				)}
				<code>{block.code}</code>
			</pre>
		</div>
	);
});
