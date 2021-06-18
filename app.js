 const notes = require('./notes.js');
 const chalk = require('chalk');
 const yargs = require('yargs');

//  const validator = require('validator');

// console.log(validator.isEmail("atharva@gmail.comn"));
//adding a note
yargs.command({
    command: 'add',
    description:'add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption:true,
            type: 'string',

        }
     },
    handler: function(argv){
        notes.addNote(argv.title,argv.body);
    }
})

// removing a note
yargs.command({
    command: 'remove',
    description:'remove a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type: 'string',
        }
    },
    handler: (argv)=>{
        notes.removeNote(argv.title);
    }
})

// showing lists of notes

yargs.command({
    command: 'list',
    discription:'listing the notes',
   
    handler: ()=>{
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    discription:'read a note',
    builder:{
        title : {
           describe: 'Note title',
           type: 'string',
           demandOption:true,
        }
        
    },
    handler: (argv)=>{
        notes.readNote(argv.title);
    }
})
console.log(yargs.argv);