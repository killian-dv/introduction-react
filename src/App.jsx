import { Car } from "./components/Car/Car";
import { Greetings } from "./components/Greetings/Greetings";
import "./style.css";

export function App() {
    function hello(number) {
        alert("Hello de <App />" + number);
    }
    return (
        <>
            <div>
                Je suis {"<App />"}
                <Car onCarClick={hello} />
            </div>
        </>
	);
}