import Arena from "@colyseus/arena";
import { monitor } from "@colyseus/monitor";
import { LobbyRoom } from "colyseus";
/**
 * Import your Room files
 */
import { MyRoom } from "./rooms/MyRoom";
import { OneOrTwo } from "./rooms/OneOrTwo";

export default Arena({
  getId: () => "Your Colyseus App",

  initializeGameServer: (gameServer) => {
    /**
     * Define your room handlers:
     */
    gameServer.define("lobby", LobbyRoom);
    gameServer
      .define("onedollar", OneOrTwo, { type: "onedollar" })
      .enableRealtimeListing();
    gameServer
      .define("fivedollar", OneOrTwo, { type: "fivedollar" })
      .enableRealtimeListing();
    gameServer
      .define("tendollar", OneOrTwo, { type: "tendollar" })
      .enableRealtimeListing();
    gameServer
      .define("twentydollar", OneOrTwo, { type: "twentydollar" })
      .enableRealtimeListing();
    gameServer
      .define("hundred", OneOrTwo, { type: "hundred" })
      .enableRealtimeListing();
    gameServer
      .define("thousanddollar", OneOrTwo, { type: "thousanddollar" })
      .enableRealtimeListing();
  },

  initializeExpress: (app) => {
    /**
     * Bind your custom express routes here:
     */
    app.get("/", (req, res) => {
      res.send("It's time to kick ass and chew bubblegum!");
    });

    /**
     * Bind @colyseus/monitor
     * It is recommended to protect this route with a password.
     * Read more: https://docs.colyseus.io/tools/monitor/
     */
    app.use("/colyseus", monitor());
  },

  beforeListen: () => {
    /**
     * Before before gameServer.listen() is called.
     */
  },
});
