import React, { useState, useEffect } from "react";
import axios from "axios";
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

const Marketplace = () => {
  const [property, setProperty] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

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

  // Filter based on search input and filter dropdown
  const filteredItems = property.filter(
    (item) =>
      item.itemCondition.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "all" || item.itemCondition === filter)
  );

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Admin Marketplace</h1>
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
            {filteredItems.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.itemName}</TableCell>
                <TableCell>{item.itemCondition}</TableCell>
                <TableCell>${item.itemPrice}</TableCell>
                <TableCell>{item.companyOwner}</TableCell>
                <TableCell>{item.itemDeliveryStatus}</TableCell>
                <TableCell>
                  <Button color="success">View</Button>
                  <Button className="text-#2563EB">Update</Button>
                  <Button color="error">Delete</Button>
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
