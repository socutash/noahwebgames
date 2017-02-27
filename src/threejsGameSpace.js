
function GameSpace(renderwidth, renderheight) {

	width = renderwidth;
	height = renderheight;

	container = document.body;

	renderer = new THREE.WebGLRenderer();
	scene = new THREE.Scene();

	console.log("Hey: " + self.scene);

}

// Wonky that renderer needs to be told about both the sceene *and( the camera
// Make sure there aren't cases where you attach more than one camera.
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

	self.renderer.render(self.scene, self._findCameraInScene())

}
