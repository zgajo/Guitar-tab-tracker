const Joi = require('joi');

module.exports = {
    register(req, res, next){

        // Setting validators
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-z0-9]{8,32}$')
            )
        }

        // Validate received data
        const {error, value} = Joi.validate(req.body, schema);

        if(error){

            switch(error.details[0].context.key){

                case "email":
                    res.status(400).send({
                        error: "You must provide a valid email address."
                    });
                    break;

                case "password":
                    res.status(400).send({
                        error: `The password failed to match following rules: <br>
                        1. It must contain only the following characters: lower case, upper case, numbers <br>
                        2. It must be at least 8 characters long or not greater then 32 characters`
                    })
                    break;

                default:
                    res.status(400).send({
                        error: "Invalid registration information"
                    });

            }

        }
        else{
            next();
        }

        

    }
}