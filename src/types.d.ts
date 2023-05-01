export interface IUser {
  avatar?: string;
  userName?: string;
}

export interface IElement {
  type: string;
  value?: string;
  src?: string | undefined;
}

export interface IArticle {
  _id: string;
  title: string;
  banner?: string;
  elements: IElement[];
  tags: string[];
  views: number;
  from: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IComment {
  _id: ObjectId;
  from: IUser;
  articleId: ObjectId;
  rating: number;
  text?: string;
  createdAt: Date;
  updatedAt: Date;
}


export interface IFavourite {
  _id: ObjectId;
  userId: ObjectId;
  articleId: ObjectId;
}