import asyncHandler from "../utils/asyncHandler.js"
import UserService from "../services/UserService.js"
import ApiError from "../utils/apiError.js";
import transformData from "../utils/transformUserData.js";
import Validator from "../utils/Validator.js";

class UserController {
    createUser = asyncHandler(async (req, res) => {
        const data = transformData(req.body);
        const {id, email, roleId} = Validator.validateUserData(data);

        const userById = await UserService.getOneUserById(id);
        if (userById) {
            throw new ApiError("User already exists", 400)
        }

        const userByEmail = await UserService.getOneUserByEmail(email);
        if (userByEmail) {
            throw new ApiError("Email already in use", 400);
        }

        const roleExists = await UserService.roleExists(roleId);
        if (!roleExists) {
            throw new ApiError("Role does not exist", 400);
        }

        await UserService.createUser(data);
        res.status(201).json(`User with ID ${id} successfully created`);
    });

    getUsers = asyncHandler(async (req, res) => {
        const users = await UserService.getUsers();
        if (!users || users.length === 0) {
            throw new ApiError('No users found', 404);
        }
        res.status(200).json(users)
    })

    getOneUser = asyncHandler(async (req, res) => {
        const id = Validator.validateId(req.params.id);
        const user = await Validator.checkEntityById(UserService.getOneUserById, id, "User");
        res.status(200).json(user);
    })

    updateUser = asyncHandler(async (req, res) => {
        const data = transformData(req.body);
        const {id} = Validator.validateUserData(data)

        await Validator.checkEntityById(UserService.getOneUserById, id, "User");
        await UserService.updateUser(data);
        res.status(200).json(`User with ID ${id} successfully updated`);
    })

    deleteUser = asyncHandler(async (req, res) => {
        const id = Validator.validateId(req.params.id);

        await Validator.checkEntityById(UserService.getOneUserById, id, "User");
        await UserService.deleteUser(id);
        res.status(200).json(`User with ID ${id} successfully deleted`);
    })
}

export default new UserController();