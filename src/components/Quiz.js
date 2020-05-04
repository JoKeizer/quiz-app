import React, {useState, Component} from 'react';
import {QuizData} from "./Quiz-data";
import Stopwatch from './Stopwatch';
import './Quiz.css';
import {Link} from "react-router-dom";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";


console.log(QuizData)

class Quiz extends Component {
    state = {
        userAnswer: null,
        currentQuestion: 0,
        options: [],
    }

    loadQuiz = () => {
        const {currentQuestion} = this.state
        this.setState(() => {
            return {
                questions: QuizData[currentQuestion].question,
                options: QuizData[currentQuestion].options,
                images: QuizData[currentQuestion].image,
                answer: QuizData[currentQuestion].answer,
                quizEnd: false,
                time: 0,
                score: 10,
                disabled: true,
            }

        })
    };

    componentDidMount() {
        this.loadQuiz();
        Splitting();
    }

    nextQuestionHandler = () => {
        const {userAnswer, answer, score, images} = this.state
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        })
        console.log(this.state.currentQuestion)

        if(userAnswer === answer) {
            this.setState({
                score: score + 10
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {currentQuestion} = this.state;
        if(this.state.currentQuestion !== prevState.currentQuestion) {
            this.setState(() => {
                return {
                    questions: QuizData[currentQuestion].question,
                    options: QuizData[currentQuestion].options,
                    images: QuizData[currentQuestion].image,
                    answer: QuizData[currentQuestion].answer,
                    disabled: true,
                }
            })
        }
    }

    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
            disabled: false,
        })
    };

    finishHandler = () => {
        if(this.state.currentQuestion === QuizData.length -1) {
            this.setState({
                quizEnd: true
            })
        }

    }

    render() {
        const {questions, options, currentQuestion, images, userAnswer, quizEnd} = this.state;
        console.log(images, questions)
        if(quizEnd) {
            return(
                <div className="score-container">
                    <div className="score-wrapper">
                        <h2>Score: {this.state.score}</h2>
                        <h3>Time: {this.state.time}</h3>
                        <p>The correct Answers for the Quiz where:</p>
                        <ul className="answersList">
                            {QuizData.map((item, index) => (
                                <li key={index}>
                                    {item.answer} your score: {this.state.score}
                                </li>
                            ))}
                        </ul>
                        <div className="button-containers">
                            <ul className="homeList">
                                <li className="homeList-play">
                                    <Link to="/">Bedankt voor het spelen</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="quiz-container">
                <div className="question-wrapper">
                    <div className="question-header">
                        <Stopwatch
                            time={this.state.time}
                            quizEnd={this.state.quizEnd}
                        />
                        <h1 className="question">{questions}</h1>
                        <div className="question-info">
                            <span className="total-questions">{`Question ${currentQuestion + 1 } out of ${QuizData.length}` }</span>
                        </div>

                        <div className="image-container">
                            <img src={images}/>
                        </div>

                        <div className="vertical-flip" data-splitting="cells" data-columns="4" data-rows="4"
                             data-image="true">
                            <img src={images}/>
                        </div>
                    </div>

                    <ul className="questionList">
                        {options.map(option => (
                            <li
                                key={option.id}
                                className={`${userAnswer === option ? "selected" : "questionList"}`}
                                onClick={() => this.checkAnswer(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>

                </div>
                <div className="btn-container">
                    {currentQuestion < QuizData.length - 1 &&
                    <button
                        disabled={this.state.disabled}
                        className="btn"
                        onClick={this.nextQuestionHandler}
                    >
                        Next
                    </button>
                    }
                    {currentQuestion === QuizData.length -1 &&
                    <button
                        className="btn"
                        onClick={this.finishHandler}
                    >
                        Finish
                    </button>
                    }
                </div>

            </div>
        )
    }
}

export default Quiz;