import "./styles/index.scss";

$(function () {
	console.log("Hello jQuery + bootstrap 4!");

	$("#dev-name").on("click", (event) =>
		window.open("https://github.com/adityasonel/webpack-starter-kit/", "_blank")
	);
});
