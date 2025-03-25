import React, { useState, useEffect } from "react";
import axios from "axios";
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@mui/material";

const UpdateItemForm = ({ itemId, open, onClose, onUpdate }) => {
  const [itemData, setItemData] = useState({
    itemName: "",
    itemPrice: "",
    itemCondition: "",
    companyOwner: "",
    itemDeliveryStatus: "",
    images: null,
    description: "",
  });

  const [error, setError] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // Fetch existing item data on open
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/marketItem/getMarketById/${itemId}`);
        setItemData({
          itemName: res.data.itemName || "",
          itemPrice: res.data.itemPrice || "",
          itemCondition: res.data.itemCondition || "",
          companyOwner: res.data.companyOwner || "",
          itemDeliveryStatus: res.data.itemDeliveryStatus || "",
          description: res.data.description || "",
          images: null,
        });

        setPreviewImage(res.data.images ? res.data.images[0] : null);
      } catch (error) {
        console.error("Error fetching item data:", error);
        setError("Failed to fetch item details.");
      }
    };

    if (itemId && open) {
      fetchItem();
    }
  }, [itemId, open]);

  // Handle input change for text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
      setItemData((prev) => ({ ...prev, images: file }));
    }
  };

  // Submit updated item data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("itemName", itemData.itemName);
      formData.append("itemPrice", itemData.itemPrice);
      formData.append("itemCondition", itemData.itemCondition);
      formData.append("companyOwner", itemData.companyOwner);
      formData.append("itemDeliveryStatus", itemData.itemDeliveryStatus);
      formData.append("description", itemData.description);

      if (itemData.images) {
        formData.append("images", itemData.images);  // Only append if there's a new image
      }

      // Debugging: Check the formData
      console.log("Form Data to Submit:", Object.fromEntries(formData.entries()));

      const response = await axios.put(
        `http://localhost:5000/marketItem/updateMarket/${itemId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        onUpdate();
        onClose();
      } else {
        setError("Failed to update item. Please try again.");
      }
    } catch (error) {
      console.error("Error updating item:", error);
      setError("Failed to update item. Please try again.");
    }
  };

  const conditionOptions = ["new", "used", "refurbished"];
  const deliveryOptions = ["Standard Shipping", "Express Delivery", "Local Pickup", "Free Shipping"];

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Update Item Details</DialogTitle>
      <DialogContent>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            fullWidth
            label="Item Name"
            name="itemName"
            value={itemData.itemName}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Price"
            name="itemPrice"
            type="number"
            value={itemData.itemPrice}
            onChange={handleChange}
            required
          />
          <FormControl fullWidth>
            <InputLabel>Condition</InputLabel>
            <Select
              name="itemCondition"
              value={itemData.itemCondition}
              onChange={handleChange}
              required
            >
              {conditionOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Seller"
            name="companyOwner"
            value={itemData.companyOwner}
            onChange={handleChange}
            required
          />
          <FormControl fullWidth>
            <InputLabel>Delivery Status</InputLabel>
            <Select
              name="itemDeliveryStatus"
              value={itemData.itemDeliveryStatus}
              onChange={handleChange}
              required
            >
              {deliveryOptions.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <input type="file" onChange={handleFileChange} accept="image/*" />
          {previewImage && (
            <img src={previewImage} alt="Preview" className="w-full h-40 object-cover mt-2" />
          )}
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={itemData.description}
            onChange={handleChange}
            multiline
            rows={3}
          />
          <DialogActions>
            <Button onClick={onClose} color="secondary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Save Changes
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateItemForm;
