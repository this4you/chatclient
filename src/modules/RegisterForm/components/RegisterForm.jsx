import React from 'react';
import {Form, Input} from "antd";
import {Block, Button} from "../../../components";
import {UserOutlined, LockOutlined, MailOutlined, ExclamationCircleTwoTone} from '@ant-design/icons';
import {Link} from 'react-router-dom';

const RegisterForm = ({loading, onSubmitHandler}) => {
    const success = false;
    return (
        <div>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            <Block>
                {!success ? (
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onSubmitHandler}
                    >
                        <Form.Item
                            name="email"
                            hasFeedback='true'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email!',
                                    type: "email"
                                },
                            ]}
                        >
                            <Input
                                id='email'
                                prefix={<MailOutlined className="site-form-item-icon"/>}
                                placeholder="E-Mail"
                                type='mail'
                                size='large'

                            />
                        </Form.Item>
                        <Form.Item
                            name="fullName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon"/>}
                                placeholder="Ваше имя"
                                size='large'/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Пароль"
                                size='large'
                            />
                        </Form.Item>
                        <Form.Item
                            name="repeat-password"
                            dependencies={['password']}
                            hasFeedback='true'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please repeat your Password!',
                                },
                                ({getFieldValue}) => ({
                                    validator(rule, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }

                                        return Promise.reject('The two passwords that you entered do not match!');
                                    },
                                })
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Повторите пароль"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button loading={loading} type='primary' size='large' htmlType="submit">Зарегистрироваться</Button>
                        </Form.Item>
                        <Link to='/login' className="auth__register-link">Войти в аккаунт</Link>
                    </Form>
                ) : (
                    <div className='auth__success-block'>
                        <div>
                            <ExclamationCircleTwoTone/>
                        </div>
                        <h3>Подтвердите свой аккаунт</h3>
                        <p>
                            На вашу почту отправлено письмо с ссылкой на подстверждения
                            аккаунта
                        </p>
                    </div>
                )}
            </Block>
        </div>
    );
}

export default RegisterForm;
