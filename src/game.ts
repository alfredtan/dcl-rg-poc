import * as utils from '@dcl/ecs-scene-utils'
import { Dialog, DialogWindow, NPC } from '@dcl/npc-scene-utils'

let isNpcChatting = false

const welcomeDialog: Dialog[] = [
  {
    text: "Hello! Welcome to Hogarth's Decentraland",
    isEndOfDialog: true
  }
]



// grass
const grass = new Entity()
const gshape = new GLTFShape('models/floor/FloorBaseGrass_01.glb')
gshape.withCollisions = true
gshape.isPointerBlocker = true
gshape.visible = true

grass.addComponentOrReplace(gshape)
grass.addComponentOrReplace(new Transform(
  {
    position: new Vector3(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  }
))

const scene = new Entity()
scene.addComponent(new GLTFShape("models/hww_base_bare.glb"))
scene.addComponent(new Transform({
  position: new Vector3(8, 0, 8)
}))

// const lifts = new Entity()
// lifts.addComponent(new GLTFShape("models/hww_3_lift_animated.glb"))
// lifts.addComponent(new Transform({
//   position: new Vector3(8, 0, 8)
// }))


const lift_1 = new Entity()
lift_1.addComponent(new GLTFShape("models/Lift_1.glb"))
lift_1.addComponent(new Transform({
  position: new Vector3(8, 0, 8)
}))

const lift_2 = new Entity()
lift_2.addComponent(new GLTFShape("models/Lift_2.glb"))
lift_2.addComponent(new Transform({
  position: new Vector3(8, 0, 8)
}))


const lift_3 = new Entity()
lift_3.addComponent(new GLTFShape("models/Lift_3.glb"))
lift_3.addComponent(new Transform({
  position: new Vector3(8, 0, 8)
}))

// ======================================================================
// blender coords for npc
// x: 4, y:2.5, z: 1.2   // blender
// x: +1, y:-0.8, z: +6.3 // diff
// x: 5, y:1.7, z: 7.5  // actual
const npc_container = new Entity()
npc_container.addComponent(new Transform({
  position: new Vector3(5, 1.7, 7.5),
  // position: new Vector3(5, 1.7, 7.5),
  rotation: Quaternion.Euler(0, 60, 0),
  scale: new Vector3(1.4, 1.4, 1.4)
}))

const npc = new Entity()
npc.addComponent(new GLTFShape("models/hww_iRobot_stash_animation.glb"))
npc.setParent(npc_container)

const npc_collidor = new Entity()
npc_collidor.addComponent(new BoxShape())
// npc_collidor.addComponent(new Transform({
//   position: new Vector3(5, 1.7, 7.5),
//   rotation: Quaternion.Euler(0, 60, 0),
//   scale: new Vector3(1.4, 1.4, 1.4)
// }))
npc_collidor.addComponent(new Transform({
  position: new Vector3(0, 1.2, -1),
  scale: new Vector3(.5, 1.1, .5)
}))
npc_collidor.getComponent(BoxShape).isPointerBlocker = false
npc_collidor.setParent(npc_container)
// npc.addComponent(new Transform({
//   position: new Vector3(5, 1.7, 7.5),
//   rotation: Quaternion.Euler(0, 60, 0),
//   scale: new Vector3(1.4, 1.4, 1.4)
// }))

const npc_animator = npc.addComponent(new Animator())
npc_animator.addClip(new AnimationState('robot_wave'))
npc_animator.getClip('robot_wave').looping = false;
npc_animator.getClip('robot_wave').play()

const dialogWindow = new DialogWindow()

npc_collidor.addComponent(new OnPointerDown(() => {

  if (!dialogWindow.isDialogOpen) isNpcChatting = false;

  if (!isNpcChatting) {
    npc_animator.getClip('robot_wave').play()
    dialogWindow.openDialogWindow(welcomeDialog, 0)
    isNpcChatting = true;
  }
  else {
    dialogWindow.closeDialogWindow()
    isNpcChatting = false
  }

}))


// x: -0.01, y: 1.7, z: -7
// x: +1, y:-0.8, z: +6.3 // diff
// x: 1, y : .9, z: -0.7
// lobby video
const lobby_video = new Entity()
lobby_video.addComponent(new PlaneShape())
lobby_video.addComponent(new Transform({
  position: new Vector3(8.2, 3.5, 15.14),
  scale: new Vector3(5.8, 2.7, 1)
}))
engine.addEntity(lobby_video)



const mann = new Entity()
mann.addComponent(new GLTFShape("models/hww_mannequin_coord000.glb"))
mann.addComponent(new Transform({
  position: new Vector3(7.9, 3.3, 4)
}))
mann.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(0, 30, 0)))

// engine.addEntity(grass)

engine.addEntity(mann)
engine.addEntity(scene)
engine.addEntity(lift_1)
engine.addEntity(lift_2)
engine.addEntity(lift_3)
engine.addEntity(npc_container)

