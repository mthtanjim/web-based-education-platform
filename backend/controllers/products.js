const Download = require("../models/product");

const CreateProduct = async (req, res, next) => {
  try {
    // Check if required fields are provided
    const { title, description, fileUrl, price, isPaid, category } = req.fields;

    const { img } = req.files;

    console.log("req.file", req.files);

    switch (true) {
      case !title.trim():
        res.json({ error: "Name is requied" });
      case !description.trim():
        res.json({ error: "Name is requied" });
    }

    // Create new download object
    const download = new Download({
      title,
      slug: title.replace(/\s+/g, "-").toLowerCase(),
      description,
      fileUrl,
      price,
      category,
      isPaid: req.fields.isPaid || true, // default to true
      buyers: [],
      seller: req?.user?.id, // assuming the authenticated user is the seller
    });

    //Handle photo upload
    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "Image should be less than 1MB in size",
        });
      }
      download.photo.data = fs.readFileSync(files.photo.path);
      download.photo.contentType = files.photo.type;
    }
    //Save the new download to the database
    const savedDownload = await download.save();

    res.status(201).json(savedDownload);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const downloads = await Download.find().populate("seller buyers");
    res.json(downloads);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error,");
  }
};

const getProductById = async (req, res) => {
  try {
    const download = await Download.findById(req.params.id).populate(
      "seller buyers"
    );
    if (!download) {
      return res.status(404).json({ msg: "Download not found" });
    }
    res.json(download);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Download not found" });
    }
    res.status(500).send("Server Error");
  }
};

module.exports = { CreateProduct, getAllProducts, getProductById };
