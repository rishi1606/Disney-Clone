import React, { useState, useEffect } from "react";
import db from "./firebase";
import "./Add.css";

const Add = () => {
  const [backgroundImg, setbackgroundImg] = useState("");
  const [cardImg, setcardImg] = useState("");
  const [description, setdescription] = useState("");
  const [movImg, setmovImg] = useState("");
  const [movImg1, setmovImg1] = useState("");
  const [movImg2, setmovImg2] = useState("");
  const [search, setsearch] = useState("");
  const [subTitle, setsubTitle] = useState("");
  const [title, settitle] = useState("");
  const [titleImg, settitleImg] = useState("");
  const [type, settype] = useState("");
  const [type1, settype1] = useState("");
  const [video, setvideo] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("movies")
      .add({
        backgroundImg: backgroundImg,
        cardImg: cardImg,
        description: description,
        movImg:movImg,
        movImg1:movImg1,
        movImg2:movImg2,
        search:search,
        subTitle:subTitle,
        title:title,
        titleImg:titleImg,
        type:type,
        type1:type1,
        video:video,
        
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

      setbackgroundImg("");
      setcardImg("");
      setdescription("");
      setmovImg("");
      setmovImg1("");
      setmovImg2("");
      setsearch("");
      setsubTitle("");
      settitle("");
      settitleImg("");
      settype("");
      settype1("");
      setvideo("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Add Movies</h1>

      <label>Background Image</label>
      <input
        placeholder="Background Image"
        value={backgroundImg}
        onChange={(e) => setbackgroundImg(e.target.value)}
      />

      <label>Card Image</label>
      <input
        placeholder="Card Image"
        value={cardImg}
        onChange={(e) =>setcardImg(e.target.value)}
      />
      <label>Description</label>
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
      <label>Movie Image</label>
      <input
        placeholder="Mov Img "
        value={movImg}
        onChange={(e) => setmovImg(e.target.value)}
      />

      <label>Movie Image1</label>
      <input
        placeholder="Mov Img1 "
        value={movImg1}
        onChange={(e) => setmovImg1(e.target.value)}
      />

      <label>Movie Image2</label>
      <input
        placeholder="Mov Img2 "
        value={movImg2}
        onChange={(e) => setmovImg2(e.target.value)}
      />

      <label>Search</label>
      <input
        placeholder="Search"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />

      <label>SubTitle</label>
      <input
        placeholder="SubTitle"
        value={subTitle}
        onChange={(e) => setsubTitle(e.target.value)}
      />

      <label>Title</label>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />

      <label>Title Image</label>
      <input
        placeholder="Title Image"
        value={titleImg}
        onChange={(e) =>  settitleImg(e.target.value)}
      />

      <label>Type</label>
      <input
        placeholder="type"
        value={type}
        onChange={(e) =>  settype(e.target.value)}
      />

      <label>Type1</label>
      <input
        placeholder="type1"
        value={type1}
        onChange={(e) =>  settype1(e.target.value)}
      />

      <label>video</label>
      <input
        placeholder="video"
        value={video}
        onChange={(e) =>  setvideo(e.target.value)}
      />
     
     
    
    

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Add;