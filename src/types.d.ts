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
