import asyncHandler from "../utils/asyncHandler.js"
import SessionService from "../services/SessionService.js";
import Validator from "../utils/Validator.js";
import ApiError from "../utils/apiError.js";

class SessionController {
    createSession = asyncHandler(async (req, res) => {
        const data = req.body;
        const {id, User_id} = Validator.validateSessionData(data);

        const session = await SessionService.getOneSession(id);
        if (session) {
            throw new ApiError("Session already exists", 400)
        }

        const userExists = await SessionService.userRoleExists(User_id);
        if (!userExists) {
            throw new ApiError("Role does not exist", 400);
        }

        await SessionService.createSession(data);
        res.status(201).json(`Session with ID ${id} successfully created`);
    });

    getSessions = asyncHandler(async (req, res) => {
        const sessions = await SessionService.getSessions();
        if (!sessions || sessions.length === 0) {
            throw new ApiError('No sessions found', 404);
        }
        res.status(200).json(sessions)
    })

    getOneSession = asyncHandler(async (req, res) => {
        const id = Validator.validateId(req.params.id);
        const session = await Validator.checkEntityById(SessionService.getOneSession, id, "Session");
        res.status(200).json(session);
    })

    updateSession = asyncHandler(async (req, res) => {
        const data = req.body;
        const {id} = Validator.validateSessionData(data)

        await Validator.checkEntityById(SessionService.getOneSession, id, "Session");
        await SessionService.updateSession(data);
        res.status(200).json(`Session with ID ${id} successfully updated`);
    })

    deleteSession = asyncHandler(async (req, res) => {
        const id = Validator.validateId(req.params.id);

        await Validator.checkEntityById(SessionService.getOneSession, id, "Session");
        await SessionService.deleteSession(id);
        res.status(200).json(`Session with ID ${id} successfully deleted`);
    })
}

export default new SessionController();