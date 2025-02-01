// components/ButtonVariants.js

const ButtonVariants = () => {
    return (
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Button Variants</h1>
  
        {/* Filled Buttons */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <button style={styles.filled.orange}>Large</button>
          <button style={styles.filled.green}>Large</button>
          <button style={styles.filled.brown}>Large</button>
        </div>
  
        {/* Outlined Buttons */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <button style={styles.outlined.orange}>Large</button>
          <button style={styles.outlined.green}>Large</button>
          <button style={styles.outlined.brown}>Large</button>
        </div>
  
        {/* Icon Buttons */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <button style={styles.icon.orange}>Large →</button>
          <button style={styles.icon.green}>Large →</button>
          <button style={styles.icon.brown}>Large →</button>
        </div>
  
        {/* Outlined Icon Buttons */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <button style={styles.iconOutlined.orange}>Large →</button>
          <button style={styles.iconOutlined.green}>Large →</button>
          <button style={styles.iconOutlined.brown}>Large →</button>
        </div>
  
        {/* Hover Buttons */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <button style={styles.hover.orange}>Hover</button>
          <button style={styles.hover.green}>Hover</button>
          <button style={styles.hover.brown}>Hover</button>
        </div>
  
        {/* Disabled Buttons */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
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
  
        {/* Dropdown */}
        <div style={{ marginTop: "20px" }}>
          <button style={styles.dropdown}>Dropdown ⌄</button>
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
        padding: "10px 20px",
        borderRadius: "4px",
        fontSize: "14px",
        cursor: "pointer",
      },
      green: {
        backgroundColor: "#017E4D",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "4px",
        fontSize: "14px",
        cursor: "pointer",
      },
      brown: {
        backgroundColor: "#BA8D6C",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "4px",
        fontSize: "14px",
        cursor: "pointer",
      },
    },
    outlined: {
      orange: {
        backgroundColor: "white",
        color: "#F79C00",
        border: "2px solid #F79C00",
        padding: "10px 20px",
        borderRadius: "4px",
        fontSize: "14px",
        cursor: "pointer",
      },
      green: {
        backgroundColor: "white",
        color: "#017E4D",
        border: "2px solid #017E4D",
        padding: "10px 20px",
        borderRadius: "4px",
        fontSize: "14px",
        cursor: "pointer",
      },
      brown: {
        backgroundColor: "white",
        color: "#BA8D6C",
        border: "2px solid #BA8D6C",
        padding: "10px 20px",
        borderRadius: "4px",
        fontSize: "14px",
        cursor: "pointer",
      },
    },
    icon: {
      orange: {
        backgroundColor: "#F79C00",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "4px",
        fontSize: "14px",
        cursor: "pointer",
      },
      green: {
        backgroundColor: "#017E4D",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "4px",
        fontSize: "14px",
        cursor: "pointer",
      },
      brown: {
        backgroundColor: "#BA8D6C",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "4px",
        fontSize: "14px",
        cursor: "pointer",
      },
    },
    iconOutlined: {
      orange: {
        backgroundColor: "white",
        color: "#F79C00",
        border: "2px solid #F79C00",
        padding: "10px 20px",
        borderRadius: "4px",
        fontSize: "14px",
        cursor: "pointer",
      },
      green: {
        backgroundColor: "white",
        color: "#017E4D",
        border: "2px solid #017E4D",
        padding: "10px 20px",
        borderRadius: "4px",
        fontSize: "14px",
        cursor: "pointer",
      },
      brown: {
        backgroundColor: "white",
        color: "#BA8D6C",
        border: "2px solid #BA8D6C",
        padding: "10px 20px",
        borderRadius: "4px",
        fontSize: "14px",
        cursor: "pointer",
      },
    },
    hover: {
      orange: {
        backgroundColor: "#FFF4E1",
        color: "#F79C00",
        border: "none",
        padding: "10px 20px",
        borderRadius: "4px",
        fontSize: "14px",
        cursor: "pointer",
      },
      green: {
        backgroundColor: "#E3F3E9",
        color: "#017E4D",
        border: "none",
        padding: "10px 20px",
        borderRadius: "4px",
        fontSize: "14px",
        cursor: "pointer",
      },
      brown: {
        backgroundColor: "#F8ECE7",
        color: "#BA8D6C",
        border: "none",
        padding: "10px 20px",
        borderRadius: "4px",
        fontSize: "14px",
        cursor: "pointer",
      },
    },
    disabled: {
      backgroundColor: "#F8F8F8",
      color: "#CCC",
      border: "none",
      padding: "10px 20px",
      borderRadius: "4px",
      fontSize: "14px",
      cursor: "not-allowed",
    },
    dropdown: {
      backgroundColor: "white",
      color: "#F79C00",
      border: "2px solid #F79C00",
      padding: "10px 20px",
      borderRadius: "4px",
      fontSize: "14px",
      cursor: "pointer",
      display: "inline-block",
    },
  };
  
  export default ButtonVariants;
  