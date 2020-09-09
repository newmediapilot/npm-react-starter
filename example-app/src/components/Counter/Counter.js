import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0,
        imageURL: 'https://picsum.photos/200',
        bsClass: 'btn btn-danger'
    };

    styles = {
        fontFamily: 'serif',
        fontSize: '22px',
        fontWeight: 600
    };

    render() {
        return (
            <div>
                <div style={{color: 'red'}}>World</div>
                <div style={this.styles}>Hello</div>
                <img src={this.state.imageURL}/>
                <div className="badge badge-primary m-2">{this.formatCount()}</div>
                <button className={this.state.bsClass}>Increment</button>
            </div>
        )
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
