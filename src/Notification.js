/** @format */

import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CustomNotification } from "./CustomNotification";

export const Notification = () => {
	let bgcolor = "";
	const toastId = React.useRef(null);
	const [color, setColor] = useState("");
	const toastClick = () => {
		toast.autoClose(false);
	};
	const notify = (event) => {
		bgcolor = event.target.value;
		toast.dismiss(toastId.current);
		setColor(bgcolor);
		toastId.current = toast(<CustomNotification bgcolor={bgcolor} />, {
			position: toast.POSITION.BOTTOM_RIGHT,
			autoClose: 8000,
		});
	};

	return (
		<div className="container pt-4">
			<div className="row">
				<div className="col text-center">
					<Button
						className="m-2"
						value="blue"
						onClick={notify}
						style={{
							backgroundColor: "blue",
							width: "120px",
						}}>
						Blue
					</Button>
					<Button
						className="m-2"
						value="green"
						onClick={notify}
						style={{
							backgroundColor: "green",
							width: "120px",
						}}>
						Green
					</Button>
					<Button
						className="m-2"
						value="grey"
						onClick={notify}
						style={{
							backgroundColor: "grey",
							width: "120px",
						}}>
						Grey
					</Button>
					<Button
						className="m-2"
						value="orange"
						onClick={notify}
						style={{
							backgroundColor: "orange",
							width: "120px",
						}}>
						Orange
					</Button>
					<ToastContainer
						toastStyle={{ backgroundColor: color }}
						onClick={toastClick}
					/>
				</div>
			</div>
		</div>
	);
};
