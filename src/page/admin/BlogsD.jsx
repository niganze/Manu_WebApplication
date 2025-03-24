import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from "@mui/material";
import UpdateModal from "./UpdateModal"; // Import the UpdateModal
import axios from "axios";
import { Notify } from "notiflix";
import BlogFormModal from "./BlogFormModal";

const BlogsD = () => {
  const [property, setProperty] = useState([]);
  const [modal, setModal] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null); // State to store current blog for update
const [amodal,setAmodal]=useState(false);

  useEffect(() => {
    const getAllProperty = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/blog/getAllBlogs`);
        setProperty(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProperty();
  }, []);

  // Open modal to add or update a blog
  const handleModal = (blog = null) => {
    setCurrentBlog(blog); // Set the current blog for updating, or null for adding
    setModal(!modal); // Toggle modal visibility
  };
 const addModal=()=>{
  setAmodal(!amodal)

 }
  // Handle update request
  const handleUpdate = async (blog) => {
    try {
      const res = await axios.put(`http://localhost:5000/blog/updateBlog/${blog._id}`, blog);
      console.log(res.data);
      // Refresh the blogs list after updating
      setProperty((prevState) =>
        prevState.map((item) => (item._id === blog._id ? { ...item, ...res.data } : item))
      );
    } catch (error) {
      console.log(error);
    }
  };

  // Handle delete request
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/blog/deleteBlog/${id}`);
      console.log(res.data);
      // Remove the deleted blog from the state
      setProperty((prevState) => prevState.filter((item) => item._id !== id));
      Notify.success("Blog deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5">
    
      {modal && <UpdateModal handleModal={handleModal} currentBlog={currentBlog} handleUpdate={handleUpdate} />}
      {amodal && <BlogFormModal  addModal={addModal}/>}
      <h1 className="text-2xl font-bold mb-4">All Blogs</h1>
      <div className="flex flex-row justify-between gap-4 mb-4">
        <TextField label="Search" variant="outlined" size="small" />
        <button type="button" className="bg-[#A99FFF] text-white px-4 py-2 rounded-md" 
        onClick={addModal}
        >
          Add blog
        </button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Blog Image</TableCell>
              <TableCell>Blog Title</TableCell>
              <TableCell>Blog Content</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {property.map((item) => (
              <TableRow key={item._id}>
                <TableCell>
                  <img src={item.images} className="w-9 h-6" />
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.content}</TableCell>
                <TableCell>
                  <Button color="success" onClick={() => handleModal(item)}>
                    Update
                  </Button>
                  <Button color="error" onClick={() => handleDelete(item._id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BlogsD;
