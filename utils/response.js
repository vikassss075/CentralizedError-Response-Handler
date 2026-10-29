const sendErrorResponse = (res, err)=>{
    const statusCode = err.statusCode;
    const message = err.message;

    return res.status(statusCode).json({
            message: message,
            status: false
        });
}


const sendResponse = (req, data, statusCode)=>{
    res.status(statusCode).json({
        data: data,
        status: true
    })
}

module.exports ={
    sendErrorResponse,
    sendResponse
}