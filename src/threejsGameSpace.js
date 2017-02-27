
function GameSpace(renderwidth, renderheight) {

	width = renderwidth;
	height = renderheight;

	container = document.body;

	renderer = new THREE.WebGLRenderer();
	scene = new THREE.Scene();

	console.log("Hey: " + this.scene);

}

GameSpace.prototype._findCameraInScene = function() {

	var camera = null;

	var length = self.scene.children.length 

	for (var i = 0; i < length; i++) {

		if (self.scene.children[i].type.match("Camera")) {

			camera = self.scene.children[i];

		};

	};

	return camera 

}

GameSpace.prototype.add = function(anObject) {

	console.log(self.scene)

	self.scene.add(anObject);

}

GameSpace.prototype.show = function() {

	self.renderer.setSize(self.width, self.height)
	self.container.appendChild(self.renderer.domElement)

}

GameSpace.prototype.go = function() {

	this.renderer.render(this.scene, self._findCameraInScene())

}
