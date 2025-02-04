import React from "react";
import { teamMembers } from "../Data/data";
export default function OurTeam() {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl py-12">
      <div className="">
        <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Our Team
        </h3>
        <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
          Meet the talented people behind our success
        </p>
      </div>

      <div className="grid lg:grid-cols-3 lg:gap-4 mt-4 lg:mt-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="lg:flex lg:items-center lg:justify-between border p-4 rounded mt-4 lg:mt-0"
          >
            <div className="flex-1 min-w-0 mt-5 lg:mt-0">
              <a href="#">
                <div className="flex">
                  <div>
                    <div className="flex lg:mt-0 lg:ml-0">
                      <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-400 mt-1">
                        <img
                          className="rounded-full"
                          src={member.image}
                          alt={member.name}
                        />
                      </span>
                    </div>
                  </div>

                  <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-500">
                      {member.name}
                    </h2>
                    <div className="text-gray-400 text-sm">
                      {member.description}
                    </div>
                    <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
                      <div className="mt-2 flex items-center leading-5 text-gray-400 sm:mr-6 text-sm">
                        <svg
                          className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          ></path>
                          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                        </svg>
                        {member.projects} projects
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
