const expect = require('expect')
const request = require('supertest')
let app = require('../app')


describe("JUST SOME TEST", ()=>{
    it("Should be true", done => {
        expect(true).toBe(true);
        done();
    } )

    it("Should be false", done => {
        expect(1 == 2).toBe(false);
        done();
    } )

    it("Should return 'respond with a resource'", done => {

        request(app)
        .get('/users')
        .set('Accept', 'application/json')
        .expect(200)
        .expect((res)=>{
            expect(res.text).toBe("respond with a resource")
        })
        .end(function(err, res) {
            if (err) return done(err);
            done();
        });

    })

    
})