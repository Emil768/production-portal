import { Article, ArticleList, ArticleView } from 'entities/Article';
import React from 'react';
import { useTranslation } from 'react-i18next';

const articles = [
	{
		id: '1',
		title: 'Javascript news',
		subtitle: 'Что нового в JS за 2022 год?',
		img: 'https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png',
		views: 1022,
		createdAt: '26.02.2022',
		userId: {
			id: '1',
			username: 'Emil',
			avatar: 'https://marketplace.canva.com/EAFltPVX5QA/1/0/1600w/canva-cute-cartoon-anime-girl-avatar-ZHBl2NicxII.jpg',
		},
		type: ['IT'],
		blocks: [
			{
				id: '4',
				type: 'CODE',
				code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
			},
			{
				id: '9',
				type: 'TEXT',
				title: 'Заголовок этого блока',
				paragraphs: [
					'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
				],
			},
		],
	},
	{
		id: '2',
		title: 'Javascript news',
		subtitle: 'Что нового в JS за 2022 год?',
		img: 'https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png',
		views: 1022,
		createdAt: '26.02.2022',
		userId: {
			id: '1',
			username: 'Emil',
			avatar: 'https://marketplace.canva.com/EAFltPVX5QA/1/0/1600w/canva-cute-cartoon-anime-girl-avatar-ZHBl2NicxII.jpg',
		},
		type: ['IT'],
		blocks: [
			{
				id: '1',
				type: 'TEXT',
				title: 'Заголовок этого блока',
				paragraphs: [
					'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
					'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
					'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
				],
			},
			{
				id: '4',
				type: 'CODE',
				code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
			},
		],
	},
] as Article[];

const ArticlesPage = () => {
	const { t } = useTranslation('articles');

	return (
		<div>
			<ArticleList isLoading={false} view={ArticleView.FULL} articles={articles} />
		</div>
	);
};

export default ArticlesPage;
