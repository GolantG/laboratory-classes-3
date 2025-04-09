const path = require("path");
const express = require("express");
const router = express.Router();
const { MENU_LINKS } = require(`../constants/navigation`);

router.get("/", (_request, response) => {
    const menuLinks = MENU_LINKS;
    const activeLinkPath = `/`;
    const headTitle = "Shop - Home";

    response.render("home", {headTitle, menuLinks, activeLinkPath});
});

module.exports = router;
