import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Default extends Component {
    render() {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h2 className="display-3">404</h2>
                        <h3>error</h3>
                        <h4>page not found</h4>
                        <h5 className="my-5">the requested URL <span className="text-danger">{this.props.location.pathname}</span>{" "} was not found!</h5>
                        <Link to='/'>
                        <button className="btn btn-danger my-5">Kanavez Store</button>                        
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Default;