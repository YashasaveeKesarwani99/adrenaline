/** @format */

import React from "react";
import "./contentSection5.css";
import mathew from "../../../assets/images/content-section-5-image-1.png";

const ContentSection5 = () => {
	return (
		<div className='content-section-5-container'>
			<div className='content-section-5-sub-container'>
				<div className='content-section-5-sub-content-1'>
					<div>
						<img src={mathew} />
					</div>
					<div>
						<div>
							<div>
								Once the selection process is complete, close the loop with:
								<br />
								<br />
								<br />
							</div>
							<div>
								<div className='content-section-5-content-1-number'>1</div>
								<div>
									Detailed comparison of candidates to issue offer letters
									<br />
									<br />
								</div>
							</div>
							<div>
								<div className='content-section-5-content-1-number'>2</div>
								<div>
									Manage pre-joining formalities
									<br />
									<br />
								</div>
							</div>
							<div>
								<div className='content-section-5-content-1-number'>3</div>
								<div>
									Easily accessible application history while tracking offer
									acceptance
									<br />
									<br />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='content-section-5-sub-content-2'></div>
			</div>
		</div>
	);
};

export default ContentSection5;
