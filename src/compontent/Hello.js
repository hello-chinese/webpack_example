
//import './Hello.css';
import './Hello.css';
//import './Hello.scss';

import React, {Component} from 'react';

let style = {
    backgroundColor: 'blue'
}

export default class Hello extends Component {

    render() {
        return (
            <div>
                <h1 style={style} onClick={()=>this.myClick("fdfdf",23)}>!31313...31131131</h1>
                <br/>
                <img/>
            </div>
        )
    }
}
