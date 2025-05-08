import { MoreVertical, ChevronLast, ChevronFirst, ChevronRight, CodeIcon } from "lucide-react";
import { useContext, createContext, useState } from "react";
import React from "react";
import styles from "./sidebar.module.css";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true);

    return (
        <aside
            className={styles.aside}
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
        >
            <nav className={styles.nav}>
                <div className={styles.logoContainer}>
                    <img
                        src="./src/assets/Logo JPI.svg"
                        className={`${styles.logo} ${expanded ? styles.logoExpanded : styles.logoCollapsed}`}
                        alt=""
                    />
                    <button className={styles.toggleButton}>
                        {expanded ? <ChevronFirst size={30} color="white" /> : <ChevronLast size={30} color="white" />}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className={styles.menuList}>{children}</ul>
                </SidebarContext.Provider>

                <div className={styles.profileSection}>
                    <img
                        src="https://ui-avatars.com/api/?name=Santiago+Affonso&background=c7d2fe&color=3730a3&bold=true"
                        alt=""
                        className={styles.avatar}
                    />
                    <div className={`${styles.userInfo} ${expanded ? styles.userInfoExpanded : styles.userInfoCollapsed}`}>
                        <div className={styles.userText}>
                            <h4 className={styles.userName}>Pedro Izkovitz</h4>
                            <span className={styles.userEmail}>Pedro@jpifidc.com.br</span>
                        </div>
                        <MoreVertical size={20} className={styles.optionsIcon} />
                    </div>
                </div>
            </nav>
        </aside>
    );
}

export function SidebarItem({ icon, text, active, alert, subItems = [] }) {
    const { expanded } = useContext(SidebarContext);
    const [open, setOpen] = useState(false);
    const hasSubItems = subItems.length > 0;

    return (
        <>
            <li
                className={`${styles.item} ${active ? styles.active : styles.inactive}`}
                onClick={() => hasSubItems && setOpen(!open)}
            >
                {React.cloneElement(icon, {
                    className: expanded ? styles.iconExpanded : styles.iconCollapsed,
                })}

                <span className={`${styles.text} ${expanded ? styles.textExpanded : styles.textCollapsed}`}>
                    {text}
                </span>

                {alert && <div className={`${styles.alertDot} ${expanded ? "" : styles.alertDotCollapsed}`} />}

                {hasSubItems && expanded && (
                    <ChevronRight className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`} size={20} color="white" />
                )}

                {!expanded && <div className={styles.tooltip}>{text}</div>}
            </li>

            {hasSubItems && open && expanded && (
                <ul className={styles.subMenu}>
                    {subItems.map((label, index) => (
                        <li key={index} className={styles.subItem}>
                            <CodeIcon className={styles.subItemIcon} />
                            {label}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}