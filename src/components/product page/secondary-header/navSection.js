/** @format */

import React from "react";
import "./secondaryHeader.css";
import max from "../../../assets/icons/max.png";

const NavSection = () => {
	const [show, setShow] = React.useState(false);

	const ref = React.useRef();
	const logoRef = React.useRef();

	window.addEventListener("scroll", () => {
		let scroll = window.pageYOffset;

		if (ref.current) {
			if (
				scroll >=
				ref.current.getBoundingClientRect().top +
					document.documentElement.scrollTop
			) {
				setShow(true);
				ref.current.style.height = "6.75vh";
			} else {
				setShow(false);
				ref.current.style.height = "5.75vh";
			}
		}
	});

	return (
		<div className='nav-section-container' ref={ref}>
			<div className='nav-section-sub-container'>
				<div className='secondary-header-nav ' id='secondary-header-nav-id'>
					<div className='secondary-header-nav-left'>
						{show ? (
							<div className='nav-section-logo'>
								<div>
									<img src={max} alt='max' />
								</div>
								<div className='nav-section-logo-content'>
									<div>Recruit</div>
									<div></div>
								</div>
							</div>
						) : null}
						<div>
							<a href='#'>
								<div>PUBLISH</div>
							</a>
							<div className='nav-section-logo-content-border'></div>
						</div>
						<div>
							<a href='#'>
								<div>ATTRACT</div>
							</a>

							<div className='nav-section-logo-content-border'></div>
						</div>
						<div>
							<a href='#'>
								<div>EVALUATE</div>
							</a>

							<div className='nav-section-logo-content-border'></div>
						</div>
						<div>
							<a href='#'>
								<div>HIRE</div>
							</a>

							<div className='nav-section-logo-content-border'></div>
						</div>
						<div className='secondary-header-nav-right'>DEMO REQUEST</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavSection;
