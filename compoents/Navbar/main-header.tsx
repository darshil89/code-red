"use client";
import React from "react";
import Link from "next/link";
import classes from "./mainheader.module.css";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const MainHeader = () => {
  const router = useRouter();

  const path = usePathname();

  const [isHomePage, setIsHomePage] = useState(path === "/");
  React.useEffect(() => {
    setIsHomePage(path === "/");
  }, [path]);
  return (
    <div className={isHomePage ? classes.bg : ""}>
      <div className={isHomePage ? "" : classes.bigcontainer}>
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
      </div>
    </div>
  );
};

export default MainHeader;
