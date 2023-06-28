import {FC} from 'react'

const SideBar:FC  = ()=> {
return(
<>
<div className="relative bg-white dark:bg-gray-800">
    <div className=" flex-col sm:flex-row sm:justify-around">
        <div className="h-screen w-72">
            <nav className="mt-10 px-6 ">
                <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " href="/addTask">
                    <span className="mx-4 text-lg font-normal">
                        Add Task
                    </span>
                    <span className="flex-grow text-right">
                    </span>
                </a>
                <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg" href="addProject">
                    <span className="mx-4 text-lg font-normal">
                        Add Project
                    </span>
                    <span className="flex-grow text-right">
                    </span>
                </a>
                <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " href="addData">
                    <span className="mx-4 text-lg font-normal">
                        Add Data
                    </span>
                    <span className="flex-grow text-right">
                    </span>
                </a>
                <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " href="dashboard">
                    <span className="mx-4 text-lg font-normal">
                        Dashboard
                    </span>
                    <span className="flex-grow text-right">
                    </span>
                </a>
            </nav>
        </div>
    </div>
</div>
</>
);
};
export default SideBar;