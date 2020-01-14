exports.logger = (req, res, next)=> {
    req.hello = 'Hello from FBW3'
    req.hostInfo = {
        "your method":req.method, 
        "your protocol": req.protocol , 
        "Server ip":req.get('host') ,
        "your ip":req.ip,
        "your originalUrl":req.originalUrl
    }
    console.log('logger middleware is running')
    console.log(`${req.method} ${req.protocol} ${req.get('host')} ${req.originalUrl}`)
    next()
}