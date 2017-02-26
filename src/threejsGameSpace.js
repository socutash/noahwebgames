
function GameSpace(renderwidth, renderheight) {

	var width = renderwidth;
	var height = renderheight;

	const container = document.body

	const renderer = new THREE.WebGLRenderer()
	var scene = new THREE.Scene()

	console.log("Hey: " + this.scene)

}

GameSpace.prototype.add = function(anObject) {

	console.log(this.scene)

	this.scene.add(anObject);

}

GameSpace.prototype.show = function() {

	this.renderer.setSize(this.width, this.height)
	this.container.appendChild(this.renderer.domElement)

}
