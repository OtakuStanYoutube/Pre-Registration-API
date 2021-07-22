import { Router } from "express";

import {
  getRegistrations,
  createRegistration,
} from "../controllers/registration.js";

export const router = Router();

// @desc     Get Notion User Registrations
// @route    GET /api/v1/registrations
// @access   Public
// @method  getRegistrations
router.get("/registrations", getRegistrations);

// @desc     Create Notion User Registrations
// @route    POST /api/v1/registrations/create
// @access   Public
// @method  createRegistration
router.post("/registrations/create", createRegistration);
