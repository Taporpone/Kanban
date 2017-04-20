import Note from '../models/note';
import Lane from '../models/lane';
import uuid from 'uuid';

export function addNote(req, res) {
  if (!req.body.task) {
    res.status(403).end();
  }

  const newNote = new Note(req.body);

  newNote.id = uuid();
  newNote.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    Lane.findOne({ id: req.params.laneId })
      .then(lane => {
        lane.notes.push(saved);
        return lane.save()
      })
      .then(() => {
        res.json(saved);
      })
  })
}

export function updateNote(req, res) {
  if (!req.body.task) {
    res.status(403).end();
  }
  Note.findOne({ id: req.params.noteId }).exec((err, note) => {
    if (err) {
      res.status(500).send(err);
    }
    note.task = req.body.task;
    note.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ note: saved });
    });
  });
}

export function deleteNote(req, res) {
  Lane.findOne({ id: req.params.laneId }).exec((err, lane) => {
    if (err) {
      res.status(500).send(err);
    }
    lane.notes = lane.notes.filter(note => note.id != req.params.noteId);
    lane.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  });

  Note.findOne({ id: req.params.noteId }).exec((err, note) => {
    if (err) {
      res.status(500).send(err);
    }
    note.remove();
  })
  
  res.status(200).end();

}