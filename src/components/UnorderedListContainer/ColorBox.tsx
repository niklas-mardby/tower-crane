type ColorBoxProps = {
	bgrColor: { backgroundColor: string };
};

const ColorBox = ({ bgrColor }: ColorBoxProps) => {
	return <div style={bgrColor}>Your choice: {bgrColor.backgroundColor}</div>;
};

export default ColorBox;
