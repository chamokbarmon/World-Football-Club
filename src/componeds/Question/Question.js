import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='qus'>
            <p>1. How Does react work ?</p><br />
            <p>Answer :ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
             <br /><br />
             <p> 2. props vs state </p>
             <br />
             <p>ans :Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
             <br /><br />
             <p> 3. useEffect uses react ?</p>
             <p>ans :useEffect after render: We know that, the useEffect() is used for causing side effects in functional components and it is also capable for handling componentDidMount(), componentDidUpdate() and componentWillUnmount() life-cycle methods of class based components into functional component</p>

        </div>
    );
};

export default Question;