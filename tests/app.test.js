// eslint-disable-next-line node/no-unpublished-import
import request from 'supertest'
import { describe, expect, test } from 'vitest'
import nock from 'nock'
import app from '../index.js'

describe('API Endpoints', () => {
    test('GET /api/test should return Hello SonarQube !', async () => {
        const response = await request(app).get('/api/test')
        expect(response.status).toBe(200)
        expect(response.body.message).toBe('Hello SonarQube!')
    })

    test('GET /api/quote should return a random quote', async () => {
        // Mock la réponse de l'API externe avec nock
        nock('https://zenquotes.io')
            .get('/api/random')
            .reply(200, [
                {
                    q: "Life is what happens when you're busy making other plans.",
                    a: 'John Lennon',
                },
            ])

        const response = await request(app).get('/api/quote')
        expect(response.status).toBe(200)
        expect(response.body.q).toBe(
            "Life is what happens when you're busy making other plans."
        )
        expect(response.body.a).toBe('John Lennon')
    })
})
