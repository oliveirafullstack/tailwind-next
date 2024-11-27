import { ComponentProps } from "react";

type InputPrefixProps = ComponentProps<"div">;

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props}></div>;
}

type InputControlProps = ComponentProps<"input">;

export function InputControl(props: InputControlProps) {
  return (
    <input
      className="bg-transparen placehlder-zinc-600 flex-1 border-none p-0 text-zinc-900"
      {...props}
    />
  );
}
export type InputRootProps = ComponentProps<"div">;

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  );
}
