import { Router, type Request, type Response } from "express";
import { portfolio, contactMessages, type ContactMessage } from "../data/portfolio.js";

const router = Router();

/**
 * GET /api/profile
 */
router.get("/profile", (req: Request, res: Response) => {
  res.status(200).json(portfolio.profile);
});

/**
 * GET /api/about
 */
router.get("/about", (req: Request, res: Response) => {
  res.status(200).json(portfolio.about);
});

/**
 * GET /api/projects
 */
router.get("/projects", (req: Request, res: Response) => {
  res.status(200).json(portfolio.projects);
});

/**
 * POST /api/contact
 */
router.post("/contact", (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "Name, email, and message are required"
    });
  }

  const newMessage: ContactMessage = {
    id: contactMessages.length + 1,
    name,
    email,
    message,
    createdAt: new Date().toISOString()
  };

  contactMessages.push(newMessage);

  res.status(201).json(newMessage);
});

export default router;
