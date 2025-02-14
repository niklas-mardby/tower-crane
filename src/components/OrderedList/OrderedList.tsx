type OrderedListProp = {
	animals: string[];
};

const OrderedList = ({ animals }: OrderedListProp) => {
	/* 
		map är en funktion som tar emot en funktion
		map loopar igenom hela arrayen animals
		och på varje varv i loopen körs funktionen
		animal är då det element vi är på i arrayen i loopen

		Denna komponenten är dynamisk! Varför då?
	*/

	return (
		<>
			<h2>Animals from animals.json</h2>
			<ol>
				{animals.map((animal) => {
					return <li key={animal}>{animal}</li>;
				})}
			</ol>
		</>
	);
};

export default OrderedList;
