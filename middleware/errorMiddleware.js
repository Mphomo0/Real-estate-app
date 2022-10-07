const errorHandler = (error, _, res, next) => {
    //a bad status code i.e 2xx should not be sent as error response
    const statusCode = res.statusCode < 400 ? 500 : res.statusCode
    console.log('error middleware')

    res.status(statusCode)
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? null : error.stack,
    })
}

module.exports = { errorHandler }