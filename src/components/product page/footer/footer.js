/** @format */

import React from "react";
import "./footer.css";
import mail from "../../../assets/images/product-page-footer-image-1.png";
import logos from "../../../assets/images/product-page-footer-image-2.png";
import adrenaline from "../../../assets/icons/adrenailn.png";
import socials from "../../../assets/images/product-page-footer-image-3.png";

const Footer = () => {
	return (
		<div className='footer-container'>
			<div className='footer-sub-container'>
				<div className='footer-sub-content-1'>
					<div className='footer-sub-content-1-image'>
						<img src={mail} alt='mail' />
					</div>
					<div className='footer-sub-content-1-form'>
						<div>
							Subscribe to{" "}
							<span stlye={{ color: "#2A3C98" }}>our newsletter</span> and stay
							updated
						</div>
						<div>
							<div>
								<input />
							</div>
							<div></div>
						</div>
					</div>
				</div>
				<div className='footer-sub-content-2'>
					<div>
						<div className='footer-sub-content-2-content-1'>
							<div>
								Hire to Retire
								<br />
								Employee Experience
							</div>
							<div></div>
						</div>
						<div className='footer-sub-content-2-content-2'>
							<div>
								Max Recruit
								<br />
								<br />
								Max Foundation
								<br />
								<br />
								Max Workflow
								<br />
								<br />
								Max Payroll
								<br />
								<br />
								Max Engage
								<br />
								<br />
								Max Perform
								<br />
								<br />
								Max Learn
							</div>
							<div>
								Mobile App
								<br />
								<br />
								AI Engine
								<br />
								<br />
								Automation Workflow
								<br />
								<br />
								Alerts and Communication
								<br />
								<br />
								API Integration
								<br />
								<br />
								Security
							</div>
							<div>
								Company
								<br />
								<br />
								Demo request
								<br />
								<br />
								Copyrights
								<br />
								<br />
								Legal
							</div>
							<div>
								Region Selection
								<br />
								<br />
								Patner Login
								<br />
								<br />
								Career
								<br />
								<br />
								Support
							</div>
						</div>
						<div className='footer-sub-content-2-content-3'>
							<img src={logos} alt='logo' />
						</div>
						<div className='footer-sub-content-2-content-4'>
							Privacy Policy | Terms & Conditions
						</div>
					</div>
					<div>
						<div className='footer-sub-content-2-content-5'>
							<img src={adrenaline} alt='adrenaline' />
						</div>
						<div className='footer-sub-content-2-content-6'>
							<br />
							Passionately focused on people and fostering relationships for 20
							Years
						</div>
						<div>
							{" "}
							<br />
							<br />
							Follow Us
						</div>
						<div className='footer-socials'>
							<img src={socials} alt='socials' />
						</div>
						<div>
							<div></div>
							<div>info@myadrenalin.com</div>
						</div>
						<div>
							<div></div>
							<div>+91 894 894 5665</div>
						</div>
						<div>Request for Demo</div>
						<div> Copyrights 2022 myadrenalin.com</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
