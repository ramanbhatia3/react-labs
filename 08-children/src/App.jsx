
function App() {
  return <div style={{ display: "flex" }}>
    {/* <Card children={<div style={{ color: "white" }}>
      What do you want to post? <br /> <br />
      <input type="text" />
    </div>} /> */}


    <Card>
      <div style={{ color: "white" }}>
        What do you want to post? <br /> <br />
        <input type="text" />
      </div>
    </Card>


    <Card children={"Hey There!"} />
  </div>
}

function Card({ children }) {
  return <div style={{ background: "black", borderRadius: 10, color: "white", padding: 10, margin: 10 }}>
    {children}
  </div>
}

export default App
