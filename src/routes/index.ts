import { Router } from "express";
import { wishlistRouter } from "./Wishlists";

// Base router (serves all others)
const baseRouter = Router();
baseRouter.use("/wishlists", wishlistRouter);

export default baseRouter;
