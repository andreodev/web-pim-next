"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Info, Phone } from "lucide-react";
import ToggleButton from "./ToggleButton";
import { useSidebar } from "@/context/sidebarContext";
import Image from "next/image";
import iconClosed from "@/assets/icon2.png";
import iconOpen from "@/assets/icon.png";

const Sidebar: React.FC = () => {
  const { isSidebarCollapsed } = useSidebar();
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "Sobre", path: "/about", icon: <Info size={20} /> },
    { name: "Contatos", path: "/contatos", icon: <Phone size={20} /> },
  ];

  return (
    <div
      className={`${
        isSidebarCollapsed ? "w-20" : "w-64"
      }   text-[#9197B3] p-4 transition-all duration-400 shadow-lg flex flex-col bg-white`}
    >
      <p className="text-sm">v.1.0.0</p>
      <div className="flex justify-center items-center  ">
  <Image alt="icon" src={isSidebarCollapsed ? iconOpen : iconClosed} width={100} height={100} />
</div>
      <ul>
        {menuItems.map((item) => (
          <li key={item.path} className="mb-3">
            <Link href={item.path}>
              <span
                className={`flex items-center p-2 rounded w-full cursor-pointer ${
                  isSidebarCollapsed ? "justify-center" : ""
                } ${
                  pathname === item.path
                    ? "bg-[#0C8CE9] text-white"
                    : "hover:bg-[#0c8de950]"
                }`}
              >
                {item.icon}
                <span
                  className={`ml-2 ${isSidebarCollapsed ? "hidden" : "block"}`}
                >
                  {item.name}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
