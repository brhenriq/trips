"use client";

import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { status } = useSession();

  const handleLoginClick = () => {
    signIn();
  };

  const handleMenuClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const handleLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  };

  return (
    <div className="container mx-auto p-5 py-0 h-20 flex justify-between items-center ">
      <div className="relative h-[32px] w-[182px]">
        <Image src="/logo.svg" alt="trips logo" fill />
      </div>

      {status === "unauthenticated" && (
        <button
          className="text-primary text-sm font-semibold"
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}

      {status === "authenticated" && (
        <div className="flex items-center gap-3 border-grayLighter border border-solid p-2 relative rounded-3xl">
          <AiOutlineMenu
            size={16}
            onClick={handleMenuClick}
            className="cursor-pointer"
          />

          <Image
            height={24}
            width={24}
            src="/userAvatar.svg"
            alt={"avatar"}
            className="rounded-full"
          />

          {menuIsOpen && (
            <div className="absolute left-0 top-12 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
              <button
                className="text-primary text-sm font-semibold"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
