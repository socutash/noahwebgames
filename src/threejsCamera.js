
function Camera(renderwidth, renderheight) {

	this.viewAngle = 45;
	this.aspect = renderwidth/renderheight;
	this.near = 0.1;
	this.far = 10000;

	this.camera =
    		new THREE.PerspectiveCamera(
        	this.viewAngle,
        	this.aspect,
        	this.near,
        	this.far
    		);

}

Camera.prototype.aspect = function(aspect) {

	this.camera.aspect = aspect;

}
