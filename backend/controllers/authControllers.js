import User from '../models/userModel.js';

const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        if(!email || !password || !role) {
            return res.status(400).json({ success: false, message: 'Missing Information' });
        }

        const user = await User.findOne({ email }).select('+password');

        if(!user) {
            return res.status(400).json({ success: false, message: 'No account with the entered email found, please create a account' });
        }

        if(user.role != role) {
            return res.status(400).json({ success: false, message: 'The entered user role is wrong' });
        }

        const isPasswordCorrect = await user.comparePassword(password);

        if(!isPasswordCorrect) {
            return res.status(400).json({ success: false, message: 'The entered password is wrong' });
        }

        const token = await user.createJWT();

        const resUser = user.toObject();

        resUser.password = undefined;

        res.status(200).json({ success: true, token, userData: resUser, message: 'Logged in successfully' });
    } catch (err) {
        console.error(err);
    }
}

const signup = async (req, res) => {
    try {
        const { email, name, password, role } = req.body;

        if(!email || !password || !role || !name) {
            return res.status(400).json({ success: false, message: 'Missing information' });
        }

        const user = await User.findOne({ email });

        if(user) {
            return res.status(400).json({ success: false, message: 'Auser with this email already exists' });
        }

        const newUser = await User.create({ name, email, password, role });

        const token = newUser.createJWT();

        newUser.password = undefined;

        res.status(200).json({ success: true, token, userData: newUser, message: 'Account created succesfully' });
    } catch (err) {
        console.error(err);
    }
}

export { login, signup }