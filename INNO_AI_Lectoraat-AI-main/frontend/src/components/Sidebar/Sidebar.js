import React, {useRef} from "react";
import {NavLink} from "react-router-dom";
import {Nav} from "reactstrap";

const logo = require("assets/img/Erasmus.png");

function Sidebar(props) {
    const sidebar = useRef();
    // verifies if routeName is the one active (in browser input)
    const activeRoute = (routeName) => {
        return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    };


    return (
        <div
            className="sidebar"
            data-color={props.bgColor}
            data-active-color={props.activeColor}
        >
            <div className="logo">
                <a href="/" className="simple-text logo-normal">
                    <div className="logo-img">
                        <img src={logo} alt="Erasmus MC logo"/>
                    </div>
                    <span className="simple-text">Erasmus MC</span>
                </a>
            </div>
            <div className="sidebar-wrapper" ref={sidebar}>
                <Nav>
                    {props.routes.map((prop, key) => {
                        return (
                            <li
                                className={
                                    activeRoute(prop.path) + (prop ? " active-pro" : "")
                                }
                                key={key}
                            >
                                <NavLink
                                    to={prop.layout + prop.path}
                                    className="nav-link"
                                    activeClassName="active"
                                >
                                    <i className={prop.icon}/>
                                    <p>{prop.name}</p>
                                </NavLink>
                            </li>
                        );
                    })}
                </Nav>
            </div>
        </div>
    );
}


export default Sidebar;
