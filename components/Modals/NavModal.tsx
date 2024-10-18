"use client";
import { NavItem } from "../Nav";
import Link from "next/link";
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

interface ModalProps {
  nav: NavItem[];
  setShowModal: (value: boolean) => void;
}

export default function NavModal({ nav, setShowModal }: ModalProps) {
  const handleLinkClick = () => {
    console.log("i am been clicked");
    setShowModal(false); // Close the modal when any link is clicked
  };
  return (
    <>
      {/* Background Overlay */}
      <div className="fixed top-[5rem] left-0 right-0 bottom-0 bg-black bg-opacity-50 z-[99]" />

      {/* Modal Content */}
      <div className="bg-white rounded-lg shadow-md p-6 fixed top-[12%] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[60%] z-[100]">
        <NavigationMenu>
          {/* Change layout to vertical */}
          <NavigationMenuList className="flex flex-col items-start space-y-4">
            {nav.map((item) => (
              <NavigationMenuItem key={item.id} className="nav_text">
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="text-lg font-medium border-none focus:outline-none focus:ring-0">
                      {item.name}
                    </DropdownMenuTrigger>

                    {/* Dropdown content styled to stay on top */}
                    <DropdownMenuContent className="bg-[#D3D3D3] rounded-md p-2 shadow-md z-[9999] relative">
                      {item.dropdown.map((dropdownItem, index) => (
                        <DropdownMenuItem key={index}>
                          <Link
                            href={dropdownItem.link}
                            className="block px-4 py-2 text-[1rem] nav_text transition-colors duration-500 ease-in-out"
                            onClick={handleLinkClick} // Close modal on link click
                          >
                            {dropdownItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  item.link && (
                    <Link
                      href={item.link}
                      onClick={handleLinkClick} // Close modal on link click
                    >
                      <p className="text-lg font-medium flex items-center nav_text hover:text-[var(--primary-color)]">
                        {item.name}
                      </p>
                    </Link>
                  )
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Contact Us Button */}
        <div className="mt-6">
          <button className="w-full">
            <Link href="/contact">
              <p className="contact_btn">Contact Us</p>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
