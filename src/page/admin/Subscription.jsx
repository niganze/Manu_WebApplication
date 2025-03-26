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
  TablePagination,
  CircularProgress,
  Alert
} from "@mui/material";
import axios from "axios";

const Subscription = () => {
  const [sub, setSub] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalSubscriptions, setTotalSubscriptions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllSubscriptions = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`http://localhost:5000/sub/getSubscriptions`, {
          params: {
            page: page + 1,
            limit: rowsPerPage
          }
        });

        // Add defensive checks for the response structure
        const subscriptions = res.data?.subscriptions || res.data || [];
        const total = res.data?.total || subscriptions.length;

        setSub(subscriptions);
        setTotalSubscriptions(total);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error.message || "An error occurred while fetching subscriptions");
        setSub([]);
        setTotalSubscriptions(0);
        setLoading(false);
      }
    };
    getAllSubscriptions();
  }, [page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/sub/deleteSubscription/${id}`);
      // Refresh the current page after deletion
      const res = await axios.get(`http://localhost:5000/sub/getSubscriptions`, {
        params: {
          page: page + 1,
          limit: rowsPerPage
        }
      });

      const subscriptions = res.data?.subscriptions || res.data || [];
      const total = res.data?.total || subscriptions.length;

      setSub(subscriptions);
      setTotalSubscriptions(total);
    } catch (error) {
      console.error(error);
      setError(error.message || "An error occurred while deleting subscription");
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">All Subscriptions</h1>
      
      {error && (
        <Alert severity="error" className="mb-4">
          {error}
        </Alert>
      )}

      <div className="flex flex-row gap-96 mb-4">
        <TextField label="Search" variant="outlined" size="small" />
        <span className="text-lg px-4 py-2">
          {totalSubscriptions} Subscriptions
        </span>
      </div>

      {loading ? (
        <div className="flex justify-center">
          <CircularProgress />
        </div>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sub.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    No subscriptions found
                  </TableCell>
                </TableRow>
              ) : (
                sub.map((item, index) => (
                  <TableRow key={item._id || index}>
                    <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>
                      <Button 
                        color="error" 
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5]}
            component="div"
            count={totalSubscriptions}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      )}
    </div>
  );
};

export default Subscription;