import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = ({ isAuth }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      {!isAuth ? (
        <Link to="/login">
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          ログイン
        </Link>
      ) : (
        <>
          <Link to="/logout">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            ログアウト
          </Link>
          <Link to="/createpost">
            <FontAwesomeIcon icon={faFilePen} />
            記事投稿
          </Link>
          <Flex align="center" mx={3}>
            <IconButton
              onClick={toggleColorMode}
              aria-label="Change color mode"
              icon={
                colorMode === "light" ? (
                  <MdDarkMode size="1.4rem" />
                ) : (
                  <MdLightMode size="1.3rem" />
                )
              }
            />
          </Flex>
        </>
      )}
    </nav>
  );
};

export default Navbar;
