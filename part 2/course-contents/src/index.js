import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
          {/*  <Total course={course} />  */}
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

/* const Total = props => {
    const total = props.course.parts.reduce((totalSum, part) => totalSum + part.exercises , 0)
    return (
        <div>
            <p>Number of exercises {total}</p>
        </div>
    )
} */

const App = () => {

    const course = {
        name: 'Half Stack application development',
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
          }
        ]
      }

    return (
        <>
            <Course course={course} />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
