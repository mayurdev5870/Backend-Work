const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        const userRole = req.user.role; // Assuming req.user is set after authentication
        if (!allowedRoles.includes(userRole.toLowerCase())) {
            return res.status(403).json({ message: 'Access denied: insufficient permissions' });
        }
        next();
    };
}

module.exports = authorizeRoles;