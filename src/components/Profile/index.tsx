import { LogOut } from "lucide-react";
export function Profile() {
  return (
    <div className="item-center grid-cols-profile grid gap-3">
      <img
        className="h-10 w-10 rounded-full"
        src="https://github.com/oliveirafullstack.png"
        width={40}
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Emmanuel Oliveira
        </span>
        <span className="text-sm text-zinc-500">ofs.dev.br@gmail.com</span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  );
}
