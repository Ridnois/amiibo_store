export interface IAmiibo {
  amiiboSeries: string;
  gameSeries: string;
  image: string;
  name: string;
  character: string;
  type: string;
}

export interface IAmiiboCollection {
  title: string;
  collection: IAmiibo[];
}

export interface AmiiboStoreCollections {
  [key: string]: IAmiiboCollection[];
}

export interface AmiiboStoreState {
  collections: AmiiboStoreCollections[];
  status: 'idle' | 'loading' | 'failed';
}
