import React from 'react';
import ReactDOM from 'react-dom';

const Header = props => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Content = props => {
    return (
        <div>
            <Part part={props.part1.name} exercises={props.part1.exercises} />
            <Part part={props.part2.name} exercises={props.part2.exercises} />
            <Part part={props.part3.name} exercises={props.part3.exercises} />
        </div>
    )
}

const Part = props => {
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    )
}

const Total = props => {
    return (
        <div>
            <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
        </div>
    )
}

const App = () => {

    const course = 'Half Stack application development'

    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <Header course={course} />
            <Content part1={part1} part2={part2} part3={part3} />
            <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
