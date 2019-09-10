import React from 'react';
import ReactDOM from 'react-dom';

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

const App = () => {

    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]
    console.log(courses)
    const componentsCourses = courses.map(course => <Course key={course.id} course={course}/>)
    return (
        <>
            {componentsCourses}
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
