module.exports = {
    create: (req, res, next) => {
      const dbObj = req.app.get('db');
      const { name, description, price, image_url } = req.body;
  
      dbObj.create_product([name, description, price, image_url])
        .then(() => res.sendStatus(200))
        .catch(err => {
          res.status(500).send(err);
          console.log(err)
        });
    },
  
    getOne: (req, res, next) => {
      const dbObj = req.app.get('db');
      const { id } = req.params;
  
      dbObj.read_product(id)
        .then(product => res.status(200).send(product))
        .catch(err => {
          res.status(500).send(err);
          console.log(err)
        });
    },
  
    getAll: (req, res, next) => {
      const dbObj = req.app.get('db');
  
      dbObj.read_products()
        .then(products => res.status(200).send(products))
        .catch(err => {
          res.status(500).send(err);
          console.log(err)
        });
    },
  
    update: (req, res, next) => {
      const dbObj = req.app.get('db');
      const { params, query } = req;
  
      dbObj.update_product([params.id, query.desc])
        .then(() => res.sendStatus(200))
        .catch(err => {
          res.status(500).send(err);
          console.log(err)
        });
    },
  
    delete: (req, res, next) => {
      const dbObj = req.app.get('db');
      const { id } = req.params;
  
      dbObj.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => {
          res.status(500).send(err);
          console.log(err)
        });
    }
  };