import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import "./NotFound.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

const NotFound = () => {
  return (
    <>
        <Helmet>
              <title>Myartworld/NotFound</title>
              <meta name="description" content={`Myartworld.in We sell • Alphabet Keychain • Couple Name Keychain • Phone case • Resin jewellery items • Resin Bookmark.`} />
              <meta name="keywords" content={`Myartworld.in, Alphabet Keychain, Couple Name Keychain, Phone case, Resin jewellery items, Resin Bookmark, Resin Art, Home decor, Myartworld, Myartworlld`} /
              >
        </Helmet>
    <div className="PageNotFound">
      <ErrorIcon />

      <Typography>Page Not Found </Typography>
      <Link to="/">Home</Link>
    </div>
    </>
  );
};

export default NotFound;