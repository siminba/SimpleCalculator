import './Input.css'

const Input = (props) => {
    return (
        <div className={props.className}>
            <div className="flex-1 font-bold text-3xl">
                <h1>Result</h1>
            </div>
            <div className="flex-1 mt-4 text-3xl">
                <h2>Text</h2>
            </div>
        </div>
    );
}
export default Input;