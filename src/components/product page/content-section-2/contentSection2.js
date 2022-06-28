/** @format */

import React from "react";
import "./contentSection2.css";
import openings from "../../../assets/images/content section 2 image 1.svg";
import requests from "../../../assets/images/content section 2 image 2.svg";

const ContentSection2 = () => {
	const imageOneRef = React.useRef();
	const imageTwoRef = React.useRef();

	window.addEventListener("scroll", () => {
		let scroll = window.pageYOffset;

		if (scroll >= 700) {
			imageOneRef.current.classList.add(
				"content-section-2-content-animate-image-1"
			);
			imageOneRef.current.style.top = "100px";
			imageOneRef.current.style.opacity = "1";
		}

		if (scroll >= 1000) {
			imageTwoRef.current.classList.add(
				"content-section-2-content-animate-image-2"
			);
			imageTwoRef.current.style.top = "60vh";
			imageTwoRef.current.style.opacity = "1";
		}
	});

	return (
		<div className='content-section-2-container'>
			<div className='content-section-2-sub-container'>
				<div className='content-section-2-heading-container'>
					<div>Max Job Board Management</div>
					<div>
						Plan your recruitment requirements and facilitate tracking of
						individual skills, such as, the right person for the right job{" "}
					</div>
				</div>
				<div className='content-section-2-content'>
					<div>
						Publish on multiple channels such as job boards, head hunters,
						websites, internal employees and referrals.
						<br />
						<br />
						Ensure that the open positions are matched to the right candidates.
						<br />
						<br />
						Attach document checklist for each position
					</div>
					<div ref={imageOneRef}>
						<img src={openings} alt='list of openings' />
					</div>
					<div ref={imageTwoRef}>
						<img src={requests} alt='job requests' />
					</div>
					<div>
						Streamlined employee hiring and screening process
						<br />
						<br />
						List of easily retrievable skills, talent and people.
						<br />
						<br />
						Track individual skills and map them to the right role.
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContentSection2;
