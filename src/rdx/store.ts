import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer/index';

export const store = configureStore({ reducer });
