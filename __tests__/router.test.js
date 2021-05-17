'use strict';

const mockServer = require('../src/server.js');
const supergoose = require('@code-fellows/supergoose');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const supertest = require('supertest');

const serverRequest = supertest(mockServer.app);

const newUser = {
    username: "Salem",
    password: "admin222"
}

describe('Testing POST to /signup to create a new user', () => {
    it('can create a new user', async() => {
        const res = await serverRequest.post('/signup').send(newUser);
        expect(res.status).toEqual(201);
        expect(res.body.username).toEqual(newUser.username);
        const valid = await bcrypt.compare(newUser.password, res.body.password);
        expect(valid).toBe(true);
    });
});
describe('Testing POST to /signin to login as a user', () => {
    it('can login and the middleware function', async() => {
        const credentials = `${newUser.username}:${newUser.password}`;
        const encodedCred = await base64.encode(credentials);
        const res = await serverRequest.post('/signin').set("authorization", `Basic ${encodedCred}`);
        expect(res.status).toEqual(200);
    });
});