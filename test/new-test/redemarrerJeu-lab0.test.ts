import 'jest-extended';
import { readFileSync } from 'fs';
import path from 'path';
import { Joueur } from '../../src/core/joueur';

let content = ""
beforeAll(async () => {
  const filename = path.join('test', 'routes', 'jeuRouter-redemarrerJeu-lab0.test.ts');
  content = readFileSync(filename, 'utf-8');
 let joueur1 = new Joueur('a');
 let joueur2 = new Joueur('b');
});

describe('redemarrerJeu.test.ts', () => {
  it("devrait contenir \"get('/api/v1/jeu/redemarrerJeu')\"", () => {
    expect(content.includes("get('/api/v1/jeu/redemarrerJeu')")).toBeTruthy();
  });

  it("devrait contenir un test pour jouer qui retourne 404 (après redemarrerJeu()", () => {
    expect(content.includes("/api/v1/jeu/jouer/")).toBeTruthy();
    expect(content.includes(".status).toBe(404)")).toBeTruthy();
  });

  it("la maps de joueurs devrait être cleared", ()=>{
    


  })
});
