export const isRole = (role) => {
  return (req, res, next) => {
    const userRole = req.user.role;

    if (!userRole) {
      return res.status(401).json({ message: "User role not found" });
    }

    if (role !== userRole) {
      return res.status(401).json({ message: "Access denied" });
    }

    next();
  };
};
