// Import Actions
import { CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE } from './NoteActions';

// Initial State
const initialState = [];

const NoteReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case CREATE_NOTE:
      return [...state, action.note];
    
    case UPDATE_NOTE:
      return state.map((note) => note.id === action.id ? { ...note, ...updatedNote} : note);

    case DELETE_NOTE:
      return state.filter((note) => note.id !== action.id);
      
    default:
      return state;
  }
};

export default NoteReducer;
