export default function Footer() {
	return (
		<>
			<div className="contact-details py-24 bg-mainColor">
				<div className="container text-white flex flex-col justify-center items-center gap-16 sm:flex-row sm:items-center sm:gap-8">
					<div className="w-full sm:w-1/3 space-y-4 text-center">
						<h2 className="uppercase text-3xl font-semibold">
							location
						</h2>

						<p>2215 John Daniel Drive</p>

						<p>Clark, MO 65243</p>
					</div>

					<div className="w-full sm:w-1/3 space-y-4 text-center self-start">
						<h2 className="uppercase text-3xl font-semibold">
							around the web
						</h2>

						<ul className="text-base flex justify-center gap-3">
							<li className="w-10 h-10 border border-1 border-white rounded-full flex justify-center items-center">
								<i className="fa-brands fa-facebook"></i>
							</li>

							<li className="w-10 h-10 border border-1 border-white rounded-full flex justify-center items-center">
								<i className="fa-brands fa-twitter"></i>
							</li>

							<li className="w-10 h-10 border border-1 border-white rounded-full flex justify-center items-center">
								<i className="fa-brands fa-linkedin-in"></i>
							</li>

							<li className="w-10 h-10 border border-1 border-white rounded-full flex justify-center items-center">
								<i className="fa-solid fa-globe"></i>
							</li>
						</ul>
					</div>

					<div className="w-full sm:w-1/3 space-y-4 text-center self-start">
						<h2 className="uppercase text-3xl font-semibold">
							about freelancer
						</h2>

						<p>
							Freelance is a free to use, licensed TailwindCSS
							theme created by Route
						</p>
					</div>
				</div>
			</div>

			<div className="footer py-6 bg-darkColor text-white text-center">
				<p>Copyright &copy; Your Website 2021</p>
			</div>
		</>
	);
}
