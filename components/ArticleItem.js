import Link from 'next/link';
import articleStyles from '../styles/Article.module.css';

import React from 'react';

const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={articleStyles.card} href="">
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
