import { Avatar } from "flowbite-react";
import React from "react";
import Layout from "../components/Layout";
import NavAvatar from "../components/NavAvatar";
import { useSession } from "@supabase/auth-helpers-react";

const Myaccount = () => {
  const session = useSession();
  return (
    <Layout>
      <div className="h-full w-full">
        <div className="bg-opacity-100">
          <div className="tabs w-full flex-grow-0">
            <button className="tab tab-lifted tab-border-none tab-lg flex-1">
              Profile
            </button>
            <button className="tab tab-lifted  tab-active tab-border-none tab-lg flex-1">
              Balance
            </button>
            <button className="tab tab-lifted tab-border-none tab-lg flex-1">
              history
            </button>
          </div>
        </div>

        <div className="bg-base-100 grid w-full flex-grow gap-3 rounded-xl rounded-tl-none p-6 shadow-xl">
          <div className="flex items-center space-x-2">
            <div>
              <NavAvatar />
            </div>
            <div>
              <div className="text-lg font-extrabold">Beatrice Thurman</div>{" "}
              <div className="text-base-content/70 text-sm">#tag</div>
            </div>
          </div>
          <div>
            <div className="divider text-base-content/60 m-0">Reports</div>
          </div>
          <div className="text-lg font-extrabold">Chalanges Complete</div>{" "}
          <div className="grid gap-3">
            <div>
              <div className="flex items-center p-1">
                <span className="text-base-content/70 w-48 text-xs">
                  Search Engines
                </span>{" "}
                <progress
                  max="100"
                  value="50"
                  className="progress progress-success"
                ></progress>
              </div>{" "}
              <div className="flex items-center p-1">
                <span className="text-base-content/70 w-48 text-xs">
                  Direct
                </span>{" "}
                <progress
                  max="100"
                  value="30"
                  className="progress progress-primary"
                ></progress>
              </div>
              <div className="flex items-center p-1">
                <span className="text-base-content/70 w-48 text-xs">
                  Social Media
                </span>{" "}
                <progress
                  max="100"
                  value="70"
                  className="progress progress-secondary"
                ></progress>
              </div>{" "}
              <div className="flex items-center p-1">
                <span className="text-base-content/70 w-48 text-xs">
                  Emails
                </span>{" "}
                <progress
                  max="100"
                  value="90"
                  className="progress progress-accent"
                ></progress>
              </div>
              <div className="flex items-center p-1">
                <span className="text-base-content/70 w-48 text-xs">
                  Ad campaigns
                </span>{" "}
                <progress
                  max="100"
                  value="65"
                  className="progress progress-warning"
                ></progress>
              </div>
            </div>
          </div>
          <div className="btn"> Claim rewards</div>
        </div>
      </div>
    </Layout>
  );
};

export default Myaccount;
