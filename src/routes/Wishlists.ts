/* eslint-disable @typescript-eslint/no-misused-promises */
import StatusCodes from "http-status-codes";
import { Request, Response, Router } from "express";

import WishlistDao from "@daos/Wishlist/WishlistDao.mock";

const wishlistDao = new WishlistDao();
const { CREATED, OK } = StatusCodes;

export const wishlistRouter = Router();

/**
 * Get all wishlists.
 *
 * @param req
 * @param res
 * @returns
 */
export async function getAll(req: Request, res: Response) {
  const wishlists = await wishlistDao.getAll();
  res.status(OK).json({ wishlists });
  return;
}

wishlistRouter.get("/", getAll);

/**
 * Get one wishlist.
 *
 * @param req
 * @param res
 * @returns
 */
export async function getOne(req: Request, res: Response) {
  const { uniqueId } = req.params;
  const wishlist = await wishlistDao.getOne(uniqueId);
  return res.status(OK).json({ wishlist });
}

wishlistRouter.get("/:uniqueId", getOne);

/**
 * Add one wishlist.
 *
 * @param req
 * @param res
 * @returns
 */
export async function createOne(req: Request, res: Response) {
  const { wishlist } = req.body;
  await wishlistDao.add(<never>wishlist);
  return res.status(CREATED).end();
}

wishlistRouter.post("/", createOne);

/**
 * Update one wishlist.
 *
 * @param req
 * @param res
 * @returns
 */
export async function updateOne(req: Request, res: Response) {
  const { wishlist } = req.body;
  const { uniqueId } = req.params;

  await wishlistDao.update(uniqueId, <never>wishlist);
  return res.status(OK).end();
}

wishlistRouter.put("/:uniqueId", updateOne);

/**
 * Delete one wishlist.
 *
 * @param req
 * @param res
 * @returns
 */
export async function deleteOne(req: Request, res: Response) {
  const { uniqueId } = req.params;
  await wishlistDao.delete(uniqueId);
  return res.status(OK).end();
}

wishlistRouter.delete("/:uniqueId", deleteOne);
