import React from "react";
import Link from "next/link";

const Nav = () => (
  <nav
    className="navbar is-primary"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-item">
      <img src="/images/cub-scouts.gif" />

      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <Link href="/">
          <a className="navbar-item menu-link">Pack 723</a>
        </Link>
      </div>

      <div className="navbar-end">
        <Link href="/blog">
          <a className="navbar-item menu-link">Blog</a>
        </Link>

        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">Current</a>

          <div className="navbar-dropdown">
            <Link href="/calendar">
              <a className="navbar-item">Calendar</a>
            </Link>
          </div>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">Prospective</a>

          <div className="navbar-dropdown">
            <Link href="/about">
              <a className="navbar-item">About</a>
            </Link>
            <Link href="/dens">
              <a className="navbar-item">Dens</a>
            </Link>
            <Link href="/faq">
              <a className="navbar-item">FAQ</a>
            </Link>
            <hr className="navbar-divider" />
            <Link href="/join">
              <a className="navbar-item">Join Us</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
