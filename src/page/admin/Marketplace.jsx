import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
  Select,
  MenuItem,
} from "@mui/material";
import UpdateItemForm from "./UpdateItemForm";

const Marketplace = () => {
  const [property, setProperty] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
 
  const [modal, setModal] = useState(false);
  const [editMarket,setEditMarket]=useState(null)

  const [currentItemId, setCurrentItemId] = useState(null);

  useEffect(() => {
    getAllProperty();
  }, []);

  const getAllProperty = async () => {
    try {
      const res = await axios.get(
        `https://manu-backend-6i7q.onrender.com/marketItem/getAllMarkets`
      );
      setProperty(res.data);
      console.log("Market Items:", res.data);
    } catch (error) {
      console.error("Error fetching market items:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/marketItem/deleteMarket/${id}`);
      setProperty(property.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

 

  const filteredItems = property.filter(
    (item) =>
      item.itemCondition.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "all" || item.itemCondition === filter)
  );


  const handleEditMarket = (item) => {
    setEditMarket(item)
    setModal(!modal);
   

  };
  return (
    <div className="p-5">
      {modal && <UpdateItemForm handleEditMarket={handleEditMarket} editMarket={editMarket}/>}
      <h1 className="text-2xl font-bold mb-4">Admin Marketplace</h1>
      <div className="flex flex-row justify-between items-center mb-4">
        <div className="flex gap-4">
          <TextField
            label="Search by Condition"
            variant="outlined"
            size="small"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            displayEmpty
            size="small"
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="new">New</MenuItem>
            <MenuItem value="used">Used</MenuItem>
          </Select>
        </div>
        <Link to="marketForm">
          <button className="bg-[#A99FFF] text-white px-4 py-2 rounded-md">
            Add Market Place
          </button>
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Condition</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Seller</TableCell>
              <TableCell>Delivery kind</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredItems.map((item, index) => (
              <TableRow key={item._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <img
                    src={item.images}
                    className="w-7 h-4"
                    alt={item.itemName}
                  />
                </TableCell>

                <TableCell>{item.itemName}</TableCell>
                <TableCell>{item.itemCondition}</TableCell>
                <TableCell>${item.itemPrice}</TableCell>
                <TableCell>{item.companyOwner}</TableCell>
                <TableCell>{item.itemDeliveryStatus}</TableCell>
                <TableCell>
                  <Button color="primary">View</Button>
                  <Button onClick={()=>handleEditMarket(item)} color="primary">
                    Update
                  </Button>
                  <Button onClick={() => handleDelete(item._id)} color="error">
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

export default Marketplace;
