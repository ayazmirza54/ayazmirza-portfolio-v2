import React from 'react'
import { Calendar, MapPin } from "lucide-react";

const WorkExp = () => {
  return (
    <div id="work-experience" className="portfolio-container">
      <div className="text-4xl font-extrabold capitalize mb-8">Work Experience</div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Job Card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 p-6">
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
            <p>• Developed and maintained enterprise-level applications</p>
            <p>• Collaborated with cross-functional teams to deliver solutions</p>
            <p>• Implemented new features and optimized existing codebase</p>
          </div>
        </div>

        {/* Second Job Card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Frontend Developer Intern
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
            <p>• Assisted in developing and testing new features</p>
            <p>• Learned and implemented industry best practices</p>
            <p>• Participated in code reviews and team meetings</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkExp
