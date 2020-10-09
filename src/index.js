import "./styles/index.css";

class Main {
	constructor() {
		this.devName = document.getElementById("dev-name");
		this.devName.addEventListener("click", this.onClickDevName.bind(this));
	}

	onClickDevName() {
		window.open("https://github.com/adityasonel/webpack-starter-kit/", "_blank");
	}
}

new Main();
