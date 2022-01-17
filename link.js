 class Link {
     constructor(corpo1 , corpo2){
         var lastlink = corpo1.body.bodies.length-2;
         this.link = Constraint.create(
            {
                bodyA:corpo1.body.bodies[lastlink],
                pointA:{x:0,y:0},
                bodyB:corpo2,
                pointB:{x:0,y:0},
                length:-10,
                stiffness:0.01
              }
         )
    World.add(engine.world,this.link);
     }
 }