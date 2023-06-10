import { constants, difficulties, endpoint } from "../utility/constants";

export abstract class BaseComponent {
  public get constants() {
    return constants;
  }

  public get endpoints() {
    return endpoint;
  }

  public get difficulties() {
    return difficulties;
  }
}
