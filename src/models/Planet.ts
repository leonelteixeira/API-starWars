import { prop } from "@typegoose/typegoose";

class Planet {
  @prop()
  public name?: string;

  @prop()
  public climate?: string;

  @prop()
  public terrain?: string;

  // @prop()
  // public moviesAppearance?: string;
}
export default Planet
