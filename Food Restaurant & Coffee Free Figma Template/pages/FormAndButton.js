// components/FormAndButtons.js

const FormAndButtons = () => {
    return (
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
          {/* Left Section */}
          <div style={{ width: "60%" }}>
            <div style={{ marginBottom: "10px" }}>
              <label>Email Address</label>
              <input type="text" style={styles.input} />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Your Phone</label>
              <input type="text" style={styles.input} />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Your Email Address</label>
              <input type="text" style={styles.input} />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Your Address</label>
              <input type="text" style={styles.input} />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Note Your Orders</label>
              <textarea style={styles.textarea}></textarea>
            </div>
          </div>
  
          {/* Right Section */}
          <div style={{ width: "35%" }}>
            <div style={{ marginBottom: "10px" }}>
              <label>Your New Address</label>
              <input type="text" style={styles.input} />
            </div>
          </div>
        </div>
  
        {/* Dropdowns */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
          <div style={{ width: "48%" }}>
            <label>Choose State</label>
            <select style={styles.select}>
              <option value="">Select</option>
            </select>
          </div>
          <div style={{ width: "48%" }}>
            <label>Choose City</label>
            <select style={styles.select}>
              <option value="">Select</option>
            </select>
          </div>
        </div>
  
        {/* Buttons */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
          <button style={styles.button.orange}>Back to Cart</button>
          <button style={styles.button.black}>Proceed to Checkout</button>
        </div>
  
        {/* Subscription Section */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
          <input type="text" placeholder="Enter your mail" style={styles.input} />
          <button style={styles.button.orange}>Submit Now</button>
          <input type="text" placeholder="Enter your mail" style={styles.input} />
          <button style={styles.button.brown}>Subscribe Now</button>
        </div>
  
        {/* Search Section */}
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <input type="text" placeholder="Search..." style={{ ...styles.input, width: "80%" }} />
          <button style={styles.button.black}>🔍</button>
        </div>
  
        {/* Promo Code Section */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
          <input type="text" placeholder="Enter Promo Code" style={styles.input} />
          <button style={styles.button.orange}>Apply</button>
          <button style={styles.button.brown}>Run</button>
        </div>
  
        {/* Footer Buttons */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button style={styles.button.orange}>Update Cart</button>
          <button style={styles.button.orange}>Continue Shopping</button>
          <button style={styles.button.orange}>Proceed to Checkout</button>
        </div>
      </div>
    );
  };
  
  // Styles
  const styles = {
    input: {
      width: "100%",
      padding: "10px",
      margin: "5px 0",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    textarea: {
      width: "100%",
      height: "80px",
      padding: "10px",
      margin: "5px 0",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    select: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    button: {
      orange: {
        backgroundColor: "#F79C00",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      },
      black: {
        backgroundColor: "#000",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      },
      brown: {
        backgroundColor: "#BA8D6C",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      },
    },
  };
  
  export default FormAndButtons;
  