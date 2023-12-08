/*
=========================================================
* dhiraj bhor portfolio 1
=========================================================

* Product Page: https://www.dhiraj.com
* Copyright 2023 dhiraj bhor

Coded by dhirajbhor11

 =========================================================

* .
*/

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages";

export default [
  {
    image: `${imagesPrefix}/about-us.jpg`,
    name: "About Us Page",
    route: "/pages/landing-pages/about-us",
  },
  {
    image: `${imagesPrefix}/contact.jpg`,
    name: "Contact Us Page",
    route: "/pages/landing-pages/contact-us",
  },
  {
    image:
      "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/account/signin-basic.jpg",
    name: "Sign In Page",
    route: "/pages/authentication/sign-in",
  },
  {
    image: `${imagesPrefix}/author.jpg`,
    name: "Author Page",
    route: "/pages/landing-pages/author",
  },
];
