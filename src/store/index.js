import { createStore } from "redux";
//import { Reducers } from "../reducers";
//import reducers from '../duck';
import form from "../duck/form";

export const store = createStore(form);