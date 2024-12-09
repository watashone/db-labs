import ApiError from "./apiError.js";

class Validator {
    validateId = function (id) {
        if (!id || isNaN(id) || id <= 0) {
            throw new ApiError('Invalid or missing user ID', 400);
        }
        return id;
    };

    validateUserData = function (data) {
        const {id, name, password, email, creationDate, lastLoginDate, roleId} = data;
        if (!id || !name || !password || !email || !creationDate || !lastLoginDate || !roleId) {
            throw new ApiError("All required fields must be provided", 400);
        }
        return {id, name, password, email, creationDate, lastLoginDate, roleId};
    };

    validateSessionData = function (data) {
        const {id, login_time, logout_time, User_id} = data;
        if (!id || !login_time || !logout_time || !User_id) {
            throw new ApiError("All required fields must be provided", 400);
        }
        return {id, login_time, logout_time, User_id};
    }

    async validateEmail(serviceMethod, email) {
        const userByEmail = await serviceMethod(email);
        if (userByEmail) {
            throw new ApiError("Email already in use", 400);
        }
    }

    async validateRole(serviceMethod, role) {
        const roleExists = await serviceMethod(role);
        if (!roleExists) {
            throw new ApiError("Role does not exist", 400);
        }
    }

    async validateUser(serviceMethod, user) {
        const userExists = await serviceMethod(user);
        if (!userExists) {
            throw new ApiError("User does not exist", 400);
        }
    }

    async checkEntityById(serviceMethod, id, entityName = "Entity") {
        const entity = await serviceMethod(id);
        if (!entity) {
            throw new ApiError(`${entityName} with ID ${id} not found`, 404);
        }
        return entity;
    };
}

export default new Validator();