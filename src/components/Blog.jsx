import React, { useState } from "react";

const Blog = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [charCount, setCharCount] = useState(2000);
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([
    {
      title: "Coffee sugar, chicory seasonal espresso barista americano",
      image: "/assets/one.png",
      content: "A delightful coffee article description goes here.",
    },
    {
      title: "Overlaid the jeepers uselessly much excluding",
      image: "/assets/two.png",
      date: "Aug 12, 2023",
      content: "A creative and fun article description here.",
    },
    {
      title: "According a funnily until pre-set or arrogant well cheerful",
      image: "/assets/three.png",
      content: "Another engaging blog post summary goes here.",
    },
    {
      title: "Coffee variety macchiato, as organic ut variety caffe americano",
      image: "/assets/three.png",
      content: "An insightful post related to coffee brewing varieties.",
    },
  ]);

  const handleContentChange = (e) => {
    const value = e.target.value;
    setContent(value);
    setCharCount(2000 - value.length);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const savePost = () => {
    const newPost = {
      title: title,
      image: image || "/assets/default.png",
      content: content,
      date: new Date().toLocaleDateString(),
    };

    setPosts([...posts, newPost]);
    setTitle("");
    setContent("");
    setImage(null);
    setCharCount(2000);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-purple-200 py-10 px-4">
      {/* Header */}
      <header className="mb-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold text-purple-400">Miso Blogs</h1>
          <nav>
            <ul className="flex space-x-4 text-lg">
              <li>
                <a
                  href="/"
                  className="hover:text-purple-500 hover:underline transform hover:scale-110 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-purple-500 hover:underline transform hover:scale-110 transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-purple-500 hover:underline transform hover:scale-110 transition duration-300"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto flex space-x-8">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white p-6 rounded-lg shadow-xl relative border-t-4 border-purple-400">
          <div className="text-center mb-6">
            <img
              src="./images/Logo.png"
              alt="Profile"
              className="rounded-full w-24 h-24 object-cover mb-4 mx-auto"
            />
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              officia numquam quaerat sunt ea.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Featured Posts:</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-blue-500 hover:underline">
                  Post 1
                </a>
              </li>
              <li>
                <a href="/" className="text-blue-500 hover:underline">
                  Post 2
                </a>
              </li>
              <li>
                <a href="/" className="text-blue-500 hover:underline">
                  Post 3
                </a>
              </li>
            </ul>
          </div>

          {/* Add Button */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <button
              className="bg-purple-500 hover:bg-purple-600 text-white text-3xl rounded-lg w-12 h-12 flex items-center justify-center transition duration-300 hover:scale-105 shadow-md"
              onClick={() => setShowModal(true)}
              style={{ borderRadius: "12px", paddingBottom: "5px" }}
            >
              +
            </button>
          </div>
        </aside>

        {/* Blog Posts */}
        <main className="w-3/4">
          {posts.map((post, index) => (
            <div
              key={index}
              className="mb-8 bg-white p-6 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded-lg mb-4 transition duration-300 transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30 rounded-lg"></div>
              </div>
              <h2 className="text-3xl font-bold mb-2 text-gray-800">
                {post.title}
              </h2>
              <span className="text-sm text-gray-500">{post.date}</span>
              <p className="mt-4 text-gray-600">{post.content}</p>
            </div>
          ))}
          <button className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300">
            More posts →
          </button>
        </main>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition duration-300">
          <div className="bg-white p-8 rounded-lg shadow-2xl w-1/2 relative">
            <h2 className="text-3xl font-bold mb-6">Add a New Blog</h2>

            <label className="block text-lg font-semibold mb-2">Title</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label className="block text-lg font-semibold mb-2">Content</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows="6"
              value={content}
              onChange={handleContentChange}
              maxLength={2000}
            ></textarea>

            <div className="text-right text-sm text-gray-600 mt-2">
              {charCount} characters remaining
            </div>

            <label className="block text-lg font-semibold mb-4 mt-4">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-4"
            />

            {image && (
              <img
                src={image}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-lg mb-4"
              />
            )}

            <div className="flex justify-end space-x-4 mt-4">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300"
                onClick={savePost}
              >
                Save Blog
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
