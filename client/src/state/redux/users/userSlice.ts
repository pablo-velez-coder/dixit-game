import { createSlice } from '@reduxjs/toolkit'

export interface User {
    id: number | null;
    name: string | null;
    loading:boolean;
    playersQuantity: number | null;
    allPlayers: any[];
    currentSession: number | null
}

const initialState = {
  id: null,
  name: null,
  loading: false,
  playersQuantity: null,
  allPlayers: [],
  selectedNumPlayers: 3,
  currentSession: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState as User,
  reducers: {
    userAdded(state, action) {
      state.id = action.payload.id
      state.name =  action.payload.name
      state.loading = true
    },
    removeUser(state) {
      state.id = null
      state.name = null
    },
    stopLoading(state){
      state.loading = false
    },
    startLoading(state){
      state.loading = true
    },
    savePlayersQuantity(state, action){
      state.playersQuantity = action.payload.quantity
      state.currentSession = action.payload.gameSessionId

    },
    saveCurrentSession(state, action){
      state.currentSession = action.payload.gameSessionId
    },
    saveAllPlayers(state, action){
      state.allPlayers = action.payload.players
    }
  }
})
//type Next = (action: AnyAction) => void | Promise<void>;
//MIDDLEWARE
/* export const localStorageMiddleware = ({ getState }: { getState: RootState}) => {
  return (next: Next )=> (action: AnyAction) => {
    const result = next(action);
    localStorage.setItem('applicationState', JSON.stringify(getState()));
    return result;
  };
};

export const reHydrateStore = () => {
  if (localStorage.getItem('applicationState') !== null) {
    return JSON.parse(localStorage.getItem('applicationState') || '') ; // re-hydrate the store
  }
}; */

export const { userAdded, startLoading,saveCurrentSession, removeUser,saveAllPlayers, stopLoading, savePlayersQuantity } = userSlice.actions
export default userSlice.reducer