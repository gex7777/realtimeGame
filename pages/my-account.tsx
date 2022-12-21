import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import NavAvatar from "../components/NavAvatar";
import {
  useSupabaseClient,
  useUser,
  useSession,
} from "@supabase/auth-helpers-react";
import { FiEdit } from "react-icons/fi";
type Profiles = Database["public"]["Tables"]["profiles"]["Row"];
import LoginOrSignUp from "./../components/LoginorSignup";
import Avatar from "../components/Avatar";
import { Database } from "../utils/database.types";
import Profile from "../components/Profile";

const Myaccount = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="h-screen w-full flex  flex-col">
      <div className="bg-opacity-100">
        <div className="tabs w-full flex-grow-0">
          <button
            className={`tab tab-lifted  ${
              activeTab === 1 && "tab-active"
            } tab-border-none tab-lg flex-1`}
            onClick={() => setActiveTab(1)}
          >
            Profile
          </button>
          <button
            className={`tab tab-lifted  ${
              activeTab === 2 && "tab-active"
            } tab-border-none tab-lg flex-1`}
            onClick={() => setActiveTab(2)}
          >
            Balance
          </button>
          <button
            className={`tab tab-lifted  ${
              activeTab === 3 && "tab-active"
            } tab-border-none tab-lg flex-1`}
            onClick={() => setActiveTab(3)}
          >
            history
          </button>
        </div>
      </div>

      <div className="bg-base-100  grid self-stretch w-full h-full flex-grow gap-3 rounded-xl rounded-tl-none p-6 shadow-xl">
        {!user ? (
          <>
            <LoginOrSignUp />
          </>
        ) : (
          <>
            {(() => {
              switch (activeTab) {
                case 1:
                  return <Profile user={user} />;
                case 2:
                  return (
                    <>
                      <div className=" stats  stats-vertical ">
                        <div className="stat">
                          <div className="stat-title">Account balance</div>
                          <div className="stat-value">$89,400</div>
                          <div className="stat-actions">
                            <button className="btn btn-xs btn-success">
                              Add funds
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                case 2:
                  return (
                    <>
                      <div className="overflow-x-auto">
                        <table className="table w-full">
                          <thead>
                            <tr>
                              <th></th>
                              <th>Match No</th>
                              <th>Date</th>
                              <th>Result</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>1</th>
                              <td>Cy Ganderton</td>
                              <td>Quality Control Specialist</td>
                              <td>Blue</td>
                            </tr>

                            <tr className="active">
                              <th>2</th>
                              <td>Hart Hagerty</td>
                              <td>Desktop Support Technician</td>
                              <td>Purple</td>
                            </tr>

                            <tr>
                              <th>3</th>
                              <td>Brice Swyre</td>
                              <td>Tax Accountant</td>
                              <td>Red</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </>
                  );
                default:
                  return <></>;
              }
            })()}
          </>
        )}
      </div>
    </div>
  );
};

export default Myaccount;
