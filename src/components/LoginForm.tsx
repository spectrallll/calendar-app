import React from "react";
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useSelector} from "react-redux";
import { login } from "../store/slices/auth/asyncAction";
import {useAppDispatch} from "../store/store";
import {selectAllAuth} from "../store/slices/auth/selectors";
import {Status} from "../store/slices/auth/types";

const LoginForm: React.FC = () => {
    const {status, isAuth} = useSelector(selectAllAuth);
    const dispatch = useAppDispatch()
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const submit = () => {

        dispatch(login({username, password}));
    }

    return (
      <Form
        onFinish={submit}
      >
          {status === Status.ERROR && <div style={{color: 'red'}}>
              Не правильный логин или пароль
          </div>}
          <Form.Item label='Имя пользователя' name='username' rules={[rules.required('Пожалуйста введите имя пользователя!')]}>
            <Input value={username} onChange={e => setUsername(e.target.value)}/>
          </Form.Item>

          <Form.Item label='Пароль' name='password' rules={[rules.required('Пожалуйста введите пароль!')]}>
              <Input value={password} onChange={e => setPassword(e.target.value)} type='password'/>
          </Form.Item>
          <Form.Item>
              <Button type='primary' htmlType='submit' loading={status === Status.LOADING}>
                  Войти
              </Button>
          </Form.Item>
      </Form>
    );
}

export default LoginForm;