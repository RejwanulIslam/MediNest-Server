import { auth as betterAuth } from "../lib/auth";
export var userRole;
(function (userRole) {
    userRole["user"] = "USER";
    userRole["seler"] = "SELER";
    userRole["admin"] = "ADMIN";
})(userRole || (userRole = {}));
const auth = (...role) => {
    return async (req, res, next) => {
        const session = await betterAuth.api.getSession({
            headers: req.headers
        });
        if (!session) {
            return res.send("You are not authroize");
        }
        req.user = {
            id: session.user.id,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            role: session.user.role,
            status: session.user.status
        };
        if (role.length && !role.includes(req.user.role)) {
            return res.status(403).json({
                message: "forbidden access"
            });
        }
        next();
    };
};
export default auth;
//# sourceMappingURL=auth.js.map