import * as App from "./app"

const { scene } = App.setup()

const vertices = []

for ( let d = 1; d <= 5; d++ ) {

	vertices.push( Math.cos( d ), 0, 0 )
}

scene.add( App.drawPoints( vertices, 0xffffff ) )

scene.add( App.drawLine( vertices, 0xffff00 ) ) // Line helper
