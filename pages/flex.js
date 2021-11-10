const Flex = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightpink",
      }}
    >
      <div style={{ width: 700 }}>
        <div
          style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}
        >
          <div style={{ flex: 1, padding: 20, backgroundColor: "lightblue" }}>
            Training on Flex layout (Blue)
          </div>
          <div style={{ flex: 1.5, padding: 20, backgroundColor: "lightcoral" }}>
            Training on Flex layout (Coral)
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 10,}}>
          <div style={{ flex: 1, backgroundColor: 'yellow', marginRight: 10 }}></div>
          <div
            style={{
              flex: 10,
              backgroundColor: "yellow",
              padding: 20,
              
              textAlign: "center",
            }}
          >
            Full (Yellow)
          </div>
          <div style={{ flex: 1, backgroundColor: 'yellowgreen', marginLeft: 10  }}></div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
          <div style={{ flex: 1, padding: 20, backgroundColor: "lightblue" }}>
            Training on Flex layout (Blue)
          </div>
          <div style={{ flex: 1, padding: 20, backgroundColor: "lightcoral" }}>
            Training on Flex layout (Coral)
          </div>
        </div>
        <div style={{ backgroundColor: "yellow", padding: 20, marginBottom: 10 }}>
          Full (Yellow)
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 1, padding: 20, backgroundColor: "lightblue" }}>
            Training on Flex layout (Blue)
          </div>
          <div style={{ flex: 2, padding: 20, backgroundColor: "lightcoral" }}>
            Training on Flex layout (Coral)
          </div>
          <div style={{ flex: 1, padding: 20, backgroundColor: "lightblue" }}>
            Training on Flex layout (Blue)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flex;
