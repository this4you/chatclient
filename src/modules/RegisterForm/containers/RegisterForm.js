import React, {useState} from "react";
import {connect} from "react-redux";
import {userActions} from "../../../redux/actions";
import RegisterForm from '../components/RegisterForm';
const RegisterContainer = ({history, fetchUserRegister}) => {
    const [loading, setLoading] = useState(false);
    const onFinish = (values) => {
        setLoading(true);
        fetchUserRegister(values).then((data) => {
            console.log(data);
            setLoading(false);
        });
    }
    return (
        <RegisterForm onSubmitHandler={onFinish} loading={loading}/>
    )
}
export default connect(({users}) => users, userActions)(RegisterContainer);