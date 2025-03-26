//PARA EVITAR A CRIAÇÃO DE VÁRIOS TYPE QUE TIPAM A MESMA COISA TEM O DTO CHAMADAS PARA TIPAR A INTERFACE QUE TRABALHE COM OS DADOS TIPADOS ABAIXO

export type TPchamadas = {
  id: string;
  name: string;
  status: string;
  whoAnswered: string;
  sector: string;
  level: string;
}[];
