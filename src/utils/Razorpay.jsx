import logo from "../assets/logo.png";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button"; // ✅ Fixed import

const RazorpayCheckout = ({ amount, userData }) => {
  const notifySuccess = () =>
    toast.success("Payment Successful", { autoClose: 2000 });
  const notifyError = () =>
    toast.error("Razorpay failed to load", { autoClose: 3000 });

  const loadRazorpay = () => {
    if (!window.Razorpay) {
      notifyError();
      return;
    }

    const options = {
      key: "rzp_test_GoJpVAQtMPkzJu", // Replace with your actual test key
      amount: amount * 100, // Convert ₹ to paise
      currency: "INR",
      name: "Vijaya Collections",
      description: "Fashion Order Payment",
      image: logo,
      handler: function (response) {
        notifySuccess();
        console.log("Payment ID:", response.razorpay_payment_id);
        // Send this ID to backend if needed
      },
      prefill: {
        name: userData?.name || "Customer",
        email: userData?.email || "guest@vijaya.com",
        contact: "9999999999",
      },
      notes: {
        address: "Vijaya Collections User",
      },
      theme: {
        color: "#0096A6",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <Button
      className="text-secondary mt-2 w-100 custom-button"
      onClick={loadRazorpay}
    >
      Place Order
    </Button>
  );
};

export default RazorpayCheckout;
