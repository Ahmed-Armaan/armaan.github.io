import OptIcon1 from "./assets/three-dots.svg";
import OptIcon2 from "./assets/aqua-three-dots.svg";
import img4 from "./assets/IMG_20230929_022129(1).jpg";
import img2 from "./assets/WhatsApp Image 2023-10-01 at 03.27.24.jpeg";
import img1 from "./assets/WhatsApp Image 2023-10-01 at 03.27.50.jpeg";
import img3 from "./assets/WhatsApp Image 2023-10-01 at 03.28.15.jpeg";
import { useState,useEffect } from "react";
import "./style.css"

const App = () =>{
  const OptIconstyle = {height:'35px',width:'35px'};
  const bodystyle = {color:'red'};
  const bodyHeight = {height:'625px'};
  const messages = [
    ">Nothing better than a fine morning to build a good day.",
    ">Afternoon can be so tiring sometimes.",
    ">Nice evenings of a hard worked day are so satisfying",
    ">I code at nights!!"
  ];
  const backgrounds=[
    "https://r4.wallpaperflare.com/wallpaper/712/851/599/artistic-pixel-art-8-bit-wallpaper-5930082d711aed1bd6f7f82fd021962d.jpg",
    "https://www.pixelstalk.net/wp-content/uploads/images6/8-Bit-Wallpaper-Free-Download.png",
    "https://wallpapers.com/images/high/8-bit-aesthetic-city-artwork-xe1moq1q21qqtlrf.webp",
    "https://wallpaper.dog/large/11005223.png"
  ];
  const [messagedis,updatemessage] = useState('');
  const [Hour,setHour] = useState(new Date().getHours());
  const [ctime,setTime] = useState(new Date().toLocaleTimeString());
  const [background,setBackground] = useState('');
  const [textColor,setColor] = useState('black');
  const [OptIcon,changeOptIcon] = useState(OptIcon1);
  const [image,setImage] = useState('');
  const headstyle = {color: `${textColor}`,height : '80px'}
  const UpdateTime=()=>{
    setTime(new Date().toLocaleTimeString());
    setHour(new Date().getHours());
  }
  setInterval(UpdateTime,1000);
  document.body.style.backgroundImage = `url('${background}')`;
  useEffect(()=>{
    if(Hour>=4 && Hour<10){
      updatemessage(messages[0]);
      setBackground(backgrounds[0]);
      setColor('black');
      changeOptIcon(OptIcon1);
      setImage(img1);
    }
    else if(Hour>=10 && Hour<16){
      updatemessage(messages[1]);
      setBackground(backgrounds[1]);
      setColor('black');
      changeOptIcon(OptIcon1);
      setImage(img2);
    }
    else if(Hour>=16 && Hour<22){
      updatemessage(messages[2]);
      setBackground(backgrounds[2]);
      setColor('black');
      changeOptIcon(OptIcon1);
      setImage(img3);
    }
    else{
      updatemessage(messages[3]);
      setBackground(backgrounds[3]);
      setColor('aqua');
      changeOptIcon(OptIcon2);
      setImage(img4);
    }
  },[Hour]);

  return(
    <div style={bodyHeight}>
    <div className="header" style={headstyle}>
      <a href=''><img src={OptIcon} style={OptIconstyle}></img></a>
      <div className="time">
        <h1>{ctime}</h1>
      </div>
      <div className="message">
        <p>{messagedis}</p>
      </div>
      <hr></hr>
    </div>
    <div className="body" style={bodystyle}>
      <h1 className="head1">hello!</h1>
      <p className="head2">I am Armaan Ahmed,an undergraduate student and a tech<br></br>enthusiast.
      I can do full-stack web development,<br></br>game development in C++and am currentlr<br></br>learning 
      AI/ML and devops.<br></br>I find these fancy sillicon so intriguing.</p>
      <img className="image" src={image} alt={"me"}></img>
    </div>
    </div>
  );
}

export default App;