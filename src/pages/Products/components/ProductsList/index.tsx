import { Pencil, Trash } from "lucide-react";
import {
  officeProducts as products,
  type OfficeProduct,
} from "../../utils/productsList";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { Input } from "@/components/ui/input";
import ProductsTable from "./components/ProductTable";

export default function ProductsList() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filteredList, setFilteredList] = useState<OfficeProduct[]>([]);

  function onCleanFilters() {
    setSearch("");
    setFilterType("");
  }

  useEffect(() => {
    let result = products;
    if (search.trim() !== "") {
      result = result.filter((r) =>
        r.name.toLowerCase().includes(search.toLowerCase().trim())
      );
    }

    if (filterType !== "") {
      result = result.filter((r) => r.type === filterType);
    }
    setFilteredList(result);
  }, [search, filterType]);

  // "material" | "eletronico" | "mobília" | "papelaria"
  return (
    <div className="flex flex-col gap-5">
      <Input
        value={search}
        placeholder="Digite o nome do produto"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Select onValueChange={setFilterType}>
        <SelectTrigger className="w-[280px] border border-white rounded-md p-2">
          <SelectValue placeholder="Selecione o tipo do produto" />
        </SelectTrigger>
        <SelectContent className="w-[280px] bg-zinc-900 rounded-md p-2">
          <SelectGroup>
            <SelectLabel>Tipos</SelectLabel>
            <SelectItem value="material">Material</SelectItem>
            <SelectItem value="eletronico">Eletronico</SelectItem>
            <SelectItem value="mobília">mobília</SelectItem>
            <SelectItem value="papelaria">Papelaria</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button onClick={() => onCleanFilters()}>Limpar filtros</Button>
      <ProductsTable products={filteredList} />
    </div>
  );
}
