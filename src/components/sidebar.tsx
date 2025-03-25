"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const pathname = usePathname(); // Obtém a URL atual

  // Carregar estado do localStorage ao montar
  useEffect(() => {
    const savedState = localStorage.getItem("sidebarCollapsed");
    if (savedState !== null) {
      setIsSidebarCollapsed(savedState === "true");
    }
  }, []);

  // Salvar estado no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", String(isSidebarCollapsed));
  }, [isSidebarCollapsed]);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const menuItems = [
    { name: "Página Inicial", path: "/" },
    { name: "Sobre", path: "/about" },
    { name: "Contatos", path: "/contatos" },
  ];

  return (
    <div
      className={`${
        isSidebarCollapsed ? "w-20" : "w-64"
      } h-screen bg-gray-900 text-[#9197B3] p-5 transition-all duration-300 fixed left-0 top-0`}
    >
      <button
        onClick={toggleSidebar}
        className={`${
          isSidebarCollapsed ? "w-full text-center" : "text-left"
        } text-white mb-5 p-2 bg-gray-700 rounded`}
      >
        {isSidebarCollapsed ? "A" : "Fechar"}
      </button>
      <h2 className={`text-2xl font-bold mb-5 ${isSidebarCollapsed ? "text-center" : ""}`}>
        {isSidebarCollapsed ? "T" : "TechHelp DMW"}
      </h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.path} className="mb-3">
            <Link href={item.path}>
              <span
                className={`p-2 rounded block w-full cursor-pointer ${
                  isSidebarCollapsed ? "text-center" : ""
                } ${
                  pathname === item.path ? "bg-[#5932EA] text-white" : "hover:bg-gray-700"
                }`}
              >
                {isSidebarCollapsed ? item.name[0] : item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
