import { LogOut } from "lucide-react";
import Image from "next/image";

export function Profile() {
  return (
    <div className="flex gap-3 items-center">
      <Image
        className="h-10 rounded-full w-10"
        src="https://github.com/oliveirafullstack.png"
        width={40}
        height={40}
        alt="minha imagem"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="font-semibold text-sm text-zinc-700">
          Emmanuel Oliveira
        </span>
        <span className="text-sm text-zinc-500 truncate">
          ofs.dev.br@gmail.com
        </span>
      </div>
      <button type="button" className="hover:bg-zinc-50 ml-auto p-2 rounded-md">
        <LogOut className="h-5 text-zinc-500 w-5" />
      </button>
    </div>
  );
}
