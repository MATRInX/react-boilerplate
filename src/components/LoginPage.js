import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export class LoginPage extends React.Component {
    onLogin = () => {
        this.props.startLogin();
    };
    render() {
        return (
        <div className='box-layout'>
            <div className='box-layout__box'>   
                <h1 className='box-layout__title'>Boilerplate React App</h1>
                <p>Tag line for app.</p>
                <button className="button" onClick={this.onLogin}>Login with Google</button>
            </div>
        </div>)
    };
};

const mapDispatchToProps =  (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);