import React, {useState} from "react";
import {connect} from "react-redux";
import {userActions} from "../../../redux/actions";
import RegisterForm from '../components/RegisterForm';
import {message} from "antd";

const RegisterContainer = ({history, fetchUserRegister}) => {
    const [loading, setLoading] = useState(false);
    const onFinish = (values) => {
        setLoading(true);
        fetchUserRegister(values).then(({data}) => {
            if (data.name === "MongoError") {
                for(let field in data.keyPattern) {
                    if (field === "email") {
                        message.error("Пользователь с таким email уже существует!");
                    }
                }
            } else {
                history.push('/signup/verify');
            }
            setLoading(false);
        });
    }
    return (
        <RegisterForm onSubmitHandler={onFinish} loading={loading}/>
    )
}
export default connect(({users}) => users, userActions)(RegisterContainer);
