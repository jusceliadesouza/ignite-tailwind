import { LuLogOut } from "react-icons/lu";

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/jusceliadesouza.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Juscelia de Souza
        </span>
        <span className="truncate text-sm text-zinc-500">
          jusceliadesousa@gmail.com.br
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LuLogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}