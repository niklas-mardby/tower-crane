import "./App.scss";
import DropDown from "./components/DropDown/DropDown";
import OrderedList from "./components/OrderedList/OrderedList";
import WorkerInfoBox from "./components/WorkerInfoBox/WorkerInfoBox";

import animalsArray from "./assets/json/animals.json";
import workersArray from "./assets/json/bob_simple_10.json";

import UnorderedListContainer from "./components/UnorderedListContainer/UnorderedListContainer";

function App() {
	return (
		<>
			<h1>🏗️ tower-crane 🏗️</h1>
			<p>a demo for students of React</p>
			<DropDown />
			<OrderedList animals={animalsArray} />
			<WorkerInfoBox oneWorker={workersArray[0]} />
			<UnorderedListContainer />
		</>
	);
}

export default App;
