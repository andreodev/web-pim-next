"use client";

import React, { useEffect } from "react";
import { PanelsTopLeft } from "lucide-react";
import { useSidebar } from "@/context/sidebarContext";
import { Button } from "./ui/button";

const ToggleButton: React.FC = () => {
  const { toggleSidebar } = useSidebar();

  //usar a tecla ] para abrir e fechar a sidebar(componente não responsivel)

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "]") {
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [toggleSidebar]);

  return (
    <Button
      onClick={toggleSidebar}
      className="bg-gray-700 hover:bg-gray-600 text-white w-10 flex items-center justify-center transition-all duration-200 shadow-md cursor-pointer"
    >
      <PanelsTopLeft size={20} />
    </Button>
  );
};

export default ToggleButton;
