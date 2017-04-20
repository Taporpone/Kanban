// Export Constants
export const CREATE_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DLETE_NOTE = 'DELETE_NOTE';
// Export Actions
export function createNote(note){
    return {
        type: CREATE_NOTE,
        note: {
            id: uuid.v4(),
            ...note
        }
    };
};

export function updateNote(updatedNote) {
    return {
        type: UPDATE_NOTE,
        ...updatedNote
    };
};

export function deleteNote(id) {
    return {
        type: DELETE_NOTE,
        id
    };
};

