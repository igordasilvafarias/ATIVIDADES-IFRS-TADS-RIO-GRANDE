const express = require('express');
const AddVote = require('../../use-cases/AddVote');

const addVote = async (request, response) => {
    //INPUT
    const voteData = request.body;
    const id = request.params.pollid;

    //TREATMENT
    const result = await AddVote(id, voteData);

    //RESPONSE
    if(!result.success){
        return response.status(400).json({error: result.msg});
    }

    return response.json("OK");

}

module.exports = {addVote}