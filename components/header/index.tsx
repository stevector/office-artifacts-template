import Image from "next/image";
import Link from "next/link";
import React from "react";
import PantheonLogoBlack from "../../assets/logos/pantheon-fist-black.png";
import { Button } from "../ui/button";
import NavMenu, { NavItem, navItems } from "./nav";
import SearchBar from "./search-bar";

export default function Header() {
  return (
    <header>
      <div className="p-default max-w-screen-3xl relative mx-auto flex w-full items-center justify-between">
        <nav className="flex shrink-0 gap-8">
          <Link href="/">
            <Image
              src={PantheonLogoBlack}
              alt="Pantheon Logo"
              width={40}
              height={40}
            />
          </Link>
          <ul className="hidden items-center gap-8 lg:flex">
            {navItems.links.map((link) => (
              <NavItem key={link.href} href={link.href}>
                {link.label}
              </NavItem>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <SearchBar />

          <nav className="hidden gap-3 lg:flex">
            {navItems.buttons.map((button) => (
              <Link href={button.href} key={button.href}>
                <Button variant={button.variant} size="small">
                  {button.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 lg:hidden">
            <NavMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
