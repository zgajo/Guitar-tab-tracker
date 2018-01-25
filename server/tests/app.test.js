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

describe("POST /register", ()=>{

    it("Should register person", (done) => {

        const text = `Welcome to POST /register test@gmail.com`;

        request(app)
			.post('/register')
			.send({
                email: "test@gmail.com",
                password: "test123"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
			.expect(200)
			.expect((res)=>{
                const response = JSON.parse(res.text);
				expect(response.msg).toBe(text);
			})
			.end((err, res)=>{
				// If there waas an error 
				if(err) {
					return done(err)
				}
				// If everything's fine, search in database
			    done()
			})

    })

})