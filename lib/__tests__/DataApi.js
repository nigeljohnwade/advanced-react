import DataApi from '../DataApi';
import { data } from '../testData';

const store = new DataApi(data);

describe('DatApi', () => {
    it('exposes articles', () => {
        const articles = store.getState().articles;
        const articleId = data.articles[0].id;
        const articleTitle = data.articles[0].title;
        expect(articles).toHaveProperty(articleId);
        expect(articles[articleId].title).toBe(articleTitle);
    });
    it('exposes authors', () => {
        const authors = store.getState().authors;
        const authorId = data.authors[0].id;
        const authorFirstName = data.authors[0].firstName;
        expect(authors).toHaveProperty(authorId);
        expect(authors[authorId].firstName).toBe(authorFirstName);
    });
});