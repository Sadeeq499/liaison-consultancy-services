import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { images } from "../../assets/index";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/our-services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Us", path: "/contact-us" },
    // { name: "Notifications", path: "/notifications" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      isBlurred
      className="bg-background/70 dark:bg-background/80 backdrop-blur-md"
      maxWidth="full"
    >
      {/* Mobile menu toggle */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </NavbarContent>

      {/* Brand logo - shown in center for mobile, left for desktop */}
      <NavbarContent className="sm:hidden max-w-fit" justify="center">
        <NavbarBrand>
          <img src={images.logo} alt="Liaison Logo" />
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop navigation */}
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand
          onClick={() => navigate("/")}
          className="max-w-fit cursor-pointer"
        >
          <img src={images.logo} alt="Liaison Logo" className="h-14" />
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-green-700">
              Liaison Consultancy Services
            </span>
            <span className="text-xs text-gray-500">
              Excellence in Professional Consulting
            </span>
          </div>
        </NavbarBrand>
        <motion.div
          className="mx-20"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <span className="text-primary font-fancy bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent ">
            𝟸𝟿+ 𝒴𝑒𝒶𝓇𝓈 𝐸𝓍𝓅𝑒𝓇𝒾𝑒𝓃𝒸𝑒
          </span>
        </motion.div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 text-green-700"
        justify="center"
      >
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `hover:text-green-700 transition-colors ${
                  isActive ? "text-green-700 font-semibold" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Login button */}
      <NavbarContent justify="end" className="max-w-fit px-4">
        <NavbarItem>
          <Button
            onClick={() => navigate("/login")}
            variant="flat"
            className="font-semibold bg-green-700 text-white"
          >
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu className="sm:hidden">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `w-full text-lg py-2 transition-colors ${
                  isActive
                    ? "text-green-700 font-semibold"
                    : "hover:text-primary"
                }`
              }
            >
              {item.name}
            </NavLink>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <NavLink
            to="/login"
            className="w-full text-lg py-2 text-primary font-semibold"
          >
            Login
          </NavLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;
