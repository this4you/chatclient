import React from 'react';
import {Form, Input} from "antd";
import {Block, Button} from "../../../components";
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

const LoginForm = () => {
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
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon"/>}
                            placeholder="Username"
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
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Password"
                            size='large'
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' size='large' htmlType="submit">Войти в аккаунт</Button>
                    </Form.Item>
                    <Link to='/register' className="auth__register-link">Зарегестрироваться</Link>
                </Form>
            </Block>
        </div>
    );
};

export default LoginForm;