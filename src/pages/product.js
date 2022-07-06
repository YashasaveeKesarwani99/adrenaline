/** @format */

import React from "react";
import ContentSection1 from "../components/product page/content-section-1/contentSection1";
import ContentSection2 from "../components/product page/content-section-2/contentSection2";
import Header from "../components/product page/header/header";
import SecondaryHeader from "../components/product page/secondary-header/secondaryHeader";
import ContentSection3 from "../components/product page/content-section-3/contentSection3";
import ContentSection4 from "../components/product page/content-section-4/contentSection4";

const Product = () => {
	return (
		<div>
			<Header />
			<ContentSection1 />
			<SecondaryHeader />
			<ContentSection2 />
			<ContentSection3 />
			<ContentSection4 />
		</div>
	);
};

export default Product;
