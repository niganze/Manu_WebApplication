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
  const [openModal, setOpenModal] = useState(false);
  const [currentItemId, setCurrentItemId] = useState(null);

  useEffect(() => {
    const getAllProperty = async () => {
      try {
        const res = await axios.get("http://localhost:5000/marketItem/getAllMarkets");
        setProperty(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProperty();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/marketItem/deleteMarket/${id}`);
      setProperty(property.filter((item) => item._id !== id));
    } catch (error) {
      console.log("Error deleting item:", error);
    }
  };

  const handleOpenModal = (item) => {
    setCurrentItemId(item._id);
    setOpenModal(true);
  };
  
  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentItemId(null);
  };

  const handleUpdateList = () => {
    // Refresh the list after update
    axios.get("http://localhost:5000/marketItem/getAllMarkets")
      .then(res => {
        setProperty(res.data);
      })
      .catch(error => {
        console.log("Error refreshing list:", error);
      });
  };

  const filteredItems = property.filter(
    (item) =>
      item.itemCondition.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "all" || item.itemCondition === filter)
  );

  return (
    <div className="p-5">
      {openModal && (
        <UpdateItemForm 
          itemId={currentItemId}
          open={openModal}
          onClose={handleCloseModal}
          onUpdate={handleUpdateList}
        />
      )}
      
      <h1 className="text-2xl font-bold mb-4">Admin Marketplace</h1>
      <div className="flex flex-row justify-between items-center">
        <div className="flex gap-4 mb-4">
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
            <MenuItem value="refurbished">Refurbished</MenuItem>
          </Select>
        </div>

        <Link to="marketForm">
          <button type="button" className="bg-[#A99FFF] text-white px-4 py-2 rounded-md">
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
                  <img src={item.images} className="w-7 h-4" alt={item.itemName} />
                </TableCell>
                <TableCell>{item.itemName}</TableCell>
                <TableCell>{item.itemCondition}</TableCell>
                <TableCell>${item.itemPrice}</TableCell>
                <TableCell>{item.companyOwner}</TableCell>
                <TableCell>{item.itemDeliveryStatus}</TableCell>
                <TableCell>
                  <Button color="success">View</Button>
                  <Button onClick={() => handleOpenModal(item)} className="text-#2563EB">
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