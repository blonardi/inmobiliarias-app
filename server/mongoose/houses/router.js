import express from 'express'
// import mongoose from 'mongoose'
import { HouseModel } from './house-model.js'
import { v4 as uuidv4 } from 'uuid'

export const houseRouter = express.Router()

// export const postRouter = express.Router()
// CRUD: create,read,update,delete

// Create
// houseRouter.post('/', async (req, res) => {
//   // const createdHouse = await houseModel.create(req.body)
//   // res.status(201).json({ house: createdHouse })
// })

// postRouter.get('/', async (req, res) => {
//   const posts = await postModel.find({}).limit(10)
//   res.status(200).json({ posts })
// }
// )

// postRouter.get('/:permalink', async (req, res) => {
//   const post = await postModel.findOne({ permalink: req.params.permalink })
//   res.status(200).json(post)
// })

// Read
houseRouter.get('/', async (req, res) => {
  try {
    const houses = await HouseModel.find({}).sort({ date: -1 }).limit(5)
    res.status(200).json({ houses })
  } catch (err) {
    console.log(err)
  }
})
// ReadByName
houseRouter.get('/name', async (req, res) => {
  try {
    const houses = await HouseModel.find({ name: req.params.name })
    res.status(200).json(houses)
  } catch (err) {
    console.log(err)
  }
})
// ReadOneByPermalink
houseRouter.get('/:permalink', async (req, res, next) => {
  const { permalink } = req.params
  try {
    const house = await HouseModel.findOne({ permalink })
    res.status(200).json(house)
  } catch (err) {
    next(err)
  }
})

// POST
houseRouter.post('/', async (req, res) => {
  try {
    const uuid = uuidv4()
    const permalink = uuid.slice(0, 8)
    const date = new Date().toISOString()

    const houseToSave = { ...req.body, date, permalink }
    const createdPost = await HouseModel.create(houseToSave)
    res.status(201).send(createdPost)
  } catch (err) {
    console.log(err)
  }
})

// Update
houseRouter.patch('/:permalink', async (req, res) => {
  try {
    const { permalink } = req.params
    const { price, title, address, description, houseImage, dimention, type, location, realEstate } = req.body
    // const data = req.body probar pasando data y date en vez de todos los nombres serparados
    const date = new Date().toISOString()
    const opts = { new: true }
    const newHouse = {
      price,
      title,
      address,
      date,
      description,
      houseImage,
      dimention,
      type,
      location,
      realEstate
    }
    const updatedHouse = await HouseModel.findOneAndUpdate({ permalink }, newHouse, opts)
    res.status(200).json({ updatedHouse })
  } catch (err) {
    console.error(err)
  }
})

// Delete
houseRouter.delete('/:permalink', async (req, res, next) => {
  try {
    const deletedHouse = await HouseModel.findOneAndDelete({ permalink: req.params.permalink })
    res.status(200).json(deletedHouse)
  } catch (err) {
    console.log(err)
    next(err)
  }
})
