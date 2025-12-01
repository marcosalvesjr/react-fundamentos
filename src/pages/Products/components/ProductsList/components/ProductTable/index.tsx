import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { OfficeProduct } from "@/pages/Products/utils/productsList";

interface Props {
  products: OfficeProduct[];
}
export default function ProductsTable({ products }: Props) {
  return (
    <Table>
      <TableCaption>Tabela de produtos</TableCaption>
      <TableHeader className="bg-zinc-500">
        <TableRow>
          <TableHead>Produto</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead className="">Quantidade</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.type}</TableCell>
            <TableCell>{product.quantity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
