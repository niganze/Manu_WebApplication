import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import axios from "axios";
import { Notify } from "notiflix";
import { IoMdClose } from "react-icons/io";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const itemsPerPage = 5;

  const handleOpenDonationForm = () => setOpenDonationForm(true);

  useEffect(() => {
    const getAllItems = async () => {
      try {
        const res = await axios.get(
          `https://manu-backend-6i7q.onrender.com/donation/getAllDonation`
        );
        setDonation(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getAllItems();
  }, []);

  const totalPages = Math.ceil(donation.length / itemsPerPage);
  const paginatedDonations = donation.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleConfirmPayment = async (id) => {
    try {
      const res = await axios.put(
        `https://manu-backend-6i7q.onrender.com/donation/UpdateDonationApprovalStatus`,
        {
          donationId: id,
          approvalStatus: "Approved",
        }
      );
      console.log("Update success:", res.data);
  
      Notify.success("Donation Approved");
  
      // 🔁 Force page reload after approval
      setTimeout(() => {
        window.location.reload(); // <- reloads the whole page
      }, 1000); // wait 1s for user to see the success message
    } catch (error) {
      console.error("Error confirming payment:", error);
    }
  };
  

  const handleViewDonation = (donation) => {
    setSelectedDonation(donation);
    setIsViewModalOpen(true);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-extrabold text-gray-500">
            Donation Management
          </h1>
          <button
            onClick={handleOpenDonationForm}
            className="bg-[#ABA1FF] text-white px-4 py-2 rounded-lg hover:bg-purple-500 flex items-center transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <Heart className="w-5 h-5 mr-2" /> {donation.length}
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  {[
                    "No",
                    "ProjectTitle",
                    "Donor Email",

                    "Donation kind",
                    "approvalStatus",
                    "Actions",
                  ].map((header) => (
                    <th
                      key={header}
                      className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {paginatedDonations.map((item, index) => (
                  <tr
                    key={item._id}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-4 py-4 text-sm text-gray-900">
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-900">
                      {item?.ProjectId?.title}
                    </td>
                    {/* <td className="px-4 py-4 text-sm text-gray-500">
                      {item.userId?.firstname} {item.userId?.lastname}
                    </td> */}
                    <td className="px-4 py-4 text-sm text-gray-500">
                      {item.donorEmail}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500">
                      {item?.DonationKind || "N/A"}
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.approvalStatus === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : item.approvalStatus === "Approved"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {item.approvalStatus}
                      </span>
                    </td>
                    <td className="px-4 py-4 flex flex-row space-x-3">
                      <button
                        onClick={() => handleViewDonation(item)}
                        className="text-[#ABA1FF] hover:text-purple-700 transition-colors duration-200"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleConfirmPayment(item._id)}
                        className="text-green-400 hover:text-green-700 transition-colors duration-200"
                      >
                        Confirm Payment
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>

        {/* View Modal */}
        {isViewModalOpen && selectedDonation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full relative">
              <button
                onClick={() => setIsViewModalOpen(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl"
              >
                <IoMdClose size={25}/>
              </button>
              <h2 className="text-xl font-semibold mb-4 text-[#ABA1FF]">
                Donation Details
              </h2>
              <p>
                <strong>Project Title:</strong>{" "}
                {selectedDonation.ProjectId?.title}
              </p>
              <p>
                <strong>Donor Name:</strong>{" "}
                {selectedDonation.userId?.firstname}{" "}
                {selectedDonation.userId?.lastname}
              </p>
              <p>
                <strong>Donor Email:</strong> {selectedDonation.donorEmail}
              </p>
              <p>
                <strong>Donation Kind:</strong> {selectedDonation.DonationKind}
              </p>
              <p>
                <strong>Materials:</strong> {selectedDonation.Comment || "N/A"}
              </p>
              <p>
                <strong>Money:</strong> {selectedDonation.AmountDonated ||"N/A"}
              </p>
              <p>
                <strong>ApprovalStatus:</strong> {selectedDonation.approvalStatus}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donation;
