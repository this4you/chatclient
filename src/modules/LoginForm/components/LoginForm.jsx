import React, {useState} from 'react';
import {Form, Input} from "antd";
import {Block, Button} from "../../../components";
import {LockOutlined, MailOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";


import {userActions} from '../../../redux/actions';

const LoginForm = ({fetchUserLogin, history}) => {
    const [loading, setLoading] = useState(false);
    const onFinish = (values) => {
        setLoading(true);
        fetchUserLogin(values).then(data => {
            if (data && data.status === "success") {
                history.push('/');
            }
            setLoading(false);
        })
    };
    return (
        <div>
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <Block>
                <Form
                    name="normal_login"
                    className="login-form"
                    onFinish={onFinish}

                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                                type: "email"
                            },
                        ]}
                        hasFeedback='true'
                    >
                        <Input
                            prefix={<MailOutlined className="site-form-item-icon"/>}
                            placeholder="Email"
                            size='large'/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                        hasFeedback='true'
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Password"
                            size='large'
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' loading={loading} size='large' htmlType="submit">Войти в аккаунт</Button>
                    </Form.Item>
                    <Link to='/signup' className="auth__register-link">Зарегестрироваться</Link>
                </Form>
            </Block>
        </div>
    );
};

export default connect(({users}) => users, userActions)(LoginForm);