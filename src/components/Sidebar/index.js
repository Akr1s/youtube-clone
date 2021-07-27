import React from "react";
import PseudoTabs from "../SidebarView/PseudoTabs";
import SettingBtn from "../SidebarView/SettingBtn";
import SubscriptionsList from "../SidebarView/SubscriptionsList";
import { SidebarContainer } from "./Styles";

function Sidebar({ showSidebar }) {
  return (
    <SidebarContainer id="sidebar" showSidebar={showSidebar}>
      <nav>
        <PseudoTabs />
      </nav>
      <SubscriptionsList />
      <SettingBtn />
    </SidebarContainer>
  );
}

export default Sidebar;
