import { Greetings } from "./Greetings";

export function App() {
    return (
        <>
            <h1>Hello to the React World</h1>
            <Greetings 
                firstName={"Rachel"}
                age={25}
                car={{color: "red", brand: "BMW"}}
                doSomething={function() {
                    console.log("Hello");
                }}
                image={<img src="https://picsum.photos/500/300" alt="random" />}
            />
        </>
	);
}