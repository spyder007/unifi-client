import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthenticationMenu } from "../AuthenticationMenu/AuthenticationMenu";
import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.scss';

export type NavigationBarProperties = {
  brand?: string,
  children?: React.ReactNode
}

export const NavMenu: React.FunctionComponent<NavigationBarProperties> = (props: NavigationBarProperties) => {
  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-white border-bottom border-primary shadow-sm">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navMenuCollapse" aria-controls="navMenuCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Link className="navbar-brand text-primary d-none d-lg-block" to="/">Big Screen Title</Link>
        <Link className="navbar-brand text-primary d-lg-none" to="/">Small Title</Link>

        <div id="navMenuCollapse" className="offcanvas offcanvas-end">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav flex-grow">
              <li className="nav-item">
                <Link className="nav-link text-primary" to="/clients">Clients</Link>
              </li>
              
            </ul>
          </div>
        </div>
        <AuthenticationMenu />
      </div>
    </nav>
  );
}

