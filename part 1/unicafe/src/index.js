import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

const Titles = props => {
    return (
        <h1>{props.title}</h1>

    )
}

const Button = props => {
    return (
        <button onClick={props.saveFeedback}>{props.text}</button>
    )
}

const FeedbackResults = ({ good, neutral, bad, all, average, positive }) => {

    if (all > 0) {
        return (
            <div>
                <Titles title="statistics" />
                good {good} <br />
                neutral {neutral} <br />
                bad {bad} <br />
                all {all} <br />
                average {isNaN(average) ? 0 : average} <br />
                positive {isNaN(positive) ? 0 : positive} %
        </div>
        )
    } else {
        return (
            <p>
                No feedback given
        </p>
        )
    }
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const saveFeedback = feedback => () => {
        switch (feedback) {
            case 'GOOD':
                setGood(good + 1);
                break;
            case 'NEUTRAL':
                setNeutral(neutral + 1);
                break;
            case 'BAD':
                setBad(bad + 1);
                break;
            default:
                break;
        }
    }
    const all = good + neutral + bad;
    const average = (good - bad) / all;
    const positive = (good * 100) / all;
    return (
        <Fragment>
            <Titles title="give feedback" />
            <div>
                <Button saveFeedback={saveFeedback('GOOD')} text={'good'} />
                <Button saveFeedback={saveFeedback('NEUTRAL')} text={'neutral'} />
                <Button saveFeedback={saveFeedback('BAD')} text={'bad'} />
            </div>
            <FeedbackResults good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />

        </Fragment >
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

