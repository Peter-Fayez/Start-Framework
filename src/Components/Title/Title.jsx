export default function Title({ heading, bgColor }) {
	return (
		<>
			<h1 className="text-4xl font-bold text-center uppercase">
				{heading}
			</h1>

			<div className="flex justify-center items-center gap-4">
				<div className={`w-28 h-1 ${bgColor}`}></div>

				<div>
					<i className="fa-solid fa-star"></i>
				</div>

				<div className={`w-28 h-1 ${bgColor}`}></div>
			</div>
		</>
	);
}
