import React from "react";
import { MapPin, UserCircle, ShoppingCart, Search, Menu } from "lucide-react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center shadow-md bg-zinc-900 p-2 py-2 text-white sm:px-10">
      <header className="flex gap-5 items-center">
        <Link to="/">
          <img
            className="w-[200px] rounded-md"
            src={Logo}
            alt="Commerce Logo"
          />
        </Link>

        <section className="hidden sm:flex gap-2">
          <button className="flex gap-2 items-center font-semibold bg-zinc-700 hover:bg-zinc-600 duration-200 ease-in-out px-2 py-1.5 rounded-sm">
            <Menu size={24} />
            Categories
          </button>
          <form className="flex relative">
            <input
              className="w-full sm:w-[300px] px-3 py-1.5 rounded-sm bg-zinc-700"
              type="text"
              placeholder="Search Store"
            />
            <button className="absolute right-0 p-1.5 rounded-r-sm bg-zinc-700 hover:bg-zinc-600 ease-in-out duration-200">
              <Search />
            </button>
          </form>
        </section>
      </header>

      <ul className="flex gap-3">
        <li className="cursor-pointer hover:scale-110 duration-200 ease-in-out">
          <MapPin size={28} />
        </li>
        <li className="cursor-pointer hover:scale-110 duration-200 ease-in-out">
          <UserCircle size={28} />
        </li>
        <li className="cursor-pointer hover:scale-110 duration-200 ease-in-out">
          <ShoppingCart size={28} />
        </li>
      </ul>
    </nav>
  );
}
