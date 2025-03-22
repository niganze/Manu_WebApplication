import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Select, MenuItem } from "@mui/material";
import BlogFormModal from "./AddBlog";
import axios from "axios";
const BlogsD = () => {

  const [property, setProperty ]= useState([]);
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


  const [items, setItems] = useState([]);
  

  

  
  const filteredItems = items.filter((item) =>
    (filter === "all" || item.status === filter) && item.name.toLowerCase().includes(search.toLowerCase())
  );

  const [modal,setModal]=useState(false);
  const handleModal=()=>{
    setModal(!modal)
  }

  return (
    <div className="p-5">
      {modal && <BlogFormModal handleModal={handleModal}/>}
      <h1 className="text-2xl font-bold mb-4">All Blogs</h1>
      <div className="flex flex-row justify-between gap-4 mb-4">
        <TextField
          label="Search"
          variant="outlined"
          size="small"
        />
        <button type="button" className="bg-[#A99FFF] text-white px-4 py-2 rounded-md  " onClick={handleModal}>Add blog</button>
       
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
                <TableCell><img src={item.images}  className="w-9 h-6"/></TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.content}</TableCell>
               
                <TableCell>
               
                    <>
                      <Button color="success" >Update</Button>
                      <Button color="error" >Delete</Button>
                    </>
                  
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
