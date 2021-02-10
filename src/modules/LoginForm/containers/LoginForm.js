import LoginForm from '../components/LoginForm';
import React, {useState} from 'react';
import {connect} from "react-redux";
import {userActions} from "../../../redux/actions";
const LoginFormContainer = ({fetchUserLogin, history}) => {
    const [loading, setLoading] = useState(false);
    const onFinish = (values) => {
        setLoading(true);
        fetchUserLogin(values).then(data => {
            if (data && data.status === "success") {
                history.push('/');
                return;
            }
            setLoading(false);
        })
    };
    return (
        <LoginForm loading={loading} submitHandler={onFinish} />
    );
}
export default connect(({users}) => users, userActions)(LoginFormContainer);
