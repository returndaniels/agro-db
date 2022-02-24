
const Tractors = require('../models/tractor');
const { sendNotification } = require("./onSignal.controllers");
const { defaultImageUrl } = require('../constants.json')

const getTractors = async (req, res) => {
  try {
    const tractors = await Tractors.find();
    if (tractors) {
      res.status(200).json(
        tractors,
      );
    } else {
      res.status(400).json({
        message: "Bad request",
      });
    }

  } catch {
    res.status(500).json({
      message: "Server error, contact the support.",
    });
  }
};

const createTractor = (req, res) => {
  try {
    Tractors.find({ name: req.body.name })
      .exec()
      .then((tractor) => {
        if (tractor.length >= 1)
          res.status(409).json({ message: "Tractor name already exists." })
      })

    const imageUrl = req.body.imageUrl || defaultImageUrl;
    const newTractor = new Tractors({...req.body, imageUrl});
    newTractor
      .save()
      .then(async (result) => {
        await result
          .save()
          .then((result) => {
            console.log(`Tractor created ${result}`)

            sendNotification({ 
              app_id: process.env.ONE_SIGNAL_API_ID,
              contents: {"en": `Olá! um "${req.body.name}" acaba de ser adicionado ao AgroDB.`},
              headings: {"en": "Um novo equipamento foi adicionado ao AgroDB."},
              included_segments: ["Subscribed Users"],
              channel_for_external_user_ids: "push"
            });

            res.status(201).json({ tractor: {...req.body, imageUrl}, })
          })
          .catch((err) => {
            console.error(err)
            res.status(400).json({
              message: err.toString()
            })
          });
      }
      )
      .catch((err) => {
        console.error(err)
        res.status(500).json({
          message: err.toString()
        })
      });

  } catch {
    res.status(500).json({
      message: "Server error, contact the support.",
    });
  }
};

const updateTractor = async (req, res) => {
  try {
    const tractor = await Tractors.findOneAndUpdate({ name: req.body.name }, req.body.data, {
      returnOriginal: false
    });

    if (tractor) {
      res.status(200).json({
        message: "Updated",
        tractor,
      });
    } else {
      res.status(400).json({
        message: "Bad request",
      });
    }

  } catch {
    res.status(500).json({
      message: "Server error, contact the support.",
    });
  }
};

const deleteTractor = async (req, res) => {
  try {
    const response = await Tractors.deleteOne({ name: req.body.name });

    if (response.deletedCount > 0) {
      res.status(204).json({
        message: "Deleted",
      });
    } else {
      res.status(400).json({
        message: "Bad request",
      });
    }
  } catch {
    res.status(500).json({
      message: "Server error, contact the support.",
    });
  }
};

module.exports = {
  getTractors,
  createTractor,
  updateTractor,
  deleteTractor
}