import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.less";
import LoginModal from "./Authentication/LoginModal";
import RegisterModal from "./Authentication/RegisterModal";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      registerVisible: false,
      isLogin: localStorage.getItem("isLogin"),
    };
  }
  showModal = () => {
    this.setState({
      visible: true,
      registerVisible: false,
    });
  };
  handleCancel = (e) => {
    this.setState({
      visible: false,
      registerVisible: false,
    });
  };
  login = () => {
    this.setState({
      visible: false,
      isLogin: true,
    });
    localStorage.setItem("isLogin", true);
  };
  logout = () => {
    this.setState({
      isLogin: false,
    });
    localStorage.setItem("isLogin", "");
  };
  register = () => {
    this.setState({
      visible: false,
      registerVisible: true,
    });
  };
  render() {
    return (
      <header>
        <nav>
          <NavLink exact to="/">
            My PTE
          </NavLink>
          {this.state.isLogin ? (
            <span>
              <NavLink to="/personal">Profile</NavLink>
              <span onClick={this.logout} className="login">
                Logout
              </span>
            </span>
          ) : (
            <div className="login">
              <span  onClick={this.showModal}>Login</span>  
              <span  onClick={this.register}>Register</span>  
            </div>
          )}
        </nav>
        <LoginModal
          visible={this.state.visible}
          handleCancel={this.handleCancel}
          login={this.login}
          register={this.register}
        />
        <RegisterModal
          visible={this.state.registerVisible}
          showModal={this.showModal}
          handleCancel={this.handleCancel}
        />
      </header>
    );
  }
}

export default Header;
