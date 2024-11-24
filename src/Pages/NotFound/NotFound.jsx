import notFoundImg from "../../assets/404.jpg";

export default function NotFound() {
	return (
		<div className="container w-1/4 py-6 mt-28 flex justify-center items-center">
			<img src={notFoundImg} alt="Not Found Image" />
		</div>
	);
}
