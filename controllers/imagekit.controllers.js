var ImageKit = require("imagekit");
require('dotenv').config();

const auth = (req, res) => {
  try {
    const imagekit = new ImageKit({
      publicKey : process.env.IMAGE_KIT_PUBLIC_KEY,
      privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
      urlEndpoint : process.env.IMAGEKIT_URI
    });
    const credentials = imagekit.getAuthenticationParameters()

    res.status(200).json(credentials);
  } catch {
    res.status(500).json({
      message: "Server error, contact the support.",
    });
  }
}

module.exports = { auth }