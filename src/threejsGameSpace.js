
function GameSpace(renderwidth, renderheight) {

	var width = renderwidth;
	var height = renderheight;

	const container = document.body

	const renderer = new THREE.WebGLRenderer()

}


GameSpace.prototype.show = function() {

	this.rendered.setSize(this.width, this.height)
	this.container.appendChild(this.renderer.domElement)

}
