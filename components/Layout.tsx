import { Icon, Navbar, Page, Tabbar, TabbarLink } from "konsta/react";
import React, { FC, useState } from "react";
import { Bitcoin, GoLive, MyAccount, Reward, Withdraw } from "../icons";

import { useRouter } from "next/router";
import NavAvatar from "./NavAvatar";
import Link from "next/link";
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
        <Link href={"/my-account"}>
          <TabbarLink
            component="div"
            active={router.pathname == "/my-account"}
            label={"My account"}
            icon={
              <Icon
                material={<MyAccount className={` h-5 w-5 fill-primary `} />}
                ios={<MyAccount className={` h-5 w-5 fill-primary `} />}
              />
            }
          />
        </Link>
        <Link href={"/rewards"}>
          <TabbarLink
            component="div"
            active={router.pathname == "/rewards"}
            label={"Rewards"}
            icon={
              <Icon
                material={<Reward className="h-5 w-5 fill-primary " />}
                ios={<Reward className="h-5 w-5 fill-primary " />}
              />
            }
          />
        </Link>
        <Link href={"/withdraws"}>
          <TabbarLink
            component="div"
            active={router.pathname == "/withdraws"}
            label={"Withdraws"}
            icon={
              <Icon
                material={<Withdraw className="h-5 w-5 fill-primary " />}
                ios={<Withdraw className="h-5 w-5 fill-primary " />}
              />
            }
          />
        </Link>
        <Link href={"/go-live"}>
          <TabbarLink
            component="div"
            active={router.pathname == "/go-live" || router.pathname == "/game"}
            label={"Go Live"}
            icon={
              <Icon
                material={<GoLive className="h-5 w-5 fill-primary " />}
                ios={<GoLive className="h-5 w-5 fill-primary " />}
              />
            }
          />
        </Link>

        <Link href={"/bitcoins"}>
          <TabbarLink
            component="div"
            active={router.pathname == "/bitcoins"}
            label={"Bitcoins"}
            icon={
              <Icon
                material={<Bitcoin className="h-5 w-5 fill-primary " />}
                ios={<Bitcoin className="h-5 w-5 fill-primary " />}
              />
            }
          />
        </Link>
      </Tabbar>
    </Page>
  );
};

export default Layout;
