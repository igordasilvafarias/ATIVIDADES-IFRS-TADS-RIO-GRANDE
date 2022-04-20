const express = require('express');
const CheckPoll = require('../../use-cases/CheckPoll');
const CreatePoll = require('../../use-cases/CreatePoll');

const create = (request, response) => {
    //INPUT
    const pollData = request.body;

    //TREATMENT
    try {
        const pollID = CreatePoll(pollData);
        response.json({id: pollID});
    } catch (error) {
        response.status(400).json({msg: error.message});
    }

    //RESPONSE
}

const getPoll = async (request, response) => {
    
    //INPUT
    const id = request.params.id;
    
    //TREATMENT
    const poll = await CheckPoll(id);

    //RESPONSE
    response.json(poll);

}

module.exports = {create, getPoll}