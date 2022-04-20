const Vote = require('../entities/vote/Vote');
const Poll = require('../entities/poll/Poll');
const database = require('../infrastructure/repositories');

module.exports = async (id, voteData) => {

    const vote = Vote.create(voteData);

    const pollData = await database.getPollById(id);

    if(!pollData)
        return {success: false, msg: "Invalid POLL ID"};
        //return "Invalid POLL ID";

    const poll = new Poll(pollData);

    try {
        poll.addVote(vote);
    } catch (error) {
        return {success: false, msg: error.message};
        //return error;
    }
    
    await database.update(poll);
    
    return {success: true, msg: "OK!"};;

}