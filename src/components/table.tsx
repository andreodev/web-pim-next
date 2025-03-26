// src/components/TableDemo.tsx
"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { TPchamadas } from "@/hooks/DTO/DTOchamadas";

// Definindo as props que o componente TableDemo vai receber
interface TableDemoProps {
  data: TPchamadas;
}

const itemsPerPage = 6;

export function TableDemo({ data }: TableDemoProps) {
  const [currentPage, setCurrentPage] = useState(1);

  // Cálculo do número total de páginas
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Índices para fatiar os dados e exibir apenas a página atual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentInvoices = data.slice(startIndex, endIndex);

  return (
    <div className="overflow-x-auto w-full p-4">
      <Table className="w-full min-w-full table-auto border-collapse">
        {/* Cabeçalho da tabela */}
        <TableHeader>
          <TableRow className="bg-gray-100 text-[#B5B7C0]">
            <TableHead className="w-[200px] px-4 py-2 text-left text-[#B5B7C0]">
              Nome
            </TableHead>
            <TableHead className="px-4 py-2 text-left text-[#B5B7C0]">
              Setor
            </TableHead>
            <TableHead className="px-4 py-2 text-center text-[#B5B7C0]">
              Quem atendeu?
            </TableHead>
            <TableHead className="px-4 py-2 text-center text-[#B5B7C0]">
              Prioridade
            </TableHead>
            <TableHead className="px-4 py-2 text-left w-[120px] text-[#B5B7C0]">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>

        {/* Corpo da tabela */}
        <TableBody>
          {currentInvoices.map((statusTable) => (
            <TableRow key={statusTable.id} className="border-b text-[#292D32]">
              <TableCell className="px-4 py-2 font-medium ">
                {statusTable.name}
              </TableCell>
              <TableCell className="px-4 py-2 ">{statusTable.sector}</TableCell>
              <TableCell className="px-4 py-2 text-center">
                {statusTable.whoAnswered}
              </TableCell>
              {/* condição das cores da prioridade */}
              <TableCell
                className={
                  statusTable.level === "Alta"
                    ? "px-4 py-2 text-center text-red-500"
                    : statusTable.level === "Média"
                    ? "px-4 py-2 text-center text-yellow-500"
                    : "px-4 py-2 text-center text-green-500"
                }
              >
                {statusTable.level}
              </TableCell>
              {/* condição das cores do Status */}
              <TableCell className="px-4 py-2 w-[120px]">
                <p
                  className={`${
                    statusTable.status === "Atendido"
                      ? "bg-green-300 border-green-500 text-green-800"
                      : statusTable.status === "Não Atendido"
                      ? "bg-red-300 border-red-500 text-red-800"
                      : "bg-gray-300 border-gray-500 text-gray-800"
                  } w-full text-center font-medium border-2 rounded p-1`}
                >
                  {statusTable.status}
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell
              colSpan={4}
              className="text-center text-sm text-gray-500 py-2"
            >
              Total de {totalPages} páginas e {data.length} chamados.
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      {/* Navegação de páginas */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {/* Botões de navegação de página */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <Button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-md cursor-pointer transition-colors duration-200 ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              {page}
            </Button>
          )
        )}
      </div>
    </div>
  );
}
