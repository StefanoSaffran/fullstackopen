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

const FeedbackResults = props => {
    return (
        <div>
            <Titles title="statistics" />
            good {props.good} <br />
            neutral {props.neutral} <br />
            bad {props.bad}
        </div>
    )
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

    return (
        <Fragment>
            <Titles title="give feedback" />
            <div>
                <Button saveFeedback={saveFeedback('GOOD')} text={'good'} />
                <Button saveFeedback={saveFeedback('NEUTRAL')} text={'neutral'} />
                <Button saveFeedback={saveFeedback('BAD')} text={'bad'} />
            </div>
            <FeedbackResults good={good} neutral={neutral} bad={bad} />

        </Fragment >
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

