export function Car (props){
    function onClick(){
        props.onCarClick(2)
    }
    return (
        <div>
            je suis {"<Car />"}
            <button onClick={onClick}>Click</button>
        </div>
    )
}