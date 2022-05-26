import React, {Component} from 'react';

class showComponent extends Component {


    render() {
        let {show} = this.props;
        return (
            <div className="show">
                <p>{show}</p>
            </div>
    )
        ;
    }
}


export default showComponent;