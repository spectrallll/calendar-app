import {Menu, Row} from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import {useNavigate} from "react-router-dom";
import { RoutesNames } from "../router";
import {useSelector} from "react-redux";
import {selectAllAuth, selectAuth} from "../store/slices/auth/selectors";
import {useAppDispatch} from "../store/store";
import {logout} from "../store/slices/auth/asyncAction";


const Navbar: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {isAuth, user} = useSelector(selectAllAuth);

    return (
      <Header>
          <Row justify='end'>
              {isAuth
              ?
                  <Menu theme="dark" mode="horizontal" selectable={false}>
                      <div style={{color: 'white'}}>
                          {user.username}
                      </div>
                      <Menu.Item onClick={() => dispatch(logout())} key={1}>Выйти</Menu.Item>
                  </Menu>
              :
                  <Menu theme="dark" mode="horizontal" selectable={false}>
                      <Menu.Item  key={1}>Логин</Menu.Item>
                  </Menu>}

          </Row>
      </Header>
    );
}

export default Navbar;