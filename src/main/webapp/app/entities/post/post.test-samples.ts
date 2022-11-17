import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 35989,
  body: '../fake-data/blob/hipster.txt',
  author: 'Fantastic',
};

export const sampleWithPartialData: IPost = {
  id: 93202,
  title: 'Seychelles',
  body: '../fake-data/blob/hipster.txt',
  author: 'Reverse-engineered Agent intelligence',
};

export const sampleWithFullData: IPost = {
  id: 32712,
  title: 'CSS Stravenue',
  body: '../fake-data/blob/hipster.txt',
  author: 'Baby program',
};

export const sampleWithNewData: NewPost = {
  body: '../fake-data/blob/hipster.txt',
  author: 'Denar',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
