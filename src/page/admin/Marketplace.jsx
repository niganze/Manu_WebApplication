import React, { useState, useEffect } from "react";
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
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Seller</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.seller}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>
                  {item.status === "Pending" && (
                    <>
                      <Button color="success" onClick={() => handleApprove(item.id)}>Approve</Button>
                      <Button color="error" onClick={() => handleReject(item.id)}>Reject</Button>
                    </>
                  )}
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
