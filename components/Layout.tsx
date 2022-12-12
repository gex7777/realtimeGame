import { Icon, Navbar, Page, Tabbar, TabbarLink } from "konsta/react";
import React, { FC, useState } from "react";
import { Bitcoin, GoLive, MyAccount, Reward, Withdraw } from "../icons";

import { useRouter } from "next/router";
import NavAvatar from "./NavAvatar";
const Layout: FC<{ children: React.ReactNode }> = (props) => {
  const router = useRouter();
  return (
    <Page>
      <Navbar
        title={`${router.pathname.replace("/", "").replace("-", " ")}`}
        right={<NavAvatar></NavAvatar>}
      ></Navbar>
      <div className="flex justify-items-stretch mb-20">{props.children}</div>
      <Tabbar icons={true} className="left-0 bottom-0 h-20 fixed">
        <TabbarLink
          active={router.pathname == "/my-account"}
          onClick={() => {
            router.push("/my-account");
          }}
          label={"My account"}
          icon={
            <Icon
              material={<MyAccount className={` h-5 w-5 fill-primary `} />}
              ios={<MyAccount className={` h-5 w-5 fill-primary `} />}
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
            <Icon
              material={<Reward className="h-5 w-5 fill-primary " />}
              ios={<Reward className="h-5 w-5 fill-primary " />}
            />
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
              material={<Withdraw className="h-5 w-5 fill-primary " />}
              ios={<Withdraw className="h-5 w-5 fill-primary " />}
            />
          }
        />
        <TabbarLink
          active={router.pathname == "/go-live" || router.pathname == "/game"}
          onClick={() => {
            router.push("/go-live");
          }}
          label={"Go Live"}
          icon={
            <Icon
              material={<GoLive className="h-5 w-5 fill-primary " />}
              ios={<GoLive className="h-5 w-5 fill-primary " />}
            />
          }
        />

        <TabbarLink
          active={router.pathname == "/bitcoins"}
          onClick={() => {
            router.push("/bitcoins");
          }}
          label={"Bitcoins"}
          icon={
            <Icon
              material={<Bitcoin className="h-5 w-5 fill-primary " />}
              ios={<Bitcoin className="h-5 w-5 fill-primary " />}
            />
          }
        />
      </Tabbar>
    </Page>
  );
};

export default Layout;
