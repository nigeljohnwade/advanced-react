import React from 'react';
import PropTypes from 'prop-types';
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
    const { article, store } = props;
    const author = store.lookupAuthor(article.authorId);
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

Article.propTypes = {
    article: PropTypes.shape({
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    }),
};
export default Article;