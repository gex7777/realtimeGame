import { Icon, Page, Tabbar, TabbarLink } from "konsta/react";
import React, { FC, useState } from "react";
import { Bitcoin, GoLive, MyAccount, Reward, Withdraw } from "../icons";

import { useRouter } from "next/router";
const Layout: FC<{ children: React.ReactNode }> = (props) => {
  const router = useRouter();
  return (
    <Page>
      {props.children}
      <Tabbar icons={true} className="left-0 bottom-0 fixed">
        <TabbarLink
          active={router.pathname == "/myaccount"}
          onClick={() => {
            router.push("/myaccount");
          }}
          label={"My account"}
          icon={
            <Icon
              material={<MyAccount className={` h-5 w-5 fill-orange-600 `} />}
            />
          }
        />
        <TabbarLink
          active={router.pathname == "/rewards"}
          onClick={() => {
            router.push("/rewards");
          }}
          label={"Rewards"}
          icon={
            <Icon material={<Reward className="h-5 w-5 fill-orange-600 " />} />
          }
        />
        <TabbarLink
          active={router.pathname == "/withdraws"}
          onClick={() => {
            router.push("/withdraws");
          }}
          label={"Withdraws"}
          icon={
            <Icon
              material={<Withdraw className="h-5 w-5 fill-orange-600 " />}
            />
          }
        />
        <TabbarLink
          active={router.pathname == "/golive"}
          onClick={() => {
            router.push("/golive");
          }}
          label={"Go Live"}
          icon={
            <Icon material={<GoLive className="h-5 w-5 fill-orange-600 " />} />
          }
        />

        <TabbarLink
          active={router.pathname == "/bitcoins"}
          onClick={() => {
            router.push("/bitcoins");
          }}
          label={"Bitcoins"}
          icon={
            <Icon material={<Bitcoin className="h-5 w-5 fill-orange-600 " />} />
          }
        />
      </Tabbar>
    </Page>
  );
};

export default Layout;
