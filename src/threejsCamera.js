
function Camera(renderwidth, renderheight) {

	this.viewAngle = 75;
	this.aspect = renderwidth/renderheight;
	this.near = 0.1;
	this.far = 1000;

	this.camera =
    		new THREE.PerspectiveCamera(
        	this.viewAngle,
        	this.aspect,
        	this.near,
        	this.far
    		);

	_cameracontext = this;

}

Camera.prototype.aspect = function(aspect) {

	_cameracontext.camera.aspect = aspect;

}

Camera.prototype.position = function(x, y, z) {

	_cameracontext.camera.x = x;
	_cameracontext.camera.y = y;
	_cameracontext.camera.z = z;

}
