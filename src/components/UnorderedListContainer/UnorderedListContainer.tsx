import { useState } from "react";
import "./UnorderedListContainer.scss";

import ColorBox from "./ColorBox";
import UnorderedList from "./UnorderedList";

const UnorderedListContainer = () => {
	const [color, setColor] = useState("skyblue");
	const bgrColor = { backgroundColor: color };

	return (
		<section className="unorderedListContainer">
			<ColorBox bgrColor={bgrColor} />
			<UnorderedList setColor={setColor} />
		</section>
	);
};

export default UnorderedListContainer;
