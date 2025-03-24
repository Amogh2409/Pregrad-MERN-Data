const jwt = require('jsonwebtoken');

const authmiddleware = (req, res, next) => {
    const token = req.header.authorization?.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'Unauthorized' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    }
    catch(err){
        res.status(401).json({error: 'Invalid token'});
    }
    
}


module.exports = authmiddleware;


// Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR..."
// { "id": "12345", "username": "JohnDoe", "iat": 1712345678, "exp": 1712359278 }
