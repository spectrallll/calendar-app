import React from "react";
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";

const LoginForm: React.FC = () => {

    const submit = () => {
        console.log('Hello world');
    }

    return (
      <Form
        onFinish={submit}
      >
          <Form.Item label='Имя пользователя' name='username' rules={[rules.required('Пожалуйста введите имя пользователя!')]}>
            <Input />
          </Form.Item>

          <Form.Item label='Пароль' name='password' rules={[rules.required('Пожалуйста введите пароль!')]}>
              <Input />
          </Form.Item>
          <Form.Item>
              <Button type='primary' htmlType='submit'>
                  Войти
              </Button>
          </Form.Item>
      </Form>
    );
}

export default LoginForm;