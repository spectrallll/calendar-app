import {Menu, Row} from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import {useNavigate} from "react-router-dom";
import { RoutesNames } from "../router";
import {useSelector} from "react-redux";
import {selectAuth} from "../store/slices/auth/selectors";


const Navbar: React.FC = () => {

    const navigate = useNavigate();
    const isAuth = useSelector(selectAuth);

    return (
      <Header>
          <Row justify='end'>
              {isAuth
              ?
                  <Menu theme="dark" mode="horizontal" selectable={false}>
                      <div style={{color: 'white'}}>
                          Pavel
                      </div>
                      <Menu.Item onClick={() => console.log('Hello world')} key={1}>Выйти</Menu.Item>
                  </Menu>
              :
                  <Menu theme="dark" mode="horizontal" selectable={false}>
                      <Menu.Item onClick={() => navigate(RoutesNames.LOGIN)} key={1}>Логин</Menu.Item>
                  </Menu>}

          </Row>
      </Header>
    );
}

export default Navbar;