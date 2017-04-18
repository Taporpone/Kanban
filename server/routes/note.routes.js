import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const noteRouter = new Router({mergeParams: true});

noteRouter.route('/notes').post(NoteController.addNote);
noteRouter.route('/notes/:noteId').put(NoteController.updateNote);

export default noteRouter;
