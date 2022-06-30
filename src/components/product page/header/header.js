/** @format */

import React, { useEffect } from "react";
import adrenaline from "../../../assets/icons/adrenailn.png";
import max from "../../../assets/icons/max.png";
import banner from "../../../assets/images/banner.png";
import "./header.css";
import menuImage from "../../../assets/icons/menu.png";
import menuClose from "../../../assets/icons/menuClose.png";

const Header = () => {
	var menu = null;
	var menuItems = null;
	var hamburger = null;
	var closeIcon = null;
	var menuIcon = null;

	function toggleMenu() {
		if (menu.classList.contains("showMenu")) {
			menu.classList.remove("showMenu");
			closeIcon.style.display = "none";
			menuIcon.style.display = "block";
		} else {
			menu.classList.add("showMenu");
			closeIcon.style.display = "block";
			menuIcon.style.display = "none";
		}
	}

	React.useEffect(() => {
		if (hamburger) hamburger.addEventListener("click", toggleMenu);

		menu = document.querySelector(".menu");
		menuItems = document.querySelectorAll(".menuItem");
		hamburger = document.querySelector(".hamburger");
		closeIcon = document.querySelector(".closeIcon");
		menuIcon = document.querySelector(".menuIcon");
	}, []);

	return (
		<div className='header-container'>
			<div className='header-sub-container'>
				<div className='header-nav-bar'>
					<div className='header-nav-bar-logo'>
						<img src={adrenaline} alt='adrenaline-logo' />
					</div>
					<div className='header-burger-menu'>
						<ul class='menu'>
							<li className='menuItem'>HR TECH PLATFORM</li>
							<li className='menuItem'>COMPANY</li>
							<li className='menuItem'>SUPPORT</li>
							<li className='menuItem'>TALK TO EXPERT</li>
						</ul>
						<div className='hamburger'>
							<img src={menuImage} />

							<i className='closeIcon'>
								<img src={menuClose} />
							</i>
						</div>
					</div>
					<div className='header-nav-bar-logo-content'>
						<div>
							<div>
								<img src={max} alt='max' />
							</div>
							<div>HR Tech Platform</div>
						</div>
						<div>Company</div>
						<div>Support</div>
						<div>Talk to Expert</div>
					</div>
				</div>
				<div className='header-content'>
					<div className='header-content-left'>
						<div>MAX RECRUIT</div>
						<div>
							Hire the best talent to create
							<br /> a great place to work
						</div>
						<div>
							Make the recruitment process easy, fun and efficient with Max
							Recruit.
							<br /> Attract the best talent with your unique and powerful
							employer branding.
						</div>
						<div className='header-content-left-buttons'>
							<div>Book a Demo</div>
						</div>
					</div>
					<div className='header-content-right'>
						<img src={banner} alt='banner' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
