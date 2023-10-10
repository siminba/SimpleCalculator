import Input from "./Input";
import Button from "./Button"
// import React, {useState} from 'react';


function Calculator() {

    // const [text, setText] = useState("");
    // const [result, setResult] = useState("");

    return (
        <div className="flex flex-col items-center justify-center bg-white-100">
            <div className="border-solid border-2 rounded border-gray-500 mt-10">
                <Input className="flex flex-col flex-end h-8 mb-14 mr-6 mt-5 text-right" />
                <div>
                    <Button text="7" tclass="bg-gray-300 ml-3 m-2 p-2 font-bold rounded w-14 h-16 text-3xl" />
                    <Button text="8" tclass="bg-gray-300 ml-3 m-2 p-2 font-bold rounded w-14 h-16 text-3xl" />
                    <Button text="9" tclass="bg-gray-300 ml-3 m-2 p-2 font-bold rounded w-14 h-16 text-3xl" />
                    <Button text="/" tclass="bg-yellow-400 m-2 p-2 font-bold rounded w-14 h-16 text-3xl" />
                </div>
                <div>
                    <Button text="4" tclass="bg-gray-300 ml-3 m-2 p-2 font-bold rounded w-14 h-16 text-3xl" />
                    <Button text="5" tclass="bg-gray-300 ml-3 m-2 p-2 font-bold rounded w-14 h-16 text-3xl" />
                    <Button text="6" tclass="bg-gray-300 ml-3 m-2 p-2 font-bold rounded w-14 h-16 text-3xl" />
                    <Button text="%" tclass="bg-yellow-400 ml-2 mr-1 m-2 p-2 font-bold rounded w-14 h-16 text-3xl" />
                </div>
                <div>
                    <Button text="1" tclass="bg-gray-300 ml-3 m-2 p-2 font-bold rounded w-14 h-16 text-3xl" />
                    <Button text="2" tclass="bg-gray-300 ml-3 m-2 p-2 font-bold rounded w-14 h-16 text-3xl" />
                    <Button text="3" tclass="bg-gray-300 ml-3 m-2 p-2 font-bold rounded w-14 h-16 text-3xl" />
                    <Button text="x" tclass="bg-yellow-400 ml-2 mr-1 m-2 p-2 font-bold rounded w-14 h-16 text-3xl" />
                </div>
                <div>
                    <Button text="." tclass="bg-gray-300 ml-3 m-2 p-2 font-bold rounded w-14 h-16 text-3xl" />
                    <Button text="0" tclass="bg-gray-300 ml-3 m-2 p-2 font-bold rounded w-14 h-16 text-3xl" />
                    <Button text="=" tclass="bg-gray-300 ml-3 m-2 p-2 font-bold rounded w-14 h-16 text-3xl" />
                    <Button text="-" tclass="bg-yellow-400 ml-2 mr-1 m-2 p-2 font-bold rounded w-14 h-16 text-3xl" />
                    <div>
                        <Button text="Clear" tclass="bg-gray-300 mt-3 mb-3 m-2 p-2 w-72 rounded font-bold text-3xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;