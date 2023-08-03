import Link from "next/link";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.headerBar}>
        <h1>milkcrates</h1>
      </div>

      <div className={classes.headerNav}>
        <Link href="crates" className={classes.headerNavItem}>
          all crates
        </Link>
        <span
          className={`${classes.headerNavItem} ${classes.headerNavItemDivider}`}
        >
          —
        </span>
        <Link href="crates/random" className={classes.headerNavItem}>
          random crate
        </Link>
        <span
          className={`${classes.headerNavItem} ${classes.headerNavItemDivider}`}
        >
          —
        </span>
        <Link href="bottles" className={classes.headerNavItem}>
          all bottles
        </Link>
        <span
          className={`${classes.headerNavItem} ${classes.headerNavItemDivider}`}
        >
          —
        </span>
        <Link href="crates/random" className={classes.headerNavItem}>
          random bottle
        </Link>
      </div>
    </div>
  );
};

export default Header;
