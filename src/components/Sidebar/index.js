import React from "react";
import { useLocation } from "react-router-dom";
import PseudoTabs from "../SidebarView/PseudoTabs";
import SettingBtn from "../SidebarView/SettingBtn";
import SubscriptionsList from "../SidebarView/SubscriptionsList";
import { SidebarContainer } from "./Styles";

function Sidebar({ showSidebar }) {
  const isVideoPlayer = CheckLocation(useLocation());

  return (
    <SidebarContainer
      id="sidebar"
      showSidebar={showSidebar}
      isVideoPlayer={isVideoPlayer}
    >
      <nav>
        <PseudoTabs />
      </nav>
      <SubscriptionsList />
      <SettingBtn />
    </SidebarContainer>
  );
}

export default Sidebar;

function CheckLocation({ pathname }) {
  return pathname.includes("/videoPlayer");
}
