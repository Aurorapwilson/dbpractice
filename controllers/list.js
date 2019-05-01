const List = require('../models').List;
//creates a new list and if successful, it returns it. Otherwise returns an error. 

    //api works with this ----------------------------------------------------------------------------------------//
    // module.exports = {
    // //create function is designed to be a route handler for whichever route we'll attach it to. 
    // create(req, res) {
    //     return List
    //     .create({
    //         name: req.body.name,
    //     })
    //     .then(list => res.status(201).send(list))
    //     .catch(error => res.status(400).send(error));
    // },
    //api works with this ----------------------------------------------------------------------------------------//

module.exports = {

    //Get all list
    getAll(req, res) {
        return List
          .findAll()
          .then((list) => res.status(200).send(list))
          .catch((error) => res.status(400).send(error));
      },

    // Create new List
    create(req, res) {
        return List
          .create({
            name: req.body.name,
          })
          .then(list => res.status(201).send(list))
          .catch(error => res.status(400).send(error));
      },

      //Find By ID
      retrieve(req, res) {
        return List
          .findByPk(req.params.listId)
          .then((list) => {
            if (!list) {
              return res.status(404).send({
                message: 'List Not Found',
              });
            }
            return res.status(200).send(list);
          })
          .catch((error) => res.status(400).send(error));
      },
    
      // Update a list
      update(req, res) {
        return List
          .findByPk(req.params.listId)
          .then(list => {
            if (!list) {
              return res.status(404).send({
                message: 'List Not Found',
              });
            }
            return list
              .update({
                name: req.body.name || list.name,
              })
              .then(() => res.status(200).send(list))
              .catch((error) => res.status(400).send(error));
          })
          .catch((error) => res.status(400).send(error));
      },
    
      // Delete
      destroy(req, res) {
        return List
          .findByPk(req.params.listId)
          .then(list => {
            if (!list) {
              return res.status(400).send({
                message: 'List Not Found',
              });
            }
            return list
              .destroy()
              .then(() => res.status(204).send())
              .catch((error) => res.status(400).send(error));
          })
          .catch((error) => res.status(400).send(error));
      },
    
  };
