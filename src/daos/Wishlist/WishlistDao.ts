import { IWishlist } from "@entities/Wishlist";

export interface IWishlistDao {
  getOne: (uniqueId: string) => Promise<IWishlist | null>;
  getAll: () => Promise<IWishlist[]>;
  add: (wishlist: IWishlist) => Promise<void>;
  update: (uniqueId: string, wishlist: IWishlist) => Promise<void>;
  delete: (uniqueId: string) => Promise<void>;
}

class WishlistDao implements IWishlistDao {
  /**
   * @param email
   */
  public getOne(uniqueId: string): Promise<IWishlist | null> {
    // TODO
    return Promise.resolve(null);
  }

  /**
   *
   */
  public getAll(): Promise<IWishlist[]> {
    // TODO
    return Promise.resolve([]);
  }

  /**
   *
   * @param user
   */
  public async add(wishlist: IWishlist): Promise<void> {
    // TODO
    return Promise.resolve(undefined);
  }

  /**
   *
   * @param user
   */
  public async update(uniqueId: string, wishlist: IWishlist): Promise<void> {
    // TODO
    return Promise.resolve(undefined);
  }

  /**
   *
   * @param id
   */
  public async delete(uniqueId: string): Promise<void> {
    // TODO
    return Promise.resolve(undefined);
  }
}

export default WishlistDao;
