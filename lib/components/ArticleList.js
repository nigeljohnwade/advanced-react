import React from 'react';
import Article from './Article';

const ArticleList = (props) => {
    return (
        <div>
            <h1>Articles</h1>
            {Object.values(props.articles).map((article) =>
                <Article
                    key={article.id}
                    article={article} />
            )}
        </div>
    );
};

export default ArticleList;