import React, { useEffect, useState } from "react";
import { Button, Layout, Menu } from "antd";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useStore } from "../../store";
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
  const cartList = useStore((state) => state.cart);

  const [favItems, setFavItems] = useState(0);
  const favList = useStore((state) => state.favourites);

  useEffect(() => {
    setFavItems(favList.length);
  }, [favList]);

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <a href="#">
        <div className="demo-logo">
          <img src="/logo.png" alt="Website logo" />
        </div>
      </a>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{
          flex: 1,
          minWidth: 0,
        }}
        items={[]}
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
      <div className="actions">
        <Link to="/cart">
          <Button className="header-cart-btn">
            <ShoppingCartOutlined />
            <p>{cartList.totalQuantity ?? 0}</p>
          </Button>
        </Link>
        <Link to="/favourites">
          <Button className="header-fav-btn">
            <HeartOutlined />
            <p>{favItems}</p>
          </Button>
        </Link>
      </div>
    </Header>
  );
}

/*

*/
