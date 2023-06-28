import type { FC } from 'react';

const AddTask: FC = () => {

    return(
    <div className="container mx-auto">
    <div className="max-w-xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
    <div className="text-center">
      <h1 className="my-3 text-3xl font-semibold text-gray-700">Add a new Task</h1>
      <p className="text-gray-400">Fill up the form below to add a new task. <br/>
      <br /> <br />
      </p>
    </div>
    <div>
      <form action="" method="POST">
        <div className="flex items-center w-1/4 ">
            <input
            type="checkbox"
            name="active"
            className=" w-5 h-5 border border-gray-300 rounded-sm outline-none cursor-pointer"
          />
                    {/* block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 */}
            <label className="ml-2 tracking-wide text-sm uppercase text-gray-700 font-bold  " htmlFor="active">Active</label>
        </div>
            <br />
        <div className="w-12/12">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="">Select a Project<span className="text-red-700 ">*</span></label>
        <div className="relative flex w-full">
            <select className="block w-full py-2.5 pl-4 pr-8 bg-gray-100 border-gray-300 rounded-sm appearance-none cursor-pointer focus:outline-none hover:border-gray-400">
      {/* project code + project name should be an existing active project */}
                <option >Select... list of existing active projects</option>
                <option value=" ">Select... list of existing active projects</option>
                <option value=" ">Select... list of existing active projects</option>
            </select>
        </div><br></br>
        </div>
        
        
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="taskid">
                Task ID<span className="text-red-700 ">*</span>
            </label>
            <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter a Task ID"  required/>
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="taskname">
                Task Name<span className="text-red-700 ">*</span>
            </label>
            <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter a task name" required />
            </div>
        </div>
        
        
    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {/* start date cannot be before the start date of the project */}
          <label htmlFor="startDate" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Planned Start Date -  Cannot be before the project start date<span className="text-red-700 ">*</span>
         </label>
          <input
            type="Date"
            name="startDate"
            required
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {/* start date cannot be before the start date of the project */}
          <label htmlFor="startDate" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Planned End Date -  Cannot be after the project start date<span className="text-red-700 ">*</span> </label>
          <input
            type="Date"
            name="startDate"
            required
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
            </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="plannedRevenue">
                Planned Revenue<span className="text-red-700 ">*</span>
            </label>
            <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="plannedRevenue" type="number" placeholder="Enter planned revenue" required />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="plannedCost">
                Planned Cost<span className="text-red-700 ">*</span>
            </label>
            <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="plannedCost" type="number" placeholder="Enter planned cost"  required/>
            </div>
        </div>

        <div className="mb-6">
          <label htmlFor="notes" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
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
            className="w-full px-2 py-4 text-white bg-gray-900 rounded-md  focus:bg-gray-600 focus:outline-none"
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