import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 1,
        imageURL: 'https://picsum.photos/200',
        bsClass: 'btn btn-danger',
        tags: [
            1, 2, 3
        ]
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
                <div className={this.applyBadgeClass()}>{this.formatCount()}</div>
                <button className={this.state.bsClass}>Increment</button>
                {this.renderUl()}
            </div>
        )
    }

    renderUl() {
        if (this.state.tags || this.state.tags.length) {
            return (
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            );
        } else {
            return (
                <p>no tags!</p>
            );
        }
    }

    applyBadgeClass() {
        let classes = 'badge badge-primary m-2';
        if (this.state.count > 0) classes = classes.replace('primary', 'warning');
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
