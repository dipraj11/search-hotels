const express = require('express');
const router = express.Router();
const hotelsLogic = require('../logics/hotelsLogic.js');
/* GET users listing. */
router.post('/', (req, res) => {
  hotelsLogic.getHotels(req.body, (err, data) => {
    response = {
      status: false,
      data: [],
      msg: "",
      errorCode: 0
    };
    if (err) {
      console.error(err);
      response.msg = err;
      response.errorCode = 1;
      res.status(200).json(response);
    }

    response.data = data;
    response.status = true;
    response.msg="Sucess!!";
    res.status(200).json(response);
  });
});
module.exports = router;