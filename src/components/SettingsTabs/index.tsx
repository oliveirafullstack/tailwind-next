"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { TabItem } from "./Tabitem";
import { useState } from "react";

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState("tab1");
  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="border-b border-zinc-200 flex gap-4 items-center mt-6 w-full">
        <TabItem
          value="tab1"
          title="My details"
          isSelected={currentTab === "tab1"}
        />
        <TabItem
          value="tab2"
          title="Profile"
          isSelected={currentTab === "tab2"}
        />
        <TabItem
          value="tab3"
          title="Password"
          isSelected={currentTab === "tab3"}
        />
        <TabItem value="tab4" title="Team" isSelected={currentTab === "tab4"} />
        <TabItem value="tab5" title="Plan" isSelected={currentTab === "tab5"} />
        <TabItem
          value="tab6"
          title="Billing"
          isSelected={currentTab === "tab6"}
        />
        <TabItem
          value="tab7"
          title="Notifications"
          isSelected={currentTab === "tab7"}
        />
        <TabItem
          value="tab8"
          title="Integrations"
          isSelected={currentTab === "tab8"}
        />
        <TabItem value="tab9" title="API" isSelected={currentTab === "tab9"} />
      </Tabs.List>
    </Tabs.Root>
  );
}
