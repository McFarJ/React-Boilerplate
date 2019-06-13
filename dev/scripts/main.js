const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Welcome to <span>Ice Cream Preference World</span></h1>
                <a>Add a person</a>
                <h2>People</h2>
            </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('app'))
