/** @format */

import React from "react";
import adrenaline from "../../../assets/icons/adrenailn.png";
import max from "../../../assets/icons/max.png";
import banner from "../../../assets/images/banner.png";
import "./header.css";

const Header = () => {
	return (
		<div className='header-container'>
			<div className='header-sub-container'>
				<div className='header-nav-bar'>
					<div className='header-nav-bar-logo'>
						<img src={adrenaline} alt='adrenaline-logo' />
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
						<div>Talk to Sales</div>
					</div>
				</div>
				<div className='header-content'>
					<div className='header-content-left'>
						<div>MAX RECRUIT</div>
						<div>Max Recruit:</div>
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
							<div>TALK TO AN EXPERT</div>
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
