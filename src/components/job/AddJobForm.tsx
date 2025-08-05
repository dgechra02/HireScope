//@ts-nocheck
"use client";
import { addJob } from '@/app/action/addJobAction';
import { useCustomHook } from '@/contexts/AppContext';
import React, { useState } from 'react';

export default function AddJobForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [employmentType, setEmploymentType] = useState('');
  const [jobType, setJobType] = useState('');

  const {user} = useCustomHook();


  async function handleJobAdd(e: React.FormEvent) {
    e.preventDefault();
    
    // Here you would typically send the job data to your backend or state management
    const jobData = {
      title,
      description,
      location,
      salary : parseFloat(salary),
      employmentType,
      jobType,
      company_id : user.company.id // do this with backend for safety
    };
    // add these jobs using api - POST

    console.log('Job Added:', jobData);
    
    const res = await addJob(jobData);
    if (res.success) {
      console.log(res.message);
    } else {
      console.error(res.message);
    }

    // Reset form fields after submission
    setTitle('');
    setDescription('');
    setLocation('');
    setSalary(0);
    setEmploymentType('');
    setJobType('');
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 absolute top-0 left-0">
      <div className="bg-gray-800 rounded-lg p-8 w-full max-w-md">
        <h2 className="text-white text-xl font-medium mb-6 text-center">Add a new Job</h2>
        
        <form className="space-y-4" onSubmit={handleJobAdd}>
          {/* Job Title */}
          <label>
            <span className="block text-white text-sm mb-2">Job Title</span>
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
            />
          </label>

          {/* Job Description */}
          <label>
            <span className="block text-white text-sm mb-2">Job Description</span>
            <textarea
              name="jobDescription"
              placeholder="Job Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 resize-none"
            />
          </label>

          {/* Job Location and Job Salary */}
          <div className="grid grid-cols-2 gap-4">
            <label>
              <span className="block text-white text-sm mb-2">Job Location</span>
              <input
                type="text"
                name="jobLocation"
                placeholder="Job Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
              />
            </label>
            <label>
              <span className="block text-white text-sm mb-2">Job Salary</span>
              <input
                type="number"
                name="jobSalary"
                placeholder="Job Salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
              />
            </label>
          </div>

          {/* Employment Type */}
          <label>
            <span className="block text-white text-sm mb-2">Employment Type</span>
            <select
            type="select"
              name="employmentType"
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-gray-500"
            >
              <option value="">Select Job Type</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
              <option value="freelance">Freelance</option>
            </select>
          </label>

          {/* Job Type */}
          <label>
            <span className="block text-white text-sm mb-2">Job Type</span>
            <select
            type="select"
              name="jobType"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-gray-500"
            >
              <option value="">Select Job Category</option>
              <option value="on-site">On site</option>
              <option value="remote">Remote</option>
            </select>
          </label>

          {/* Submit Button */}
          <button
            type='submit'
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Add Job
          </button>
        </form>
      </div>
    </div>
  );
}