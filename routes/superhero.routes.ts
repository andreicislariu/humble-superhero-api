import { Router, Request, Response, NextFunction } from "express";
import { superheroService } from "../services/superhero.service";
import { validateSuperhero } from "../middleware/validation.middleware";

const router = Router();

router.post("/", validateSuperhero, (req, res) => {
  try {
    const newSuperhero = superheroService.addSuperhero(req.body);
    res.status(201).json(newSuperhero);
  } catch (error) {
    res.status(400).json({ error: "Failed to create superhero" });
  }
});

router.get("/", (req, res) => {
  try {
    const superheroes = superheroService.getSuperheroes();
    res.json(superheroes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch superheroes" });
  }
});

router.get("/:id", (req: Request<{ id: string }>, res: Response) => {
  try {
    const superhero = superheroService.getSuperheroesById(req.params.id);
    if (!superhero) {
      res.status(404).json({ error: "Superhero not found" });
      return;
    }
    res.json(superhero);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch superhero" });
  }
});

export default router;
