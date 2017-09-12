import React from 'react';

const styles = {
    article: {
        marginBottom: '1em'
    },
    title: {
        marginBottom: '1em'
    },
    date: {
        fontSize: '0.85em'
    },
    author: {
        fontSize: '0.75em'
    }
};

const dateToDisplayString = (dateObject) => {
    return new Date(dateObject).toDateString();
};
const Article = (props) => {
    const { article, actions } = props;
    const author = actions.lookupAuthor(article.authorId);
    return (
        <div style={styles.article}>
            <h2 style={styles.title}>{article.title}</h2>
            <p style={styles.date}>{dateToDisplayString(article.date)}</p>
            <p style={styles.author}>
                <a href={author.website} >
                    {author.firstName} {author.lastName}
                </a>
            </p>
            <p style={styles.body}>{article.body}</p>
        </div >
    );
};

export default Article;