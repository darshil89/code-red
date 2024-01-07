import React from "react";
import Link from "next/link";
import classes from "./mainheader.module.css";

const MainHeader = () => {
  return (
    <div className={classes.container}>
      <div className={classes.c1}>
        <Link href="/" className={classes.heading}>
          uDecide
        </Link>
      </div>
      <div className={classes.c2}>
        <Link href="/newsletter" className={classes.item}>
          Newsletter
        </Link>
        <Link href="/" className={`${classes.item} ${classes.btn}`}>
          Sign In
        </Link>
        <Link href="/" className={`${classes.item} ${classes.btn}`}>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default MainHeader;
