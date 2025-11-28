import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[80%] flex flex-col gap-5">
        <div>
          <span>E-mail</span>
          <Input placeholder="e-mail" />
        </div>
        <div>
          <span>Senha</span>
          <Input placeholder="senha" />
        </div>
        <Button>Entrar</Button>
        <Button variant={"secondary"}>Esqueci a senha</Button>
      </div>
    </div>
  );
}
