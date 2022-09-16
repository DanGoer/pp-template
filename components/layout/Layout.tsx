import Navbar from "../navbar/NavBar";
import type { ReactElement } from "react";

function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
export default Layout;
