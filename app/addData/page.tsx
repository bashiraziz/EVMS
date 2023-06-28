import { FC } from "react"

const AddData: FC = () => {
    return(

        <div className="p-10">
        <div className="group relative w-max">
            <button>Click me!</button>
            <span
            className="pointer-events-none absolute -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100"
            >
            This is a button.
            </span>
        </div>
        </div>

    )
    }
    export default AddData;