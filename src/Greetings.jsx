export function Greetings(props) {
    console.log(props);
    return (
        <ul>
            <li>Hello {props.firstName}</li>
            <li>you are {props.age} years old</li>
            <li>{props.image}</li>
        </ul>
    )
}