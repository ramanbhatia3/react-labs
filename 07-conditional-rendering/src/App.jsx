import { useState } from 'react'

function App() {

  return (
    <div style={{background: "#dfe6ef", height: "100vh"}}>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div>
          <div>
            <PostComponent
              name = {"Raman Bhatia"}
              subtitle = {"879 followers"}
              time = {"12h ago"}
              image = {"https://i.pinimg.com/474x/5d/a3/60/5da360c98b9af0ad709fe18606992229.jpg"}
              description = {"Hey there! I'm learning React"}
            />
            <br />
          </div>

          <div>
            <PostComponent
              name = {"Mohit Bhatia"}
              subtitle = {"promoted"}

              image = {"https://i.pinimg.com/474x/5d/a3/60/5da360c98b9af0ad709fe18606992229.jpg"}
              description = {"Hey there! I'm finding a job in Canada!"}
            />
            <br />
          </div>
        </div>
      </div>

      <ToggleMessage />

    </div>
  )
}

function PostComponent({name, subtitle, time, image, description}){
  return <div style={{width: 300, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20, marginTop: 10}}>
    <div style={{display: "flex", alignItems: "center"}}>
      <img src={image} alt="" style={{width: 40, height: 40, borderRadius: 20}} />
      <div style={{fontSize: 15, marginLeft: 10}}>
        <b>{name}</b>
        <div>{subtitle}</div>
        {time !== undefined ? <div style={{display: "flex", alignItems: "center"}}>
          <div>{time}</div>
          <img src="https://w7.pngwing.com/pngs/963/157/png-transparent-clock-interface-loading-waiting-gradak-interface-icon.png" style={{width: 10, height: 10, marginLeft: 2}} />
        </div> : null}
        {/* {time !== undefined && <div style={{display: "flex", alignItems: "center"}}>
          <div>{time}</div>
          <img src="https://w7.pngwing.com/pngs/963/157/png-transparent-clock-interface-loading-waiting-gradak-interface-icon.png" style={{width: 10, height: 10, marginLeft: 2}} />
        </div>} */}
      </div>
    </div>

    <div style={{fontSize: 14, marginTop: 5}}>
      {description}
    </div>

  </div>
}

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>
      {isVisible && <p>This message is conditionally rendered!</p>}
    </div>
  )
}

export default App