// components/SmallButtons.js

const SmallButtons = () => {
    return (
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
        <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Small Button Variants</h1>
  
        {/* Filled Buttons */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <button style={styles.filled.orange}>Small</button>
          <button style={styles.filled.green}>Small</button>
          <button style={styles.filled.brown}>Small</button>
        </div>
  
        {/* Outlined Buttons */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <button style={styles.outlined.orange}>Small</button>
          <button style={styles.outlined.green}>Small</button>
          <button style={styles.outlined.brown}>Small</button>
        </div>
  
        {/* Icon Buttons */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <button style={styles.icon.orange}>Small →</button>
          <button style={styles.icon.green}>Small →</button>
          <button style={styles.icon.brown}>Small →</button>
        </div>
  
        {/* Outlined Icon Buttons */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <button style={styles.iconOutlined.orange}>Small →</button>
          <button style={styles.iconOutlined.green}>Small →</button>
          <button style={styles.iconOutlined.brown}>Small →</button>
        </div>
  
        {/* Hover Buttons */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <button style={styles.hover.orange}>Hover</button>
          <button style={styles.hover.green}>Hover</button>
          <button style={styles.hover.brown}>Hover</button>
        </div>
  
        {/* Disabled Buttons */}
        <div style={{ display: "flex", gap: "10px" }}>
          <button style={styles.disabled} disabled>
            Disable
          </button>
          <button style={styles.disabled} disabled>
            Disable
          </button>
          <button style={styles.disabled} disabled>
            Disable
          </button>
        </div>
      </div>
    );
  };
  
  // Styles
  const styles = {
    filled: {
      orange: {
        backgroundColor: "#F79C00",
        color: "white",
        border: "none",
        padding: "5px 10px",
        borderRadius: "4px",
        fontSize: "12px",
        cursor: "pointer",
      },
      green: {
        backgroundColor: "#017E4D",
        color: "white",
        border: "none",
        padding: "5px 10px",
        borderRadius: "4px",
        fontSize: "12px",
        cursor: "pointer",
      },
      brown: {
        backgroundColor: "#BA8D6C",
        color: "white",
        border: "none",
        padding: "5px 10px",
        borderRadius: "4px",
        fontSize: "12px",
        cursor: "pointer",
      },
    },
    outlined: {
      orange: {
        backgroundColor: "white",
        color: "#F79C00",
        border: "2px solid #F79C00",
        padding: "5px 10px",
        borderRadius: "4px",
        fontSize: "12px",
        cursor: "pointer",
      },
      green: {
        backgroundColor: "white",
        color: "#017E4D",
        border: "2px solid #017E4D",
        padding: "5px 10px",
        borderRadius: "4px",
        fontSize: "12px",
        cursor: "pointer",
      },
      brown: {
        backgroundColor: "white",
        color: "#BA8D6C",
        border: "2px solid #BA8D6C",
        padding: "5px 10px",
        borderRadius: "4px",
        fontSize: "12px",
        cursor: "pointer",
      },
    },
    icon: {
      orange: {
        backgroundColor: "#F79C00",
        color: "white",
        border: "none",
        padding: "5px 10px",
        borderRadius: "4px",
        fontSize: "12px",
        cursor: "pointer",
      },
      green: {
        backgroundColor: "#017E4D",
        color: "white",
        border: "none",
        padding: "5px 10px",
        borderRadius: "4px",
        fontSize: "12px",
        cursor: "pointer",
      },
      brown: {
        backgroundColor: "#BA8D6C",
        color: "white",
        border: "none",
        padding: "5px 10px",
        borderRadius: "4px",
        fontSize: "12px",
        cursor: "pointer",
      },
    },
    iconOutlined: {
      orange: {
        backgroundColor: "white",
        color: "#F79C00",
        border: "2px solid #F79C00",
        padding: "5px 10px",
        borderRadius: "4px",
        fontSize: "12px",
        cursor: "pointer",
      },
      green: {
        backgroundColor: "white",
        color: "#017E4D",
        border: "2px solid #017E4D",
        padding: "5px 10px",
        borderRadius: "4px",
        fontSize: "12px",
        cursor: "pointer",
      },
      brown: {
        backgroundColor: "white",
        color: "#BA8D6C",
        border: "2px solid #BA8D6C",
        padding: "5px 10px",
        borderRadius: "4px",
        fontSize: "12px",
        cursor: "pointer",
      },
    },
    hover: {
      orange: {
        backgroundColor: "#FFF4E1",
        color: "#F79C00",
        border: "none",
        padding: "5px 10px",
        borderRadius: "4px",
        fontSize: "12px",
        cursor: "pointer",
      },
      green: {
        backgroundColor: "#E3F3E9",
        color: "#017E4D",
        border: "none",
        padding: "5px 10px",
        borderRadius: "4px",
        fontSize: "12px",
        cursor: "pointer",
      },
      brown: {
        backgroundColor: "#F8ECE7",
        color: "#BA8D6C",
        border: "none",
        padding: "5px 10px",
        borderRadius: "4px",
        fontSize: "12px",
        cursor: "pointer",
      },
    },
    disabled: {
      backgroundColor: "#F8F8F8",
      color: "#CCC",
      border: "none",
      padding: "5px 10px",
      borderRadius: "4px",
      fontSize: "12px",
      cursor: "not-allowed",
    },
  };
  
  export default SmallButtons;
  