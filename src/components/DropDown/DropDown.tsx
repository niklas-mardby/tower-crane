const DropDown = () => {
	/**
        Alla events skickar ett object som jag nedan kallar e
        Detta objekt e innehåller en massa data om eventet
        Titta i konsollen på hur e ser ut!

		Denna komponenten är statisk! Varför då?
     */
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		console.log(e);
		console.log(e.target.value);
	};

	return (
		<>
			<label htmlFor="testSelect">Test: </label>
			<select onChange={handleChange} id="testSelect">
				<option value="svar-a">A</option>
				<option value="svar-b">B</option>
				<option value="svar-c">C</option>
			</select>
		</>
	);
};

export default DropDown;
