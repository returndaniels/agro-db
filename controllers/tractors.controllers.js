
const Tractors = require('../models/tractors');

const getTractors = async (req, res) => {
	const tractors = await Tractors.find();
	if (tractors) {
		res.status(200).json({
			message: "Found",
			tractors,
		});
	} else {
		res.status(400).json({
			message: "Bad request",
		});
	}
};

const createTractor = (req, res) => {
  Tractors.find({ name: req.body.name })
		.exec()
		.then((tractor) => {
			if (tractor.length >= 1)
        res.status(409).json({ message:"Tractor name already exists."})
    })

  const newTractor = new Tractors(req.body);
  newTractor
    .save()
    .then(async (result) => {
        await result
          .save()
          .then((result) => {
              console.log(`Tractor created ${result}`)
              res.status(201).json({ tractor: req.body, })
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
};

const updateTractor = async (req, res) => {
  const tractor = await Tractors.findOneAndUpdate(req.params, req.body, {
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
};

const deleteTractor = async (req, res) => {
  const response = await Tractors.deleteOne(req.params);

  if (response.ok) {
		res.status(204).json({
			message: "Deleted",
		});
	} else {
		res.status(400).json({
			message: "Bad request",
		});
	}
};

module.exports = {
  getTractors,
  createTractor,
  updateTractor,
  deleteTractor
}