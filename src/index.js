import React from 'react';
import ReactDOM from 'react-dom';


import CardDetail from "./CardDetail";

const App = () => {
    return (
        <div className='row justify-content-center mt-2'>
            <div className="col-3">
                <CardDetail name='Samantha' job='My Companion'/>
            </div>
            <div className="col-3">
                <CardDetail name='Lillian' job="My Daughter"/>
            </div>
            <div className="col-3">
                <CardDetail name='Maximillian' job="My Future Son"/>
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));