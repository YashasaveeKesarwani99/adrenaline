/** @format */

import React from "react";
import "./contentSection3.css";
import grace from "../../../assets/images/content-section-3-image-1.png";

const contentSection3 = () => {
	return (
		<div className='content-section-3-container'>
			<div className='content-section-3-sub-container'>
				<div className='content-section-3-heading'>
					<div>
						Establish powerful personalised branding with a hyper-personalised
						career page to offer a glimpse into the organisation for the
						candidates. The Candidate Portal helps you create a single pane of
						view for attracting the right resources.
					</div>
					<div>Overview of the Max Candidate Portal</div>
				</div>
				<div className='content-section-3-sub-content-1'>
					<div>
						<div>1</div>
						<div>
							Personalise the portal to
							<br /> include your branding
						</div>
					</div>
					<div>
						<div>2</div>
						<div>
							Enable candidates to discover the open positions and set job
							alerts for preferred positions
						</div>
					</div>
					<div>
						<div>3</div>
						<div>
							Create a qualified candidate funnel using a pre-apply
							questionnaire
						</div>
					</div>
					<div>
						<div>4</div>
						<div>
							Integrate to external assessment sites for recruitment evaluation
						</div>
					</div>
					<div>
						<img src={grace} alt='personalized portal' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default contentSection3;
