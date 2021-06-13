class Stone {
    constructor(x,y){
        var options = {
            restitution: 0.5,
            denstiy: 12,
            friction: 2
        }
        this.body = Bodies.rectangle(x,y,100, 150, options)
        this.width = 100
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
        stroke("grey")
        fill("grey")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}