export interface Post {
  _id: string;
  banner?: string | undefined;
  title: string;
  text: string;
  likes: number;
  tag: string;
  owner: string;
  date: string;
}
