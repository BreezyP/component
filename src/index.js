import React from 'react';
import ReactDOM from 'react-dom';


import CardDetail from "./CardDetail";
import ButtonDetail from "./ButtonDetail";

const App = () => {
    return (
        <div className='row justify-content-center mt-2'>
                <CardDetail
                    name='Samantha'
                    job='My Companion'>
                    <ButtonDetail/>
                </CardDetail>
                <CardDetail
                    name='Lillian'
                    job="My Daughter">
                    <ButtonDetail/>
                </CardDetail>
                <CardDetail
                    name='Maximillian'
                    job="My Future Son">
                    <ButtonDetail/>
                </CardDetail>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));