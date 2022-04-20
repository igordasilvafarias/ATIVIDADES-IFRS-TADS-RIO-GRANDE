const server = require('./infrastructure/server/server');

server();



/* const createPoll = require('./use-cases/CreatePoll');
const AddVote = require('./use-cases/AddVote');
const CheckPoll = require('./use-cases/CheckPoll');

let date = new Date(2021, 12, 31, 16, 00);

let pollId = createPoll({
    name: "Enquete 1",
    description: "Descricao de uma enquete",
    finalDate: date,
    blind: false,

    options: {
        'opt_A': {description: "Opcao A"},
        'opt_B': {description: "Opcao B"}
    }
        
    
});

console.log(CheckPoll(pollId));
console.log(AddVote(pollId, {cpf: '123', option: 'opt_B'}));
console.log(CheckPoll(pollId)); */
/* console.log(AddVote(pollId, {cpf: '123', option: 'opt_B'}));

console.log(database.getPollById(pollId)); */

/* let poll = Poll.create({
    name: "Enquete 1",
    description: "Descricao de uma enquete",
    finalDate: new Date(),
    blind: false,

    options: [
        {name: "opt_A", quantity: 0, description: "Opcao A"},
        {name: "opt_B", quantity: 0, description: "Opcao B"}
    ]

});

console.log(poll);

let poll1 = new Poll(poll);

console.log(poll1); */