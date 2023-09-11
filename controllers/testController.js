// callback function

const testController = (req, res) => {
  res.status(200).send({
    message: "after adding nodemon, this is the test route",
    success: true,
  });
};

//  will take response and send back to the client/user, will handle middleware separately

// e.g: http://localhost:8000/

module.exports = { testController };
