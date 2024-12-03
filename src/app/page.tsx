import { SettingsTabs } from "@/components/SettingsTabs";

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
        <form className="flex flex-col mt-6 w-full" id="settings">
          form
        </form>
      </div>
    </>
  );
}
