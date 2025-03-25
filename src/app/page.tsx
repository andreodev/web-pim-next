import Sidebar from "@/components/sidebar";
import { TableDemo } from "@/components/table";
import {invoices} from "@/hooks/userFetch"

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 ml-20 md:ml-64 transition-all duration-300 relative">
        <h1>teste</h1>
        <div>
        </div>
        <div className="relative ml-auto w-3/4 bg-white p-6 rounded-xl ">
          <TableDemo invoices={invoices}/>
        </div>
      </div>
    </div>
  );
}
