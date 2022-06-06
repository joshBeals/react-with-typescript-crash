export interface IState {
    people: {
      name: string,
      age: number,
      url: string,
      note?: string
    }[]
};

export interface IProps {
  people: IState['people']
};