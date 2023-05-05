const Download = require("../models/product");
const fs = require("fs");

const CreateProduct = async (req, res, next) => {
  try {
    // Check if required fields are provided
    const { title, description, fileUrl, price, isPaid, category } = req.fields;

    const { photo } = req.files;

    console.log("req.file---", photo);

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
    if (photo) {
      if (photo.size > 1000000) {
        return res.status(400).json({
          error: "Image should be less than 1MB in size",
        });
      }
      download.photo.data = fs.readFileSync(photo.path);
      download.photo.contentType = photo.type;
    }
    //Save the new download to the database
    const savedDownload = await download.save();

    res.status(201).json(savedDownload);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

const EditProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if required fields are provided
    const { title, description, fileUrl, price, isPaid, category } = req.fields;

    const { photo } = req.files;

    console.log("req.file---", photo);

    switch (true) {
      case !title.trim():
        res.json({ error: "Name is requied" });
      case !description.trim():
        res.json({ error: "Name is requied" });
    }

    // Find the product with the given id
    const download = await Download.findById(id);
    if (!download) {
      return res.status(404).json({ msg: "Download not found" });
    }

    // Update the product fields
    download.title = title;
    download.slug = title.replace(/\s+/g, "-").toLowerCase();
    download.description = description;
    download.fileUrl = fileUrl;
    download.price = price;
    download.category = category;
    download.isPaid = isPaid || true; // default to true

    // Handle photo upload
    if (photo) {
      if (photo.size > 1000000) {
        return res.status(400).json({
          error: "Image should be less than 1MB in size",
        });
      }
      download.photo.data = fs.readFileSync(photo.path);
      download.photo.contentType = photo.type;
    }

    // Save the updated product to the database
    const updatedDownload = await download.save();

    res.json(updatedDownload);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

const DeleteProduct = async (req, res) => {
  try {
    const download = await Download.findById(req.params.id);

    if (!download) {
      return res.status(404).json({ msg: "Download not found" });
    }

    // Check if the authenticated user is the seller
    if (download.seller.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    // Delete the download from the database
    await download.remove();

    res.json({ msg: "Download removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Download not found" });
    }
    res.status(500).send("Server Error");
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

module.exports = {
  CreateProduct,
  DeleteProduct,
  getAllProducts,
  EditProduct,
  DeleteProduct,
  getProductById,
};
