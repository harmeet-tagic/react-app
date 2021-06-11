import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.currentUser || initialState;

export const selectUser = createSelector([selectSlice], state => state.user);
