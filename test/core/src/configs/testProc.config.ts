import { Config } from "../../../../dist";

@Config("proc")
export class DevConfig {
  public db = {
    host: "127.0.0.1",
    port: 3306,
  };
}
