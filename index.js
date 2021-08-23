async function main() {
	const resp = await fetch('./not-important/hello.json');
	const respText = await resp.json();
	console.log(respText.message);
	document.body.innerText = respText.message
}

main();
