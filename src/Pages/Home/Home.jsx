import homeImg from "../../assets/avataaars.svg";
import Title from "../../Components/Title/Title";

export default function Home() {
	return (
		<>
			<div className="home-page py-6 mt-24 bg-commonColor text-white flex flex-col justify-center items-center gap-6">
				<img src={homeImg} className="w-64" alt="Home Page Avatar" />

				<Title heading="start framework" bgColor="bg-white" />

				<p className=" capitalize text-md">
					Graphic Artist - Web Designer - Illustrator
				</p>
			</div>
		</>
	);
}
