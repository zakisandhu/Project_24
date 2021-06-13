class Iron {
    constructor(x,y){
        var options = {
            restitution: 0.2,
            denstiy: 16,
            friction: 2
        }
        this.body = Bodies.rectangle(x,y,150, 150, options)
        this.width = 150
        this.height = 150
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle

        push()
        translate(pos.x, pos.y);
        rotate(angle)
        strokeWeight(5)
        stroke("black")
        fill("black")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}