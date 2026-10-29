const {sendErrorResponse, sendResponse} = require('../utils/response');

exports.getUser = (req, res, next)=>{
    const user = req.params.user;

    if(user>10){
        return sendErrorResponse(res, {message: 'user not found', statusCode:404});
    }
    return sendResponse(res, user, 200);
}

exports.createUser = (req, res, next)=>{
    const {name, email} = req.body || {};

    if(!name || !email){
        return sendErrorResponse(res, {message:'name and Email are require', statusCode:404});
    }
    const user ={
        id: 1,
        name,
        email
    }
    return sendResponse(res, user, 201);
}