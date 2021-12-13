import { IWishlist } from "@entities/Wishlist";
import { IWishlistDao } from "./WishlistDao";
import MockDaoMock from "../MockDb/MockDao.mock";

class WishlistDao extends MockDaoMock implements IWishlistDao {
  public async getOne(uniqueId: string): Promise<IWishlist | null> {
    const db = await super.openDb();
    for (const wishlist of db.wishlists) {
      if (wishlist.uniqueId === uniqueId) {
        return wishlist;
      }
    }
    return null;
  }

  public async getAll(): Promise<IWishlist[]> {
    const db = await super.openDb();
    return db.wishlists;
  }

  public async add(wishlist: IWishlist): Promise<void> {
    const db = await super.openDb();
    db.wishlists.push(wishlist);
    await super.saveDb(db);
  }

  public async update(uniqueId: string, wishlist: IWishlist): Promise<void> {
    const db = await super.openDb();

    for (const _wishlist of db.wishlists) {
      if (_wishlist.uniqueId === uniqueId) {
        const index = db.wishlists.indexOf(_wishlist);
        db.wishlists[index] = wishlist;
        await super.saveDb(db);
        return;
      }
    }

    throw new Error("Wishlist not found");
  }

  public async delete(uniqueId: string): Promise<void> {
    const db = await super.openDb();

    for (const wishlist of db.wishlists) {
      if (wishlist.uniqueId === uniqueId) {
        const index = db.wishlists.indexOf(wishlist);
        db.wishlists.splice(index, 1);
        await super.saveDb(db);
        return;
      }
    }

    throw new Error("Wishlist not found");
  }
}

export default WishlistDao;
