export default function PortfolioCard({ portfolioImage }) {
	function getImageSrc(e) {
		// console.log(
		// 	e.target.parentElement.previousElementSibling.getAttribute("src")
		// );

		let imgSrc = null;

		if (e.target.previousElementSibling === null) {
			imgSrc =
				e.target.parentElement.previousElementSibling.getAttribute(
					"src"
				);
		} else {
			imgSrc = e.target.previousElementSibling.getAttribute("src");
		}

		console.log(imgSrc);

		return imgSrc;
	}

	return (
		<>
			<div
				className="card w-full md:w-2/5 lg:w-[30%] rounded-xl overflow-hidden relative cursor-pointer"
				onClick={function () {
					return (
						<div className="w-full h-screen bg-blue-400 bg-opacity-30 relative left-0 right-0 top-0 bottom-0 z-20 justify-center items-center hidden">
							<img src={getImageSrc} className="w-1/2" />
						</div>
					);
				}}
			>
				<img src={portfolioImage} className="w-full" />

				<div className="layer w-full h-full bg-commonColor absolute left-0 top-0 flex justify-center items-center opacity-0 transition-opacity duration-500 hover:opacity-90">
					<i className="fa-solid fa-plus text-white text-8xl font-bold"></i>
				</div>
			</div>
		</>
	);
}
