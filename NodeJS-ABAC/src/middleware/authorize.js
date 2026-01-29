export const authorize = (policy, resource) => (req, res, next) => {
    const user = req.user;
    if (!policy(user, resource)) {
        return res.status(403).json({ message: 'Access denied: policy violation' });
    }
    next();
};
