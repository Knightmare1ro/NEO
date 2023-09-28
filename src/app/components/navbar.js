"use client";
import React, {useState} from "react";
import styles from "./navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarItem}>
                <a href="#header"></a>
            </div>
            <div >
                <a href="#info">Skills</a>
            </div>
        </nav>
    );
}

export default Navbar;