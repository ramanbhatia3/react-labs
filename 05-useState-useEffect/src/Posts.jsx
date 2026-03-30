import { useState } from 'react'

function Posts() {

    const [posts, setPosts] = useState([])

    const postComponents = posts.map(post => <PostComponent
        name = {post.name}    
        followerCount = {post.followerCount}    
        time = {post.time}    
        image = {post.image}    
        description = {post.description}    
    />)

    function addPost(){
        setPosts([...posts, {
            name: "Raman Bhatia",
            followerCount: 879,  
            time: "12h ago",
            image: "https://i.pinimg.com/474x/5d/a3/60/5da360c98b9af0ad709fe18606992229.jpg",
            description: "Hey there! I'm learning React"
        }])
    }

  return (
    <div style={{background: "#dfe6ef", height: "100vh"}}>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div>
            <button onClick={addPost} style={{padding: 10}}>Add Post</button>
          <div>
            {postComponents}
          </div>
        </div>
      </div>
    </div>
  )
}

function PostComponent({name, followerCount, time, image, description}){
  return <div style={{width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20, margin: 20}}>
    <div style={{display: "flex"}}>
      <img src={image} alt="" style={{width: 30, height: 30, borderRadius: 20}} />
      <div style={{fontSize: 10, marginLeft: 10}}>
        <b>{name}</b>
        <div>{followerCount} followers</div>
        <div>{time}</div>
      </div>
    </div>

    <div style={{fontSize: 12}}>
      {description}
    </div>

  </div>
}

export default Posts
