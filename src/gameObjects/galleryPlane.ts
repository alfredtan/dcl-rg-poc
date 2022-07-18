export class GalleryPlane extends Entity {
  constructor(transform: TranformConstructorArgs) {
    super();

    this.addComponent(new PlaneShape());
    this.addComponent(transform);

    engine.addEntity(this);
  }
}
