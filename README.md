## Installation

**1. Clone the repository:**

git clone [https://github.com/andreicislariu/humble-superhero-api.git](https://github.com/andreicislariu/humble-superhero-api.git)

cd humble-superhero-api

**2. Install dependencies:**

npm install

**3. Run the server:**

npm run dev

By default, the server will run on http://localhost:3000.

**API Endpoints**

**GET** /api/superheroes
Retrieve a list of all superheroes.

**GET** /api/superheroes/:id
Retrieve details of a specific superhero by ID.

**POST** /api/superheroes
Add a new superhero.

**Request body:**
{
  "name": "Powerful Hero10",
  "superpower": "Kindness2",
  "humilityScore": 4
}

**Testing with the frontend:**
git clone https://github.com/andreicislariu/superhero-frontend.git



To improve or expand this task, I would:
- Discuss the API design and endpoint requirements with the team to ensure alignment.
- Pair program with a teammate to implement new features or debug issues.
- Use code reviews to share feedback and learn from others' suggestions.
- Document the code and decisions clearly to make it easier for others to contribute.

If I had more time, I would:
- Add more comprehensive unit and integration tests to ensure the API is robust.
- Explore advanced TypeScript features like decorators to simplify code.
- Add CI/CD pipelines to automate testing and deployment.
