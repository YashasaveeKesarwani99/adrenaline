/** @format */

import React, { useEffect } from "react";
import "./secondaryHeader.css";
import max from "../../../assets/icons/max.png";
import NavSection from "./navSection";

const SecondaryHeader = () => {
	return (
		<>
			<div className='secondary-header-container'>
				<div className='secondary-header-sub-container'>
					<div className='secondary-header-logo'>
						<div>
							<img src={max} alt='max' />
						</div>
						<div className='secondary-header-logo-content'>
							<div>Recruit</div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
			<NavSection />
		</>
	);
};

export default SecondaryHeader;
