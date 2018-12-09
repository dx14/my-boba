//import Express from 'express'
let Express = require('express');

let router = Express.Router();

router.get('/toppings', function(req, res, next) {

  let sql = `CALL spGetTopping(1)`;

  res.locals.connection.query(sql, true, (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  })

/*  res.locals.connection.query('SELECT * from toppings', function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });*/
});

module.exports = router;