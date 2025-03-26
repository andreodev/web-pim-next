import { TPchamadas } from "@/hooks/DTO/DTOchamadas";

interface CardsPropsTP {
  data: TPchamadas
}
//manuntenção futuramente pra aprender a lidar com os dados que vem da api
export default function CardsProps({ data } : CardsPropsTP) {

  const totalChamadas = data.length;
  const chamadasAtendidas = data.filter((chamada) => chamada.status === "Atendido").length;
  const prioridades = data.filter((chamada) => chamada.level === "Alta").length;

  return (
    <div className="flex w-11/12 my-[30px] p-6 rounded-xl shadow-md justify-between items-center">
      <div className="flex-1 text-center pr-4 border-r border-white">
        <h1>Total de chamadas: </h1>
        {totalChamadas}
      </div>
      <div className="flex-1 text-center  px-4 border-r border-white">
        <h1>Chamadas Atendidas</h1>
        {chamadasAtendidas}
      </div>
      <div className="flex-1 text-center  pl-4">
        <h1>Alta Prioridade: </h1>
        {prioridades}
      </div>
    </div>
  );
}
