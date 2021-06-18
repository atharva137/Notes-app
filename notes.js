const fs = require("fs");
const chalk = require("chalk");
const getNotes = function () {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicatesNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicatesNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("note saved"));
  } else {
    console.log(chalk.red.inverse("title already taken"));
  }
};
const removeNote = (title) => {
  const notes = loadNotes();

  const updatedNotes = notes.filter((note) => {
    return note.title != title;
  });
  if (notes.length != updatedNotes.length) {
    saveNotes(updatedNotes);
    console.log(chalk.bgGreen.bold("title removed"));
  } else {
    console.log(chalk.bgRed.bold("title not found"));
  }
};
const listNotes = () => {
  console.log(chalk.green.inverse.bold("your notes"));
  const notes = loadNotes();

  notes.forEach((note) => {
    console.log(note.title);
  });
};
const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => {
    return note.title === title;
  });

  if(note){
      console.log(note.body);
  }else{
      console.log("title does not exist");
  }

};
const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote:readNote,
};
