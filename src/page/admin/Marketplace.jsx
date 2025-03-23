import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Select, MenuItem } from "@mui/material";

const Marketplace = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetch marketplace items from API (replace with actual API call)
    setItems([
      { id: 1, name: "Bricks", category: "Construction", price: "1000Rwf", seller: "John Doe", status: "Pending" },
      { id: 2, name: "Tiles", category: "Flooring", price: "2000Rwf", seller: "Jane Doe", status: "Approved" },
    ]);
  }, []);
  const [property, setProperty ]= useState([]);
  useEffect(() => {
      const getAllProperty = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/marketItem/getAllMarkets`);
          setProperty(res.data);
          console.log(res.data);
          
        } catch (error) {
          console.log(error);
        }
      };
      getAllProperty();
    }, []);

  const handleApprove = (id) => {
    // Logic to approve item
    console.log("Approved item", id);
  };

  const handleReject = (id) => {
    // Logic to reject item
    console.log("Rejected item", id);
  };

  const filteredItems = items.filter((item) =>
    (filter === "all" || item.status === filter) && item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Admin Marketplace</h1>
      <div className="flex gap-4 mb-4">
        <TextField
          label="Search"
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
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Approved">Approved</MenuItem>
          <MenuItem value="Rejected">Rejected</MenuItem>
        </Select>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Condition</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Seller</TableCell>
              <TableCell>Delivery kind</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {property.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.itemName}</TableCell>
                <TableCell>{item.itemCondition}</TableCell>
                <TableCell>${item.itemPrice}</TableCell>
                <TableCell>{item.companyOwner}</TableCell>
                <TableCell>{item.itemDeliveryStatus}</TableCell>
                <TableCell>
                  
                      <Button color="success" onClick={() => handleApprove(item.id)}>View</Button>
                      <Button className="text-#2563EB"onClick={() => handleApprove(item.id)}>Update</Button>
                      <Button color="error" onClick={() => handleReject(item.id)}>Delete</Button>
                   
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
