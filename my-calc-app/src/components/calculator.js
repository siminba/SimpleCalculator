
import Button from "./Button"


function Calculator() {
    return (
        <div className="flex flex-col items-center justify-center bg-white-100">

            <div className=" border-solid border-2 rounded border-gray-500 mt-10">
                <div>
                    <Button tclass="bg-gray-500  mb-3 m-2 p-2 w-72 h-20 font-bold rounded" />
                </div>
                <div>
                    <Button text="7" tclass="bg-gray-300 ml-3 m-2 p-2 font-bold rounded w-14 h-16" />
                    <Button text="8" tclass="bg-gray-300 ml-3 m-2 p-2 font-bold rounded w-14 h-16" />
                    <Button text="9" tclass="bg-gray-300 ml-3 m-2 p-2 font-bold rounded w-14 h-16" />
                    <Button text="/" tclass="bg-yellow-400 ml-2 m-2 p-2 font-bold rounded w-14 h-16" />
                </div>
                <div>
                    <Button text="4" tclass="bg-gray-300 ml-3 m-2 p-2 font-bold rounded w-14 h-16" />
                    <Button text="5" tclass="bg-gray-300 ml-3 m-2 p-2 font-bold rounded w-14 h-16" />
                    <Button text="6" tclass="bg-gray-300 ml-3 m-2 p-2 font-bold rounded w-14 h-16" />
                    <Button text="%" tclass="bg-yellow-400 ml-2 mr-1 m-2 p-2 font-bold rounded w-14 h-16" />
                </div>
                <div>
                    <Button text="1" tclass="bg-gray-300 ml-3 m-2 p-2 font-bold rounded w-14 h-16" />
                    <Button text="2" tclass="bg-gray-300 ml-3 m-2 p-2 font-bold rounded w-14 h-16" />
                    <Button text="3" tclass="bg-gray-300 ml-3 m-2 p-2 font-bold rounded w-14 h-16" />
                    <Button text="x" tclass="bg-yellow-400 ml-2 mr-1 m-2 p-2 font-bold rounded w-14 h-16" />
                </div>
                <div>
                    <Button text="." tclass="bg-gray-300 ml-3 m-2 p-2 font-bold rounded w-14 h-16" />
                    <Button text="0" tclass="bg-gray-300 ml-3 m-2 p-2 font-bold rounded w-14 h-16" />
                    <Button text="=" tclass="bg-gray-300 ml-3 m-2 p-2 font-bold rounded w-14 h-16" />
                    <Button text="-" tclass="bg-yellow-400 ml-2 mr-1 m-2 p-2 font-bold rounded w-14 h-16" />
                    <div>
                        <Button text="Clear" tclass="bg-gray-500 mt-7 mb-7 m-2 p-2 w-72 rounded font-bold" />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Calculator;