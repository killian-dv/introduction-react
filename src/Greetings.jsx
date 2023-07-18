export function Greetings(props) {
    console.log(props);
    return (
        <ul>
            <li>Hello {props.firstName}</li>
            <li>you are {props.age} years old</li>
            <li>{props.image}</li>
            <li>{props.isSunny ? <ItsSunny /> : <ItsRainy />}</li>
        </ul>
    )
}

function ItsSunny() {
    return <h1>Il fait beau</h1>;
}

function ItsRainy() {
    return <h1>Il pleut</h1>;
}