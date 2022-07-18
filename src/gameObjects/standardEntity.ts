
export class StandardEntity extends Entity {

  constructor(model: GLTFShape, transform: TranformConstructorArgs) {
    super();
    this.addComponent(model)
    this.addComponent(transform)
    engine.addEntity(this)
  }
}