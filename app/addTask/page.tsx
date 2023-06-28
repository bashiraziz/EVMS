import type { FC } from 'react';

const AddTask: FC = () => {

    return(
<div className="container mx-auto">
  <div className="max-w-xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
    <div className="text-center">
      <h1 className="my-3 text-3xl font-semibold text-gray-700">Add a new Task</h1>
      <p className="text-gray-400">Fill up the form below to add a new task. <br/>
      All fields are required. <br /> <br />
      </p>
    </div>
    <div>
      <form action="" method="POST">
      <div className="w-12/12">
  <label className="inline-block text-sm text-gray-600" htmlFor="color">Select a Project</label>
  <div className="relative flex w-full">
    <select className="block w-full py-2.5 pl-4 pr-8 bg-white border border-gray-300 rounded-sm appearance-none cursor-pointer focus:outline-none hover:border-gray-400">
      {/* project code + project name should be an existing active project */}
      <option >Select... list of existing active projects</option>
      <option value=" ">Select... list of existing active projects</option>
      <option value=" ">Select... list of existing active projects</option>
    </select>
    
     
  </div><br></br>
</div>
      <div className="mb-6">
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
          <label htmlFor="taskCode" className="block mb-2 text-sm text-gray-600"
            >Task Code</label
          >
          <input
            type="text"
            name="taskCode"
            placeholder="Add a task code"
            required
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="taskName" className="block mb-2 text-sm text-gray-600"
            >Task Name</label
          >
          <input
            type="text"
            name="taskName"
            placeholder="Add a Task"
            required
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
        </div>
        <div className="mb-6">
            {/* start date cannot be before the start date of the project */}
          <label htmlFor="startDate" className="text-sm text-gray-600">Start Date</label>
          <input
            type="Date"
            name="startDate"
            required
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
        </div>
        <div className="mb-6">
            {/* start date cannot be before the start date of the project */}
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
export default AddTask;