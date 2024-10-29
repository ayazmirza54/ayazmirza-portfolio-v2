import React from "react";
import { Calendar, MapPin } from "lucide-react";

const WorkExp = () => {
  return (
    <div id="work-experience" className="portfolio-container">
      <div className="text-4xl font-extrabold capitalize mb-8">
        Work Experience
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Job Card */}
        <div className="relative p-[2px] rounded-lg bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300">
          <div className="bg-black rounded-lg p-6 h-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Senior Project Engineer
              </h3>
              <div className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full dark:bg-green-900 dark:text-green-300">
                Current
              </div>
            </div>

            <h4 className="text-xl mb-2 text-gray-700 dark:text-gray-300">
              Wipro Limited
            </h4>

            <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>Nov 2019 - Present</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>Greater Noida, India</span>
              </div>
            </div>

            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>-   I have worked on Ab Initio ETL tool as a tool to process client
              side information and provide valuable insights regarding the data</p>
              <p>- My other responsibilities involved interacting with cleint and
              provide insights on data.</p>
              <p>- Extensive experience in designing and
              parameterizing graphs, scheduling jobs through Control Centre, and
              proficiently scripting Unix shell commands for ETL optimization.</p>
                <p>- Designing Ab Initio graphs to transform, cleanse, and enrich data
              based on business requirements.</p>
              <p>- Monitoring ETL job execution and
              addressing any issues promptly to minimize data processing delays.</p>
              <p>- Created shell scripts to automate monitoring of critical server
              metrics. Automated monitoring of continuous jobs through shell
              scripts. Leveraged tools like Grafana, Control Center, Queryit,
              and SQLExplorer for operational efficiency and streamlined
              processes. </p>
              <p>- Appointed as L2, providing guidance and technical
              assistance to L1 teammates within the operations team</p>
            </div>
          </div>
        </div>

        {/* Second Job Card */}
        <div className="relative p-[2px] rounded-lg bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300">
          <div className="bg-black rounded-lg p-6 h-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Frontend Developer
              </h3>
              <div className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Completed
              </div>
            </div>

            <h4 className="text-xl mb-2 text-gray-700 dark:text-gray-300">
              Cosmo Infosolutions Pvt Ltd
            </h4>

            <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>June 2019 - Oct 2019</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>Lucknow, India</span>
              </div>
            </div>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>- Front-end developer skilled in HTML, CSS, JavaScript, and ReactJS for building reliable, user-friendly websites and applications.</p>
              <p>- Experienced in designing landing pages that capture attention and encourage users to explore further.</p>
              <p>- Focuses on layouts that are visually appealing, easy to navigate, and optimized for a smooth user experience.</p>
              <p>- Designs responsive pages that look and work well on both desktop and mobile devices.</p>
              <p>- Pays close attention to layout, color, and typography to create a balanced and polished appearance.</p>
              <p>- Aims to create a seamless and enjoyable experience for every user.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExp;
