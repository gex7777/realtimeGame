import React, { useState } from "react";

import NavAvatar from "../components/NavAvatar";
import { useSession } from "@supabase/auth-helpers-react";
import { FiEdit } from "react-icons/fi";
import Login from "../components/Login";
const Myaccount = () => {
  const session = useSession();

  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="h-full w-full flex  flex-col">
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

      <div className="bg-base-100 grid self-stretch w-full h-full flex-grow gap-3 rounded-xl rounded-tl-none p-6 shadow-xl">
        {!session ? (
          <>
            <Login /
          </>
        ) : (
          <>
            {(() => {
              switch (activeTab) {
                case 1:
                  return (
                    <>
                      <div className="flex items-center space-x-2">
                        <div>
                          <NavAvatar />
                        </div>
                        <div className="flex justify-between w-full">
                          <div>
                            <div className="text-lg font-extrabold">
                              Beatrice Thurman
                            </div>
                            <div className="text-base-content/70 text-sm">
                              #tag
                            </div>
                          </div>
                          <div className="btn btn btn-xs btn-primary">
                            <FiEdit />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="divider text-base-content/60 m-0">
                          Reports
                        </div>
                      </div>
                      <div className="text-lg font-extrabold">Chalanges</div>{" "}
                      <div className="grid gap-3">
                        <div>
                          <div className="flex items-center p-1">
                            <span className="text-base-content/70 w-48 text-xs">
                              Play 10 games
                            </span>{" "}
                            <progress
                              max="100"
                              value="50"
                              className="progress progress-success"
                            ></progress>
                          </div>{" "}
                          <div className="flex items-center p-1">
                            <span className="text-base-content/70 w-48 text-xs">
                              Invite 5 users
                            </span>{" "}
                            <progress
                              max="100"
                              value="30"
                              className="progress progress-primary"
                            ></progress>
                          </div>
                          <div className="flex items-center p-1">
                            <span className="text-base-content/70 w-48 text-xs">
                              Add 100$ total
                            </span>{" "}
                            <progress
                              max="100"
                              value="70"
                              className="progress progress-secondary"
                            ></progress>
                          </div>{" "}
                        </div>
                      </div>
                      <div className="btn"> Claim rewards</div>
                    </>
                  );
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
