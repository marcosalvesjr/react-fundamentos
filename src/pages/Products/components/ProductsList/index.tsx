import { Pencil, Trash } from "lucide-react";
import {
  officeProducts as products,
  type OfficeProduct,
} from "../../utils/productsList";
import { Button } from "@/components/ui/button";

export default function ProductsList() {
  return (
    <ul className="flex flex-col gap-5 w-full">
      {products.map((item: OfficeProduct) => (
        <li className="h-auto w-[90%] flex items-center justify-between px-2 py-1 border border-zinc-500 rounded-md ">
          <div className="flex flex-col items-center">
            <span>Produto: {item.name}</span>
          </div>
          <div className="flex gap-4">
            <Button variant={"default"}>
              <Trash width={22} height={22} color="red" />
            </Button>

            <Button>
              <Pencil width={22} height={22} color="green" />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
