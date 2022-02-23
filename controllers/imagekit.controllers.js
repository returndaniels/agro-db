var ImageKit = require("imagekit");

const auth = (req, res) => {
  try {
    const imagekit = new ImageKit({
      publicKey : "public_DCbUaQ/hVTj/7d7mf5UOafVT9kI=",
      privateKey : "private_IF574Svh5LyxUs6mdOxLpF9Jq0w=",
      urlEndpoint : "https://ik.imagekit.io/returndaniels"
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