import React from "react";
import "./Button.css";

/*
props: 
	name :
*/
export default class Button extends React.Component {

	constructor(props) {
		super(props)

		this.onClickHandle = this.onClickHandle.bind(this)
	}

	isOperator = val => {
		return !isNaN(val) || val === "." || val === "=";
	}

	onClickHandle(e) {
		this.setState({
			name: this.props.name
		}, () => {
			this.props.handleClick(this.props.name)
		})
	}

	render() {
		let className = `button-wrapper ${this.isOperator(this.props.name) ? null : "operator"}`

		return (
			<div
				className={className}
				onClick={this.onClickHandle}
			>
				{this.props.name}
			</div>
		)
	}
}