const server = require('./server.js');
const request = require('supertest');

describe('GET /', () => {
    it('has process.env.DB_ENV as "testing"', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
});