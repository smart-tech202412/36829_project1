// components/Spacing.js

const Spacing = () => {
    const spacings = [
      { label: "8 px", size: 8 },
      { label: "16 px", size: 16 },
      { label: "24 px", size: 24 },
      { label: "32 px", size: 32 },
      { label: "40 px", size: 40 },
      { label: "56 px", size: 56 },
      { label: "72 px", size: 72 },
      { label: "80 px", size: 80 },
      { label: "96 px", size: 96 },
      { label: "120 px", size: 120 },
    ];
  
    return (
      <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1 style={{ fontWeight: "bold", marginBottom: "20px" }}>05. Spacing</h1>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "10px" }}>
          {spacings.map((spacing, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: `${spacing.size}px`,
                  height: `${spacing.size}px`,
                  backgroundColor: "gray",
                }}
              ></div>
              <span style={{ fontSize: "14px", marginTop: "8px", display: "block" }}>
                {spacing.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Spacing;
  