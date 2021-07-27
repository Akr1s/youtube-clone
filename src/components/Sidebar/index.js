import React from "react";
import PseudoTabs from "../SidebarView/PseudoTabs";
import SettingBtn from "../SidebarView/SettingBtn";
import SubscriptionsList from "../SidebarView/SubscriptionsList";
import { SidebarContainer } from "./Styles";

function Sidebar() {
  return (
    <SidebarContainer id="sidebar">
      <nav>
        <PseudoTabs />
      </nav>
      <SubscriptionsList />
      <SettingBtn />
    </SidebarContainer>
  );
}

export default Sidebar;
