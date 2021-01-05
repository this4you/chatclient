import React from 'react';
import {Form, Input} from "antd";
import {Block, Button} from "../../../components";
import {LockOutlined, MailOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

const LoginForm = ({loading, submitHandler}) => {
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
                    onFinish={submitHandler}

                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                                type: "email",
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
                            {
                                message: 'Password must be minimum 3 symbols',
                                min: 3
                            },
                        ]}
                        hasFeedback='true'
                    >
                        <Input.Password
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

export default LoginForm;