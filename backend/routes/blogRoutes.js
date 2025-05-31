const express = require("express");
const router = express.Router();
const { createBlog, getAllBlogs, getBlogById } = require("../controllers/blogController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.post("/", authMiddleware, createBlog);

module.exports = router;
