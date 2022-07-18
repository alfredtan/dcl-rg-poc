
export class Floor extends Entity {

  constructor() {
    super()
    const gshape = new GLTFShape('models/floor/FloorBaseGrass_01.glb')
    gshape.withCollisions = true
    gshape.isPointerBlocker = true
    gshape.visible = true

    this.addComponentOrReplace(gshape)
    this.addComponentOrReplace(new Transform(
      {
        position: new Vector3(8, 0, 8),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      }
    ))

    engine.addEntity(this)
  }
}