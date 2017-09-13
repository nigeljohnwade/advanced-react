import React from 'react';
import ArticleList from '../components/ArticleList';
import { shallow } from 'enzyme';

describe('ArticleList', () => {
    const testProps = {
        articles: {
            a: { id: 'a', date: 'date', title: 'date', body: 'date' },
            b: { id: 'b', date: 'date', title: 'date', body: 'date' }
        },

    };
    it('renders correctly', () => {
        const wrapper = shallow(
            <ArticleList
                {...testProps}
            />
        );
        expect(wrapper.find('ArticleContainer').length).toBe(2);
        expect(wrapper).toMatchSnapshot();
    });

});