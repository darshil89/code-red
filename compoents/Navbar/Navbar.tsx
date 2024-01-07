import React, { Fragment } from "react";

import MainHeader from "./main-header";
function NavBar(props: React.PropsWithChildren<{}>) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default NavBar;
