import React from 'react';

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    );
};

const Header = props => {
    return (
        <div>
            <h1>{props.course.name}</h1>
        </div>
    )
}

const Content = props => {
    const lines = props.course.parts.map(line => <Part key={line.id} part={line.name} exercises={line.exercises} />)
    return (
        <div>
            {lines}
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
    const total = props.course.parts.reduce((totalSum, part) => totalSum + part.exercises, 0)
    return (
        <div>
            <p><strong>total of {total} exercises</strong></p>
        </div>
    )
}

export default Course;