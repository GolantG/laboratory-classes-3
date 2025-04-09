const path = require("path");
const express = require("express");
const router = express.Router();
const { LOGOUT_LINKS } = require(`../constants/navigation`);

router.get("/", (_request, response) => {
  const menuLinks = LOGOUT_LINKS;
  const activeLinkPath = `/`;
  const headTitle = "Shop - Logout";

  response.render("logout", {headTitle, menuLinks, activeLinkPath});
});

module.exports = router;
