'use client'
import type { Project } from '../../types/project';
import type { ChangeEventHandler, FC } from 'react';
import {useState} from 'react';
import { boolean } from 'yup';
//import { PrismaClient } from '@prisma/client';
//import Router from 'next/router';
//import handleSubmit from '../addProject/page';

//const prisma = new PrismaClient();

const AddProject: FC = () => {

  const [formData, setFormData] = useState({
    active: '',
    projectCode: '',
    projectName: '',
    startDate: '',
    endDate:'',
    notes:'',
  });

  const handleChange:ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("I am here at handlesubmit")
    alert(formData.projectCode)
    try {
      const response = await fetch('../addProject', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('User data submitted successfully!');
        // setFormData({ active: '',projectCode: '', projectName:'' }); // Clear the form after successful submission
      } else {
        alert('Failed to submit user data!');
      }
    } catch (error) {
      console.error('Error submitting user data:', error);
    }
  };

return(
<>
<h1>Test</h1>
<div className="container mx-auto">
  <div className="max-w-xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
    <div className="text-center">
      <h1 className="my-3 text-3xl font-semibold text-gray-700">Add a new Project</h1>
      <p className="text-gray-400">Fill up the form below to add a new project. <br/>
      All fields are required. <br /> <br />
      </p>
    </div>
    <div>
      <form onSubmit={handleSubmit} method="POST">
        <div className="mb-6">
        <div className="flex items-center w-1/4">
          <input
            onChange={handleChange}
            type="checkbox"
            name="active"
            className="w-5 h-5 border border-gray-300 rounded-sm outline-none cursor-pointer"
          />
          <label className="ml-2 text-sm" htmlFor="active">Active</label>
        </div>
        <br />
          <label htmlFor="projectCode" className="block mb-2 text-sm text-gray-600">Project Code</label>
          <input
            onChange={handleChange}
            type="text"
            name="projectCode"
            placeholder="Add a project code"
            required
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
  
        </div>
        <div className="mb-6">
          <label htmlFor="projectName" className="block mb-2 text-sm text-gray-600"
            >Project Name</label
          >
          <input
            onChange={handleChange}
            type="text"
            name="projectName"
            placeholder="Add a project"
            required
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="startDate" className="text-sm text-gray-600">Start Date</label>
          <input
            onChange={handleChange}
            type="Date"
            name="startDate"
            required
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="endDate" className="text-sm text-gray-600">End Date</label>
          <input
            onChange={handleChange}
            type="Date"
            name="endDate"
            required
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="notes" className="block mb-2 text-sm text-gray-600"
            >Notes</label
          >
          <textarea
            onChange={handleChange}
            name="notes"
            placeholder="Add notes here"
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          >
          </textarea>
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="w-full px-2 py-4 text-white bg-green-600 rounded-md  focus:bg-indigo-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
</>
    );

  };
export default AddProject;