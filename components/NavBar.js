import { React, useContext } from "react";
import { mainContext } from "../context/ThemeProvider";

export default function NavBar() {
  const { theme } = useContext(mainContext);
  return (
    <div className="padT4 padB4">
      <div className="container mobile-container">
        <div className="d-flex justify-content-between">
          <div>
            <img alt="SVCC Home Page" src="/images/SVCCLogo.png" />
          </div>
          <div className={theme === "light" ? "" : "text-info"}>
            <h4 className="header-title">Silicon Valley Code Camp</h4>
          </div>
          <div className={theme === "light" ? "" : "text-info"}>
            <span>Hello Mr. Smith</span>
            <span>
              {"\t"}
              <a href="#">sign-out</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
