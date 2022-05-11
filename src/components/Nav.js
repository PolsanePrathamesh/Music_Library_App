import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  const [themeState, setThemeState] = useState(true);
  const openLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  };
  const enableDarkMode = () => {
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem("Theme", "dark");
      document.body.classList.add("dark-mode");
    } else {
      localStorage.setItem("Theme", "light");
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <>
      <nav>
        <h1>Chillify+</h1>
        <button
          className={libraryStatus ? "library-active" : ""}
          onClick={openLibraryHandler}
        >
          Library
          <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
        </button>
      </nav>

      <div className="center">
        <input onClick={enableDarkMode} type="checkbox" name="" id="" />
      </div>
    </>
  );
};

export default Nav;
