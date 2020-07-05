import { sections } from '../data/directory';
const INITIAL_STATE = {
  sections,
};
export const directory = (state = INITIAL_STATE, action: any) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};
