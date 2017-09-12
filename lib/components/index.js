import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        answer: 42
    };
    asynFunction = () => {
        return Promise.resolve(37);
    };
    async componentDidMount() {
        this.setState({
            answer: await this.asynFunction()
        });
    }
    render() {
        return (
            <div>
                <h2>Hello class components -- {this.state.answer}</h2>
            </div>
        );
    }
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById('root')
);