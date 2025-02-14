type UnorderedListProps = {
	setColor: (color: string) => void;
};
const UnorderedList = ({ setColor }: UnorderedListProps) => {
	const arr = ["hotpink", "rebeccapurple", "limegreen"];

	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setColor((e.target as HTMLButtonElement).innerHTML);
	};

	return (
		<section className="unorderedList">
			<ul>
				{arr.map((c) => {
					return (
						<li key={c}>
							<button onClick={handleClick}>{c}</button>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default UnorderedList;
