import * as math from "mathjs";
import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import { ClearButton } from "./components/ClearButton";
import { Input } from "./components/input";

class App extends Component {
	constructor(props) {
		super(props);
		this.saveNumberOne = this.saveNumberOne.bind(this)
		this.saveNumberTwo = this.saveNumberTwo.bind(this)
		this.state = {
			input: "",
			btnOne: "",
			btnTwo: "",
			spanNum: false,
			spanNumTwo: false,

		};
	}

	addToInput = val => {
		this.setState({ input: (this.state.input) + val });
	};


	handleEqual = () => {
		this.setState({ input: math.eval(this.state.input) });
	};

	saveNumberOne() {
		let { input, spanNum, btnOne } = this.state
		console.log(input)
		if (btnOne === "") {
			if (!isNaN(input)) {
				console.log("broj je")
				this.setState({
					btnOne: input,
					input: '',
				})

				this.setState({ spanNum: false })

			} else {
				console.log("nisam")
				this.setState({
					spanNum: !spanNum,
					input: '',

				})
			}
		} else {
			if (spanNum === true) {
				this.setState({ spanNum: !spanNum })
			}
			console.log(spanNum)
			this.setState({ input: input + btnOne });
			console.log("tu sam")
		}
	}

	saveNumberTwo() {
		let { input, spanNumTwo, btnTwo } = this.state
		console.log(input)
		if (btnTwo === "") {
			if (!isNaN(input)) {
				console.log("broj je")
				this.setState({
					btnTwo: input,
					input: '',
				})
				this.setState({ spanNumTwo: false })
			} else {
				console.log("nisam")
				this.setState({
					spanNumTwo: !spanNumTwo,
					input: '',

				})
			}
		} else {
			this.setState({ spanNumTwo: false })

			this.setState({ input: input + btnTwo });
			console.log("tu sam")
		}
	}



	render() {
		const { spanNum, spanNumTwo } = this.state
		return (
			<div className="app">
				<div className="calc-wrapper">
					{
						spanNum || spanNumTwo === true &&
						<span>Ne može se spremiti jer nije ovo broj</span>
					}
					<Input input={this.state.input} />
					<div className="row">
						<div className="button-wrapper operator" onClick={this.saveNumberOne}>Btn.1</div>
						<div className="button-wrapper operator" onClick={this.saveNumberTwo}>Btn.2</div>
					</div>
					<div className="row">
						<Button name="7" handleClick={this.addToInput} />
						<Button name="8" handleClick={this.addToInput} />
						<Button name="9" handleClick={this.addToInput} />
						<Button name="/" handleClick={this.addToInput} />
					</div>
					<div className="row">
						<Button name="4" handleClick={this.addToInput} />
						<Button name="5" handleClick={this.addToInput} />
						<Button name="6" handleClick={this.addToInput} />
						<Button name="*" handleClick={this.addToInput} />
					</div>
					<div className="row">
						<Button name="1" handleClick={this.addToInput} />
						<Button name="2" handleClick={this.addToInput} />
						<Button name="3" handleClick={this.addToInput} />
						<Button name="+" handleClick={this.addToInput} />
					</div>
					<div className="row">
						<Button name="." handleClick={this.addToInput} />
						<Button name="0" handleClick={this.addToInput} />
						<Button name="=" handleClick={() => this.handleEqual()} />
						<Button name="-" handleClick={this.addToInput} />
					</div>
					<div className="row">
						<ClearButton handleClear={() => this.setState({ input: "" })}>
							Clear
            </ClearButton>
					</div>

				</div>
			</div>
		);
	}
}

export default App;
