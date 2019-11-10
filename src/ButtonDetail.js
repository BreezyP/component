import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'reactstrap';

const ButtonDetail = (props) => {

    return (
        <div>
            <Button outline color='info'>Stuff</Button>
            <Button outline color='warning'>Things</Button>
        </div>
    )

};

export default ButtonDetail;
