import "./WorkerInfoBox.scss";

type WorkerInfoBoxProps = {
	oneWorker: {
		firstname: string;
		lastname: string;
		pant_color: string;
		favorite_food: string;
		favorite_tool: string;
		pet: string;
		hobby: string;
	};
};
const WorkerInfoBox = ({ oneWorker }: WorkerInfoBoxProps) => {
	return (
		<section className="workerInfoBox">
			{oneWorker.firstname} {oneWorker.lastname}
		</section>
	);
};

export default WorkerInfoBox;
