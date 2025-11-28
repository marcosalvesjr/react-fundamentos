import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,

} from "./ui/sidebar";

export default function AppSidebar() {
  const myItems = [
    { title: "Home", url: "/" },
    { title: "Products", url: "/products" },
    { title: "About", url: "/about" },
    { title: "Posts", url: "/posts" },
  ];
  return (
    <Sidebar >
      <SidebarContent className="bg-zinc-950 text-white">
        <SidebarMenu>
          {myItems.map((project) => (
            <SidebarMenuItem key={project.title}>
              <SidebarMenuButton asChild>
                <a href={project.url}>
                  <span>{project.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
