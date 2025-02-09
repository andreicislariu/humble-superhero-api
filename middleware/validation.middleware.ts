import { Request, Response, NextFunction } from "express";
import { CreateSuperheroDto } from "../models/superhero.model";

export const validateSuperhero = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, superpower, humilityScore } = req.body as CreateSuperheroDto;

  if (!name || typeof name !== "string") {
    return res
      .status(400)
      .json({ error: "Name is required and must be a string" });
  }

  if (!superpower || typeof superpower !== "string") {
    return res
      .status(400)
      .json({ error: "Superpower is required and must be a string" });
  }

  if (
    !humilityScore ||
    typeof humilityScore !== "number" ||
    humilityScore < 1 ||
    humilityScore > 10
  ) {
    return res.status(400).json({
      error: "Humility score is required and must be a number between 1 and 10",
    });
  }
  next();
};
