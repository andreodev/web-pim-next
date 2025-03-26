import CardsProps from "@/components/cardsProps";
import Sidebar from "@/components/sidebar";
import { TableDemo } from "@/components/table";
import ToggleButton from "@/components/ToggleButton";
import { Input } from "@/components/ui/input";
import { data } from "@/hooks/userSetup";

export default function Home() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <ToggleButton />

        <div className="relative w-11/12 ml-auto my-[30px] ">
          <div className="ml-auto relative">
            <h1 className="font-medium text-2xl">Hello Andreo 👋🏼</h1>
          </div>
          <CardsProps data={data} />
          <div className="relative w-11/12  bg-white p-6 rounded-xl shadow-md">
          {/* Título e input de pesquisa */}
            <div className="flex justify-between items-center">
              <div>
                <h1 className="font-black text-2xl">Todos os pedidos</h1>
                <h1 className="text-green-500">Pedidos Ativos</h1>
              </div>

              <Input
                type="text"
                placeholder="Search"
                className="border w-1/8 bg-[#F9FBFF] border-[#E7E7E7] rounded-lg p-2 outline-none"
              />
              {/* input de seleção de filtro  */}
              <div>
                {" "}
                <h1>teste</h1>
              </div>
            </div>

            {/* Tabela Props*/}
            <TableDemo data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
