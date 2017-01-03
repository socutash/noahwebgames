
var Circle = function(id) {
  this.id = id;
  this.element = null;

  this.eventPQ = new buckets.PriorityQueue()

   // this.event = subscribe
   // Add events to priority queue, use buckets.js PQ
}

Circle.prototype.init = function() {
  self.element = document.getElementById(this.id)
  console.log(this.id)

}

Circle.prototype.move = function() {
  snabbt(self.element, {
    position: [250, 75, 0],
    rotation: [Math.PI, 0, 0],
    // update() = self.moveInterrupt(self.eventPQ)
    duration: [1500],
    scale: [0.5, 0.5],
    easing: 'ease'
  });
}


