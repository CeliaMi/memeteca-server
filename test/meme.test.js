import request from 'supertest';
import { app } from '../app';

describe('Test CRUD memes', () => {
   
    describe('GET /memes', ()=>{
        let response;
        beforeEach( async() => {
        response = await request(app).get('/memes').send()
        })

        test('should return a response with status 200 and type json', async() => {
            // const response = await request(app).get('/books').send()
						expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })

        test('should return all memes', async() => {
            expect(response.body).toBeInstanceOf(Array);
        })
    
    })
})