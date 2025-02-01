// components/Colors.js

const Colors = () => {
  const brandColors = [
    { name: "Primary", color: "#017E4D" },
    { name: "Secondary", color: "#9C752F" },
    { name: "Primary", color: "#BA8D6C" },
    { name: "Secondary", color: "#EDEAE3" },
    { name: "Primary", color: "#F79C00" },
    { name: "Secondary", color: "#8B8A44" },
  ];

  const stateColors = [
    { name: "Info", color: "#017E4D" },
    { name: "Success", color: "#49B95D" },
    { name: "Warning", color: "#F3CF5B" },
    { name: "Error", color: "#EB3737" },
  ];

  const blackColors = [
    { name: "Black 1", color: "#0D0D0D" },
    { name: "Black 2", color: "#1C1C1C" },
    { name: "White", color: "#FFFFFF" },
  ];

  const greyColors = [
    { name: "Grey 1", color: "#373737" },
    { name: "Grey 2", color: "#6F6F6F" },
    { name: "Grey 3", color: "#A2A2A2" },
    { name: "Grey 4", color: "#D6D6D6" },
    { name: "Grey 5", color: "#F5F5F5" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontWeight: "bold", marginBottom: "20px" }}>01. Colors</h1>
      
      {/* Brand Colors */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Brand Colors</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          {brandColors.map((color, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: color.color,
                  borderRadius: "8px",
                }}
              ></div>
              <span style={{ display: "block", marginTop: "8px" }}>
                {color.name} <br /> {color.color}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* State Colors */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>State Colors</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          {stateColors.map((color, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: color.color,
                  borderRadius: "4px",
                }}
              ></div>
              <span style={{ display: "block", marginTop: "8px" }}>
                {color.name} <br /> {color.color}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Black Colors */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Black Colors</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          {blackColors.map((color, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: color.color,
                  borderRadius: "4px",
                }}
              ></div>
              <span style={{ display: "block", marginTop: "8px" }}>
                {color.name} <br /> {color.color}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Grey Colors */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Grey Colors</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          {greyColors.map((color, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: color.color,
                  borderRadius: "4px",
                }}
              ></div>
              <span style={{ display: "block", marginTop: "8px" }}>
                {color.name} <br /> {color.color}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Colors;
