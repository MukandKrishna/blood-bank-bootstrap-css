// callback function

const testController = (req,res) =>{
    res.status(200).send({
        message: 'after adding nodemon, this is the test route',
        success: true,
    });
};

module.exports = { testController };
