import React from "react";
import "./CleatButton.css";

export const ClearButton = props => (
	<div className="clear-btn" onClick={props.handleClear}>
		{props.children}
	</div>
);
