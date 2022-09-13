/** @format */

import React, { useState } from "react";

const readStyle = {
	textAlignLast: "left",
	marginLeft: "110px",
	fontWeight: "bold",
};
const comentStyle = {
	textAlignLast: "left",
	marginLeft: "30px",
};

export const CustomNotification = (props) => {
	const bgColor = props.bgcolor;
	const [isRead, setRead] = useState(false);
	const toggleRead = () => {
		setRead(!isRead);
	};
	return (
		<div className="d-flex flex-column">
			<div
				onClick={toggleRead}
				style={{
					width: "380px",
					height: "98px",
					backgroundColor: bgColor,
					color: "white",
				}}>
				<div style={readStyle}>{isRead ? "Read" : "Unread"}</div>
				<div style={{ borderTop: "1px solid", marginRight: "96px" }}></div>

				<div style={comentStyle}>
					<span
						style={
							isRead
								? { fontWeight: "bold", opacity: ".7" }
								: { fontWeight: "bold" }
						}>
						Dianne left a comment
					</span>
					<br />
					<span style={isRead ? { opacity: ".7" } : {}}>
						Can you review this MR?
					</span>
				</div>
			</div>
		</div>
	);
};
