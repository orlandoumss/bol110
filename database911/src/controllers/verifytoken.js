const jwt = require('jsonwebtoken');
const config = require('../../config');

function verifyToken (req, res, next){
    const token = req.headers['x-access-token'];
    //console.log(config.secret);
    if( !token ) {
        return res.status(401).json({
            auth: false,
            message: 'No tiene acceso ...'
        });
    }
    const decode = jwt.verify(token, config.secret);
    //console.log(decode);
    req.userId = decode.id;
    //console.log(req.userId);
    next();
}
module.exports = verifyToken;