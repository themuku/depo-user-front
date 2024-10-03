import React from "react";
import { Layout, Menu } from "antd";
import { Link, NavLink } from "react-router-dom";
const { Header } = Layout;

// const items = [
//   {
//     key: 1,
//     label: "Home",
//   },
//   {
//     key: 2,
//     label: "About",
//   },
//   {
//     key: 3,
//     label: "Contact",
//   },
//   {
//     key: 4,
//     label: "Products",
//   },
// ];

export default function CustomHeader() {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
      <div className="links">
        <NavLink
          className={({ isActive }) => `link ${isActive ? "active-link" : ""}`}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => `link ${isActive ? "active-link" : ""}`}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => `link ${isActive ? "active-link" : ""}`}
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) => `link ${isActive ? "active-link" : ""}`}
          to="/products"
        >
          Products
        </NavLink>
      </div>
    </Header>
  );
}

/*

*/
