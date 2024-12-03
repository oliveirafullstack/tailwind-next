"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";

export interface TabItemProps {
  value: string;
  title: string;
  isSelected?: boolean;
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="data-[state=active]:text-violet-700 font-medium hover:text-violet-500 pb-4 px-1 relative text-sm text-zinc-500"
    >
      <span className="">{title}</span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="-bottom-px absolute bg-violet-700 h-0.5 left-0 right-0"
        ></motion.div>
      )}
    </Tabs.Trigger>
  );
}
