import { Router } from "express";
import location from "../modules/locations/routes";
export default () => {
  const app = Router();
  location(app);

  return app;
};
