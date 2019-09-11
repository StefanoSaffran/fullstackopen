import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = props => {
    return (
        <h1>{props.title}</h1>
    );
}

const App = (props) => {

    const [selected, setSelected] = useState(0)
    const arrayOfVotes = new Array(props.anecdotes.length).fill(0)
    const [votes, setVotes] = useState(arrayOfVotes);

    const sortAnecdotes = size => {
        const numSelected = Math.floor((Math.random() * size));
        setSelected(numSelected);
    }
    const vote = () => {
        const copy = votes;
        copy[selected] += 1;
        setVotes([...copy])
    }
    //let indexOfMaxValue = votes.reduce((iMax, x, i, votes) => x > votes[iMax] ? i : iMax, 0);
    let temp = votes.indexOf(Math.max(...votes));

    let indexOfMostVoted;
    temp === undefined ? indexOfMostVoted = 0 : indexOfMostVoted = temp;

    return (
        <div>
            <Title title={"Anecdote of the day"}/>
            {props.anecdotes[selected]} <br />
            has {votes[selected]} votes<br />
            <button onClick={vote}>vote</button>
            <button onClick={() => sortAnecdotes(props.anecdotes.length)}>next anecdote</button>
            <Title title={"Anecdote with most votes"}/>
            {props.anecdotes[indexOfMostVoted]} <br />
            has {votes[indexOfMostVoted]} votes<br />
        </div>
    )
}


const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]



ReactDOM.render(
    <App anecdotes={anecdotes}/>,
    document.getElementById('root')
)