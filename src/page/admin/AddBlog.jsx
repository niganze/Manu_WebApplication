import React from "react";
import { X } from "lucide-react";
import { Notify } from "notiflix";
import axios from "axios";
import { useForm } from "react-hook-form";

const BlogFormModal = ({ handleModal }) => {
  const { register, handleSubmit, formState: { errors } ,reset} = useForm();

  const onsubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("images", data.images[0]); // Use the first selected image
      formData.append("content", data.content);

      await axios.post("http://localhost:5000/blog/createBlog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      Notify.success("New blog added successfully!");
      reset();
    } catch (error) {
      console.log(error);
      Notify.failure("Failed to post blog.");
    }
  };

  return (
    <div className="font-sans">
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm" onClick={handleModal}></div>

        <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md z-10 relative m-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Create New Blog Post</h2>
            <button onClick={handleModal} className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors">
              <X size={24} />
            </button>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(onsubmit)}>
            {/* Blog Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Blog Title</label>
              <input
                type="text"
                {...register("title", { required: "Title is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  focus:ring-gray-100"
                placeholder="Enter blog title"
              />
              {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}
            </div>

            {/* Blog Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Blog Content</label>
              <textarea
                {...register("content", { required: "Content is required" })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-gray-100 "
                placeholder="Write your blog content here..."
              />
              {errors.content && <p className="text-red-500 text-xs">{errors.content.message}</p>}
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Blog Image</label>
              <input
                type="file"
                accept="image/*"
                {...register("images", { required: "Image is required" })}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
              {errors.images && <p className="text-red-500 text-xs">{errors.images.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="bg-[#A99FFF] text-white px-4 py-2 rounded-md hover:bg-[#A99FFF] transition-opacity"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogFormModal;
