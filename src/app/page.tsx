import { SettingsTabs } from "@/components/SettingsTabs";
import { Mail } from "lucide-react";
import { InputControl, InputPrefix, InputRoot } from "../components/Input";

export default function Home() {
  return (
    <>
      <h1 className="font-medium text-3xl text-zinc-900">Settings</h1>
      <SettingsTabs />
      <div className="flex flex-col mt-6">
        <div className="border-b border-zinc-200 flex items-center justify-between pb-5">
          <div className="space-y-1">
            <h2 className="font-medium text-lg text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo abd personal details here.{" "}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <button
              className="border border-zinc-300 font-semibold hover:bg-zinc-50 px-4 py-2 rounded-lg shadow-sm text-sm text-zinc-700"
              type="button"
            >
              Cancel
            </button>
            <button
              className="bg-violet-600 font-semibold hover:bg-violet-700 px-4 py-2 rounded-lg shadow-sm text-sm text-white"
              form="settings"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
        <form
          id="settings"
          className="divide-y divide=zinc-200 flex flex-col gap-5 mt-6 w-full"
        >
          <div className="gap-3 grid grid-cols-form">
            <label
              htmlFor="firstName"
              className="font-medium text-sm text-zinc-700"
            >
              Name
            </label>
            <div className="gap-6 grid grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" defaultValue="Emmmanuel" />
              </InputRoot>
              <InputRoot>
                <InputControl defaultValue="M. Oliveira" />
              </InputRoot>
            </div>
            <div />
          </div>
          <div className="gap-3 grid grid-cols-form pt-5">
            <label
              htmlFor="email"
              className="font-medium text-sm text-zinc-700"
            >
              Email Adress
            </label>

            <InputRoot>
              <InputPrefix>
                {" "}
                <Mail className="h5- text-zinc-500 w-5" />
              </InputPrefix>
              <InputControl
                id="email"
                type="email"
                defaultValue="ofs.dev.br@gmail.com"
              />
            </InputRoot>

            <div />
          </div>
          <div className="gap-3 grid grid-cols-form pt-5">
            <label
              htmlFor="email"
              className="font-medium text-sm text-zinc-700"
            >
              Your Photo
              <span className="block font-normal mt-0.5 text-sm text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <div />
          </div>

          <div className="gap-3 grid grid-cols-form pt-5">
            <label htmlFor="role" className="font-medium text-sm text-zinc-700">
              Role
            </label>
            <InputRoot>
              <InputControl id="role" type="text" defaultValue="CTO" />
            </InputRoot>
          </div>
          <div className="gap-3 grid grid-cols-form pt-5">
            <label
              htmlFor="contry"
              className="font-medium text-sm text-zinc-700"
            >
              Contry
            </label>
            <div></div>
          </div>
          <div className="gap-3 grid grid-cols-form pt-5">
            <label
              htmlFor="timezone"
              className="font-medium text-sm text-zinc-700"
            >
              Timezone
            </label>
            <div></div>
          </div>

          <div className="gap-3 grid grid-cols-form pt-5">
            <label htmlFor="bio" className="font-medium text-sm text-zinc-700">
              Bio
              <span className="block font-normal mt-0.5 text-sm text-zinc-500">
                Write a short introduction.
              </span>
            </label>

            <div />
          </div>
          <div className="gap-3 grid grid-cols-form pt-5">
            <label
              htmlFor="projects"
              className="font-medium text-sm text-zinc-700"
            >
              Portfolio projects
              <span className="block font-normal mt-0.5 text-sm text-zinc-500">
                Share a few snippets your work.
              </span>
            </label>

            <div />
          </div>
          <div className="flex gap-2 items-center justify-end pt-5">
            <button
              className="border border-zinc-300 font-semibold hover:bg-zinc-50 px-4 py-2 rounded-lg shadow-sm text-sm text-zinc-700"
              type="button"
            >
              Cancel
            </button>
            <button
              className="bg-violet-600 font-semibold hover:bg-violet-700 px-4 py-2 rounded-lg shadow-sm text-sm text-white"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
