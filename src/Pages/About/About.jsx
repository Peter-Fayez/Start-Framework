import Title from "../../Components/Title/Title";

export default function About() {
	return (
		<>
			<div className="about-page py-36 mt-24 bg-commonColor text-white flex flex-col justify-center items-center gap-5">
				<Title heading="about component" bgColor="bg-white" />

				<div className="about-body container space-y-5 md:space-y-0 md:flex md:gap-20">
					<div>
						Freelancer is a free bootstrap theme created by Route.
						The download includes the complete source files
						including HTML, CSS, and JavaScript as well as optional
						SASS stylesheets for easy customization.
					</div>

					<div>
						Freelancer is a free bootstrap theme created by Route.
						The download includes the complete source files
						including HTML, CSS, and JavaScript as well as optional
						SASS stylesheets for easy customization.
					</div>
				</div>
			</div>
		</>
	);
}
