import Title from "../../Components/Title/Title";
import PortfolioCard from "../../Components/PortfolioCard/PortfolioCard";

import portfolioImg1 from "../../assets/port1.png";
import portfolioImg2 from "../../assets/port2.png";
import portfolioImg3 from "../../assets/port3.png";

export default function Portfolio() {
	return (
		<>
			<div className="portfolio-page py-10 mt-24 text-mainColor">
				<Title heading="portfolio component" bgColor="bg-mainColor" />

				<div className="portfolio-cards container mt-6 flex flex-wrap justify-center items-center gap-5">
					<PortfolioCard portfolioImage={portfolioImg1} />
					<PortfolioCard portfolioImage={portfolioImg2} />
					<PortfolioCard portfolioImage={portfolioImg3} />
					<PortfolioCard portfolioImage={portfolioImg1} />
					<PortfolioCard portfolioImage={portfolioImg2} />
					<PortfolioCard portfolioImage={portfolioImg3} />
				</div>
			</div>
		</>
	);
}
