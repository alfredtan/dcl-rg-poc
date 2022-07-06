
const scene = new Entity()
scene.addComponent(new GLTFShape("models/hww_collision_test_02.glb"))
scene.addComponent(new Transform({
  position: new Vector3(8, 0, 8)
}))

engine.addEntity(scene)