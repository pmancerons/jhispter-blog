export interface IPost {
  id: number;
  title?: string | null;
  body?: string | null;
  author?: string | null;
}

export type NewPost = Omit<IPost, 'id'> & { id: null };
