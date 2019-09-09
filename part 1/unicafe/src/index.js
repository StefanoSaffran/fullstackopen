import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

const Titles = ({ title }) => {
    return (
        <h1>{title}</h1>

    )
}

const Button = ({ saveFeedback, text }) => {
    return (
        <button onClick={saveFeedback}>{text}</button>
    )
}

const Statistics = ({ good, neutral, bad, all, average, positive }) => {

    if (all > 0) {
        return (
            <div>
      {/*           
                <Statistic text="good" value={good} /> <br />
                <Statistic text="neutral" value={neutral} /> <br />
                <Statistic text="bad" value={bad} /> <br />
                <Statistic text="all" value={all} /> <br />
                <Statistic text="average" value={isNaN(average) ? 0 : average} /> <br />
                <Statistic text="positive" value={isNaN(positive) ? 0 : positive} /> */}
                <Titles title="statistics" />
                
                <table>
                    <tbody>
                        <tr>
                            <td>good</td>
                            <td>{good}</td>
                        </tr>
                        <tr>
                            <td>neutral</td>
                            <td>{neutral}</td>
                        </tr>
                        <tr>
                            <td>bad</td>
                            <td>{bad}</td>
                        </tr>
                        <tr>
                            <td>all</td>
                            <td>{all}</td>
                        </tr>
                        <tr>
                            <td>average</td>
                            <td>{average}</td>
                        </tr>
                        <tr>
                            <td>positive</td>
                            <td>{positive}</td>
                        </tr>                      
                    </tbody>
                </table>
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

/* const Statistic = ({ text, value }) => {
    return (
        <>
            {text} {value}
        </>
    )
} */

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

            <>
                <Button saveFeedback={saveFeedback('GOOD')} text={'good'} />
                <Button saveFeedback={saveFeedback('NEUTRAL')} text={'neutral'} />
                <Button saveFeedback={saveFeedback('BAD')} text={'bad'} />
            </>

            <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />

        </Fragment >
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

