import React from 'react';
import request from 'superagent';
import {AppBar} from 'material-ui';

class App extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    // get initial data via ajax
    componentDidMount() {
        request
            .get('/app/data/users.json')
            .end(function(err, res) {
                 if (err || !res.ok) {
                   console.log('Oh no! error');
                 } else {
                   console.log('yay got ' + JSON.stringify(res.body));
                 }
             });
    }

    // cancel request in case it's still going
    componentWillUnmount() {
        request.abort();
    }

    render() {
        return (
            <div>
                <AppBar title="Hello World!" />
            </div>
        );
    }

}

export default App
