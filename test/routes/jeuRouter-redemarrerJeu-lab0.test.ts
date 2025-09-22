// Vous devez insérer les nouveaux tests ici
import { assert } from 'console';
import supertest from 'supertest';
import 'jest-extended';
import app from '../../src/app';
import { JeuDeDes } from '../../src/core/jeuDeDes';

const request = supertest(app);

const testNom1 = 'A';
const testNom2 = 'B';

let jeu: JeuDeDes;

describe('GET /api/v1/jeu/redemarrerJeu', () => {
    beforeAll(async () => {
        jeu = new JeuDeDes();
        jeu.demarrerJeu(testNom1);
        jeu.demarrerJeu(testNom2);
    });

    it('devrait répondre 200 et JSON', async () => {
        const response = await request.get('/api/v1/jeu/redemarrerJeu');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
    });

    it('devrait vider la map des joueurs (postcondition)', async () => {
        const res1 = await request.get(`/api/v1/jeu/jouer/${testNom1}`);
        expect(res1.status).toBe(404);
        expect(res1.body.error).toInclude("n'existe pas");
        expect(res1.body.error).toInclude(testNom1);

        const res2 = await request.get(`/api/v1/jeu/jouer/${testNom2}`);
        expect(res2.status).toBe(404);
        expect(res2.body.error).toInclude("n'existe pas");
        expect(res2.body.error).toInclude(testNom2);
    });
});


