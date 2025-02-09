import { SuperheroService } from "./superhero.service";

describe("SuperheroService", () => {
  let service: SuperheroService;

  beforeEach(() => {
    service = new SuperheroService();
  });

  it("should add a new superhero", () => {
    const superheroData = {
      name: "Test Hero",
      superpower: "Testing",
      humilityScore: 8,
    };

    const newSuperhero = service.addSuperhero(superheroData);
    expect(newSuperhero.name).toBe(superheroData.name);
    expect(newSuperhero.superpower).toBe(superheroData.superpower);
    expect(newSuperhero.humilityScore).toBe(superheroData.humilityScore);
  });

  it("should return superheroes sorted by humility score", () => {
    const heroes = [
      { name: "Hero 1", superpower: "Power 1", humilityScore: 5 },
      { name: "Hero 2", superpower: "Power 2", humilityScore: 9 },
      { name: "Hero 3", superpower: "Power 3", humilityScore: 7 },
    ];

    heroes.forEach((hero) => service.addSuperhero(hero));
    const sortedHeroes = service.getSuperheroes();

    expect(sortedHeroes[0].humilityScore).toBe(9);
    expect(sortedHeroes[1].humilityScore).toBe(7);
    expect(sortedHeroes[2].humilityScore).toBe(5);
  });
});
