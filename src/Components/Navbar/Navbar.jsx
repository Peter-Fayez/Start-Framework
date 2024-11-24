import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
	/* States to Control Navbar Height and Padding while scrolling */
	let [navHeight, setNavHeight] = useState(108);
	let [navPadding, setNavPadding] = useState(36);

	/* State to Control Navbar Menu with Clicking */
	let [menuOpen, setMenuOpen] = useState(false);

	/* Function using useEffect Hook to change Navbar Height while scrolling */
	useEffect(function () {
		window.addEventListener("scroll", function () {
			// console.log(window.scrollY);
			if (window.scrollY > 30) {
				setNavHeight(90);
				setNavPadding(28);
			} else {
				setNavHeight(108);
				setNavPadding(36);
			}
		});
	}, []);

	return (
		<>
			<nav
				className="py-9 bg-mainColor fixed left-0 right-0 top-0 z-10"
				style={{
					height: `${navHeight}px`,
					paddingBlock: `${navPadding}px`,
					transition: "height; paddingBlock",
					transitionDuration: "300ms",
				}}
			>
				<div className="container text-white block lg:flex justify-between items-center">
					<div className="flex justify-between items-center">
						<Link
							to="/"
							className=" uppercase text-3xl font-bold"
							onClick={function () {
								const navList =
									document.querySelector(".nav-list");

								if (menuOpen === true) {
									navList.classList.add("hidden");

									setMenuOpen(false);
								}
							}}
						>
							start framwork
						</Link>

						<div
							className="menu lg:hidden text-2xl cursor-pointer"
							onClick={function () {
								const navList =
									document.querySelector(".nav-list");

								if (menuOpen === false) {
									navList.classList.remove("hidden");

									setMenuOpen(true);
								} else {
									navList.classList.add("hidden");

									setMenuOpen(false);
								}
							}}
						>
							<i className="fa-solid fa-bars"></i>
						</div>
					</div>

					<div className="nav-list hidden lg:block">
						<ul className="pb-3 lg:pb-0 mt-6 lg:mt-0 border-x-[1px] border-b-[1px] border-white lg:border-0 bg-mainColor rounded-b-md lg:rounded-none flex flex-col lg:flex-row justify-center items-center gap-3">
							<li className="w-full py-2 lg:py-0 border-b-[1px] border-white lg:border-b-0 text-center">
								<NavLink
									to="about"
									className={function ({ isActive }) {
										return `p-2   rounded-md text-base font-bold uppercase ${
											isActive ? "bg-commonColor" : ""
										}`;
									}}
									onClick={function () {
										const navList =
											document.querySelector(".nav-list");

										if (menuOpen === true) {
											navList.classList.add("hidden");

											setMenuOpen(false);
										}
									}}
								>
									about
								</NavLink>
							</li>

							<li className="w-full py-2 lg:py-0 border-b-[1px] border-white lg:border-b-0 text-center">
								<NavLink
									to="portfolio"
									className={function ({ isActive }) {
										return `p-2  rounded-md text-base font-bold uppercase ${
											isActive ? "bg-commonColor" : ""
										}`;
									}}
									onClick={function () {
										const navList =
											document.querySelector(".nav-list");

										if (menuOpen === true) {
											navList.classList.add("hidden");

											setMenuOpen(false);
										}
									}}
								>
									portfolio
								</NavLink>
							</li>

							<li className="w-full py-2 lg:py-0 text-center">
								<NavLink
									to="contact"
									className={function ({ isActive }) {
										return `p-2  rounded-md text-base font-bold uppercase ${
											isActive ? "bg-commonColor" : ""
										}`;
									}}
									onClick={function () {
										const navList =
											document.querySelector(".nav-list");

										if (menuOpen === true) {
											navList.classList.add("hidden");

											setMenuOpen(false);
										}
									}}
								>
									contact
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
