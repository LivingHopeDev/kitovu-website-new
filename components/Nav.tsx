"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import NavModal from "./Modals/NavModal";
import iconClose from "../public/assets/icons/icon-close.svg";
import hamburger from "../public/assets/icons/icon-hamburger.svg";
import Link from "next/link";
import Image from "next/image";

export interface NavItem {
  id: number;
  name: string;
  link?: string;
  dropdown?: Array<{ name: string; link: string }>;
}

export const nav: NavItem[] = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About Us",
    link: "/about-us",
  },
  {
    id: 3,
    name: "Our Products",
    link: "/products",
  },
  {
    id: 4,
    name: "Resources",
    dropdown: [
      { name: "Gallery", link: "#" },
      { name: "Blog", link: "#" },
    ],
  },
];

const Nav = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalChange = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white flex justify-between items-center md:px-10 px- py-10 w-full h-10">
      <div>
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={140}
          height={140}
        />
      </div>
      <div className="hidden md:block ">
        <NavigationMenu>
          <NavigationMenuList className="flex justify-between items-center space-x-5 gap-4">
            {nav.map((item) => (
              <NavigationMenuItem key={item.id} className="nav_text">
                {item.dropdown ? (
                  <DropdownMenu>
                    {/* Add flex and items-center here */}
                    <DropdownMenuTrigger className="text-lg font-[510] border-none focus:outline-none focus:ring-0 flex items-center ">
                      {item.name}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[#D3D3D3] rounded-md p-2 shadow-md">
                      {item.dropdown.map((dropdownItem, index) => (
                        <DropdownMenuItem key={index}>
                          <Link
                            href={dropdownItem.link}
                            className="block px-4 py-2 text-[1rem] rounded-md nav_text transition-colors duration-500 ease-in-out"
                          >
                            {dropdownItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  item.link && (
                    <Link href={item.link}>
                      {/* Add flex and items-center here as well */}
                      <p className="text-lg font-[510] flex items-center nav_text hover:text-[var(--primary-color)]">
                        {item.name}
                      </p>
                    </Link>
                  )
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="hidden md:flex md:space-x-3 md:items-center">
        <button>
          <Link href="/contact">
            <p className="contact_btn">Contact Us</p>
          </Link>
        </button>
      </div>
      <div className="md:hidden">
        <Image
          src={showModal ? iconClose : hamburger}
          alt="menu-icon"
          onClick={handleModalChange}
          className="cursor-pointer"
        />
      </div>
      {showModal && <NavModal nav={nav} />}
    </nav>
  );
};

export default Nav;
