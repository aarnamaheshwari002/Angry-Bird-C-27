class chain{

constructor (spriteA, spriteB){

    var options = {

        spriteA: spriteA,
        spriteB: spriteB,
        stiffness: 0.04,
        length: 10
       
           }
       this.chain = Constraint.create(options)
       World.add(world, this.chain)

}
display(){
    var pointA = this.chain.spriteA.position
    var pointB = this.chain.spriteB.position
    line(pointA.x, pointA.y, pointB.x, pointB.y);

}
}