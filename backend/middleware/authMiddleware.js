import jwt from 'jsonwebtoken';

const authRoute = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(400).json({ success: false, message: 'No token provided' });
    }
    
    const token = authHeader.split(' ')[1];

     try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const { id, role } = decoded;

        req.user = { id, role };

        next();
    } catch (error) {
        console.error(err);
        return res.status(400).json({ success: false, message: 'You are not authorized to access this route' });
    }
}

export default authRoute;