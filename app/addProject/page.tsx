import type { FC } from 'react';

const AddProject: FC = () => {

    return(
<div className="container mx-auto">
  <div className="max-w-xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
    <div className="text-center">
      <h1 className="my-3 text-3xl font-semibold text-gray-700">Add a new Project</h1>
      <p className="text-gray-400">Fill up the form below to add a new project. <br/>
      All fields are required. <br /> <br />
      </p>
    </div>
    <div>
      <form action="" method="POST">
        <div className="mb-6">
        <div className="flex items-center w-1/4">
          <input
            type="checkbox"
            name="active"
            className="w-5 h-5 border border-gray-300 rounded-sm outline-none cursor-pointer"
          />
          <label className="ml-2 text-sm" htmlFor="active">Active</label>
        </div>
        <br />
          <label htmlFor="projectCode" className="block mb-2 text-sm text-gray-600"
            >Project Code</label
          >
          <input
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
            type="Date"
            name="startDate"
            required
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="endDate" className="text-sm text-gray-600">End Date</label>
          <input
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
            name="notes"
            placeholder="Add notes here"
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            required
          ></textarea>
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="w-full px-2 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

    );

};
export default AddProject;