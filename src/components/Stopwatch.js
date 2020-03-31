import React, {Component} from 'react';
import './Quiz.css';

class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minute:0,
            second:0,
            stop:0
        }

    }

    componentDidMount() {
        this.stopwatch = setInterval(() => {
            return this.setState((state, props) => {
                return {
                    second: state.second==59?0:state.second +1,
                    minute: state.second==59?state.minute+1:state.minute
                }
            })
        }, 1000)
    }

    componentWillUnmount() {

        clearInterval(this.stopwatch);
    }


    render() {
        const quizEnds = this.props.quizEnd;
        const time = this.state.minute + this.state.second;
        console.log(time)


        return (
            <div className="stopwatch">
                <h1>{this.state.minute}:{this.state.second}</h1>
            </div>
        )
    }
}

export default Stopwatch;