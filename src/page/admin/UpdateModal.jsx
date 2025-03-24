import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";

const UpdateModal = ({ handleModal, currentBlog, handleUpdate }) => {
  // State to manage form fields, including file for image
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    images: "",
  });

  const [image, setImage] = useState(null);

  // Set form data when modal opens (for update)
  useEffect(() => {
    if (currentBlog) {
      setFormData({
        title: currentBlog.title || "",
        content: currentBlog.content || "",
        images: currentBlog.images || "",
      });
    }
  }, [currentBlog]);

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle image file change
  const handleFileChange = (e) => {
    setImage(e.target.files[0]); // Set the file for the image
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("title", formData.title);
    form.append("content", formData.content);
    if (image) {
      form.append("images", image); // Append the image file to FormData
    }

    if (currentBlog) {
      try {
        const res = await axios.put(`http://localhost:5000/blog/updateBlog/${currentBlog._id}`, form, {
          headers: {
            "Content-Type": "multipart/form-data", // This is crucial for sending files
          },
        });
        handleUpdate(res.data); // Update the blog data after success
        handleModal(); // Close the modal
      } catch (error) {
        console.log(error);
      }
    } else {
      // Handle adding a new blog if needed
      console.log("New Blog", formData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Image</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="mt-2 block w-full text-sm text-gray-700 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex gap-2 items-center mt-4">
            <Button type="submit" className="bg-#2563EB text-white px- 4 px-6 py-2 rounded-lg">
            Update Blog
            </Button>
            <Button
              color="secondary"
              onClick={handleModal}
              className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg"
            >
              Close
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
