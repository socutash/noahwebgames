
function Cube(length) {

	this.length = length;

	this.cubeGeometry = new THREE.BoxGeometry(
		this.length,
		this.length,
		this.length
	);

	this.cubeMaterial = new THREE.MeshBasictMaterial(

		{
			color: 0xCC0000;
		}
	);

	this.cube = new THREE.Mesh(

		this.cubeGeometry,
		this.cubeMaterial

	);

	_context = this

};

Cube.prototype.position =  function(x, y, z) {

	_context.cube.position.x = x;
	_context.cube.position.y = y;
	_context.cube.position.z = z;

};
