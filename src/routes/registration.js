import { Router } from "express";

import { getRegistrations } from "../controllers/registration.js";

export const router = Router();

// @desc     Get Notion User Registrations
// @route    POST /api/v1/registrations
// @access   Public
// @method  getRegistrations
router.get("/registrations", getRegistrations);