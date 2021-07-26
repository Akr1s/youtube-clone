import React from "react";
import Subscription from "../Subscription";
import subList from "../../../data/subList";
import { Subscriptions, SubscriptionsTitle } from "./Styles";

function SubscriptionsList() {
  return (
    <>
      <SubscriptionsTitle>Subscriptions</SubscriptionsTitle>
      <Subscriptions>
        {subList.map(({ fullName, image }, index) => (
          <li key={index}>
            <Subscription fullName={fullName} image={image} />
          </li>
        ))}
      </Subscriptions>
    </>
  );
}

export default SubscriptionsList;
