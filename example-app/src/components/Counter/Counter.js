import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0
    };

    render() {
        return (
            <div>
                <div>{this.formatCount()}</div>
                <button class="btn btn-danger">Increment</button>
            </div>
        )
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
