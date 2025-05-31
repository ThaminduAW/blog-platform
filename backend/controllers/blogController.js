const Blog = require("../models/Blog");

exports.createBlog = async (req, res) => {
  console.log('Request body:', req.body);
  console.log('Request user:', req.user);
  
  const { title, content } = req.body;
  const { id, name } = req.user.user; // Access user data from req.user.user

  // Validate required user data
  if (!id || !name) {
    console.log('Missing user data - id:', id, 'name:', name);
    return res.status(400).json({ 
      message: "User data missing", 
      details: "Author ID and name are required" 
    });
  }

  try {
    const newBlog = await Blog.create({
      title,
      content,
      authorId: id,
      authorName: name,
    });

    res.status(201).json(newBlog);
  } catch (err) {
    console.error("Blog creation error:", err);
    res.status(500).json({ 
      message: "Error creating blog",
      details: err.message 
    });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    console.error("Error fetching blogs:", err);
    res.status(500).json({ 
      message: "Error fetching blogs",
      details: err.message 
    });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json(blog);
  } catch (err) {
    console.error("Error fetching blog:", err);
    res.status(500).json({ 
      message: "Error fetching blog",
      details: err.message 
    });
  }
};
