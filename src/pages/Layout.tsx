import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-20 ${
          isMenuOpen ? "bg-black" : "bg-transparent"
        }`}
      >
        <nav className="flex justify-between px-4 md:px-10 items-center h-20 text-lg">
          <div className="flex items-center">
            <NavLink
              to={"/"}
              className="text-2xl font-bold hover:text-gray-500 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              MOVIE VAULT
            </NavLink>
          </div>

          <div className="md:hidden">
            <button onClick={handleToggleMenu}>
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
            </button>
          </div>

          <ul className="hidden md:block md:flex md:justify-around md:w-full md:max-w-md font-medium text-white">
            <li className="hover:text-gray-300">
              <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li className="hover:text-gray-300">
              <NavLink to={"/movies"}>MOVIES</NavLink>
            </li>
            <li className="hover:text-gray-300">
              <NavLink to={"/watchlist"}>WATCHLIST</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobil meny */}

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black text-white z-10">
          <nav className="flex flex-col items-center justify-center h-full">
            <ul className="flex-col text-xl">
              <li className="p-4" onClick={handleToggleMenu}>
                <NavLink to={"/"}>HOME</NavLink>
              </li>

              <li className="p-4" onClick={handleToggleMenu}>
                <NavLink to={"/movies"}>MOVIES</NavLink>
              </li>

              <li className="p-4" onClick={handleToggleMenu}>
                <NavLink to={"/watchlist"}>WATCHLIST</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <main>
        <Outlet />
      </main>
    </>
  );
};
