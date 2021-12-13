export interface IWishlist {
  created_at: Date;
  updated_at: Date;
  name: string;
  uniqueId: string;
  products: [];
}

export class Wishlist implements IWishlist {
  public created_at: Date;
  public updated_at: Date;
  public name: string;
  public uniqueId: string;
  public products;

  constructor(
    createdAt?: Date,
    updatedAt?: Date,
    name?: string,
    uniqueId?: string,
    products?: []
  ) {
    this.created_at = createdAt || new Date();
    this.updated_at = updatedAt || new Date();
    this.name = name || "";
    this.uniqueId = uniqueId || "";
    this.products = products || [];
  }

  static from(wishlist: IWishlist): Wishlist {
    return new Wishlist(
      wishlist.created_at,
      wishlist.updated_at,
      wishlist.name,
      wishlist.uniqueId,
      wishlist.products
    );
  }
}
