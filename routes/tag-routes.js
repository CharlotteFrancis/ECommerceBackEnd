const router = require('express').Router()
const { Tag, Product, ProductTag } = require('../models')

// The `/api/tags` endpoint

router.get('/tags', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      { model: Product }
    ]
  })
    .then(prodcuts => res.json(prodcuts))
    .catch(err => console.log(err))
})

router.get('/tags/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      { model: Product }
    ]
  })
    .then(tag => res.json(tag))
    .catch(err => console.log(err))
})

router.post('/tags', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then(tag => res.json(tag))
    .catch(err => console.log(err))
})

router.put('/tags/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, { where: { id: req.params.id } })
    .then(_ => res.sendStatus(200))
    .catch(err => res.sendStatus(400).json(err))
})

router.delete('/tags/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({ where: { id: req.params.id } })
    .then(_ => res.sendStatus(200))
    .catch(err => res.sendStatus(400).json(err))
})

module.exports = router
