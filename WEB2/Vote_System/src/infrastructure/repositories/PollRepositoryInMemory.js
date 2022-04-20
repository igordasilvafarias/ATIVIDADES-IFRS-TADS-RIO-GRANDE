
polls = [];

const connect = async () => {
    console.log("FAKE CONNECTION WITH MEMORY DATABASE");
}

const createPoll = poll => {
    console.log("POLL CREATED WITH DATABASE IN MEMORY!");
    console.log(poll);
    polls.push(poll);
}

const getPollById = id => {
    for (let i = 0; i < polls.length; i++) {
        if (polls[i].id == id) {
            return polls[i];
        }
    }
    return null;
}

const update = poll => {
    for (let i = 0; i < polls.length; i++) {
        if (polls[i].id == poll.id) {
            polls[i] = poll;
            break;
        }
    }
}

module.exports = {createPoll, getPollById, update, connect};