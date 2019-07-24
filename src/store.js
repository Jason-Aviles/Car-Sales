import { createStore } from "redux";
import {rooterReducer} from './components/reducer/reducer'


export const store = createStore(rooterReducer);
