import React from 'react';
import {Form, Input} from "antd";
import {Block, Button} from "../../../components";
import {UserOutlined, LockOutlined, MailOutlined, ExclamationCircleTwoTone} from '@ant-design/icons';
import {Link} from 'react-router-dom';

const RegisterForm = props => {
    const success = false;
    const {
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
    } = props;
    return (
        <div>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зарегестрироваться</p>
            </div>
            <Block>
                {!success ? (
                    <Form
                        name="normal_login"
                        onChange={handleChange}
                        onSubmitCapture={handleSubmit}
                        onBlur={handleBlur}
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}

                    >
                        <Form.Item
                            name="email"
                            validateStatus={
                                !touched.email ? '' : errors.email && touched.email ? "error" : "success"
                            }
                            hasFeedback='true'

                        >
                            <Input
                                id='email'
                                prefix={<MailOutlined className="site-form-item-icon"/>}
                                placeholder="E-Mail"
                                type='mail'
                                size='large'

                            />
                        </Form.Item><Form.Item
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
                            placeholder="Ваше имя"
                            size='large'/>
                    </Form.Item>
                        <Form.Item
                            name="password"
                            hasFeedback='true'
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
                                placeholder="Пароль"
                                size='large'
                            />
                        </Form.Item>
                        <Form.Item
                            name="repeat-password"
                            hasFeedback='true'
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
                                placeholder="Повторите пароль"
                                size='large'
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' size='large' htmlType="submit">Зарегестрироваться</Button>
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