import React, { useState, useEffect } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button, 
  TextField, 
  TablePagination 
} from "@mui/material";
import UpdateModal from "./UpdateModal";
import BlogFormModal from "./BlogFormModal";
import axios from "axios";
import { Notify } from "notiflix";

const BlogsD = () => {
  const [property, setProperty] = useState([]);
  const [modal, setModal] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [amodal, setAmodal] = useState(false);
  
  // Pagination states
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        const res = await axios.get(`https://manu-backend-6i7q.onrender.com/blog/getAllBlogs`, {
          params: {
            page: page + 1,
            limit: rowsPerPage,
            search: searchTerm
          }
        });
        
        // Assuming the backend returns an object with blogs and total count
        setProperty(res.data.blogs || res.data);
        setTotalBlogs(res.data.total || res.data.length);
      } catch (error) {
        console.error(error);
        Notify.failure("Failed to fetch blogs");
      }
    };
    getAllBlogs();
  }, [page, rowsPerPage, searchTerm]);

  // Open modal to add or update a blog
  const handleModal = (blog = null) => {
    setCurrentBlog(blog);
    setModal(!modal);
  };

  const addModal = () => {
    setAmodal(!amodal);
  };

  // Handle update request
  const handleUpdate = async (blog) => {
    try {
      const res = await axios.put(`https://manu-backend-6i7q.onrender.com/blog/updateBlog/${blog._id}`, blog);
      
      // Refresh the current page
      const refreshRes = await axios.get(`https://manu-backend-6i7q.onrender.com/blog/getAllBlogs`, {
        params: {
          page: page + 1,
          limit: rowsPerPage,
          search: searchTerm
        }
      });
      
      setProperty(refreshRes.data.blogs || refreshRes.data);
      setTotalBlogs(refreshRes.data.total || refreshRes.data.length);
      
      Notify.success("Blog updated successfully");
      handleModal(); // Close modal
    } catch (error) {
      console.error(error);
      Notify.failure("Failed to update blog");
    }
  };

  // Handle delete request
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://manu-backend-6i7q.onrender.com/blog/deleteBlog/${id}`);
      
      // Refresh the current page after deletion
      const refreshRes = await axios.get(`https://manu-backend-6i7q.onrender.com/blog/getAllBlogs`, {
        params: {
          page: page + 1,
          limit: rowsPerPage,
          search: searchTerm
        }
      });
      
      setProperty(refreshRes.data.blogs || refreshRes.data);
      setTotalBlogs(refreshRes.data.total || refreshRes.data.length);
      
      Notify.success("Blog deleted successfully");
    } catch (error) {
      console.error(error);
      Notify.failure("Failed to delete blog");
    }
  };

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle search
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0); // Reset to first page when searching
  };

  return (
    <div className="p-5">
      {modal && (
        <UpdateModal 
          handleModal={handleModal} 
          currentBlog={currentBlog} 
          handleUpdate={handleUpdate} 
        />
      )}
      {amodal && <BlogFormModal addModal={addModal} />}
      
      <h1 className="text-2xl font-bold mb-4">All Blogs</h1>
      
      <div className="flex flex-row justify-between gap-4 mb-4">
        <TextField 
          label="Search" 
          variant="outlined" 
          size="small"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-1/2"
        />
        <button 
          type="button" 
          className="bg-[#A99FFF] text-white px-4 py-2 rounded-md"
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
                  <img 
                    src={item.images} 
                    alt="Blog" 
                    className="w-9 h-6 object-cover" 
                  />
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.content}</TableCell>
                <TableCell>
                  <Button 
                    color="success" 
                    onClick={() => handleModal(item)}
                  >
                    Update
                  </Button>
                  <Button 
                    color="error" 
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={totalBlogs}
          rowsPerPage={5}
          page={page}
          onPageChange={handleChangePage}
        />
      </TableContainer>
    </div>
  );
};

export default BlogsD;
