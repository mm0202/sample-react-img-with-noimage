import React, {Component} from 'react';
import noimage from './noimage.png';

class Sample extends Component {
    render() {
        <img className={'sample'}
            alt={'test'}
            src={'image path'}
            onError={(e) => e.target.src = noimage} />
    }
}

export default Sample