import "./App.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RxCross2 } from "react-icons/rx";
import "./modal.css";

const images = [
  "./Rectangle 5160.jpg",
  "./Rectangle 5160.jpg",
  "./Rectangle 5160.jpg",
];

function App() {
  const [modal, setModal] = useState(false);
  const [togglecolor, setTogglecolor] = useState(true);
  const [togglecolor1, setTogglecolor1] = useState(true);
  const [togglecolor2, setTogglecolor2] = useState(true);
  var [color, setColor] = useState();
  var [color1, setColor1] = useState();
  const [color2, setColor2] = useState();

  var click = (color) => {
    setColor(color);
  };
  var click1 = (color1) => {
    setColor1(color1);
  };
  var click2 = (color2) => {
    setColor2(color2);
  };

  useEffect(() => {
    document.getElementById("#1").style.backgroundColor = color;
    document.getElementById("#2").style.backgroundColor = color1;
    document.getElementById("#3").style.backgroundColor = color2;
  }, [color, color1, color2]);
  const [image, setImage] = useState();
  const [imageArr, setImageArr] = useState([...images]);

  const toggleModal = () => {
    setModal(!modal);
  };
  const toggleColor = () => {
    setTogglecolor(!togglecolor);
    click1("#171717");
    click2("#171717");
    if (togglecolor) {
      click("#28292F");
    } else {
      click("#171717");
    }
  };
  const toggleColor1 = () => {
    setTogglecolor1(!togglecolor1);
    click("#171717");
    click2("#171717");

    if (togglecolor1) {
      click1("#28292F");
    } else {
      click1("#171717");
    }
  };
  const toggleColor2 = () => {
    setTogglecolor2(!togglecolor2);
    click("#171717");
    click1("#171717");

    if (togglecolor2) {
      click2("#28292F");
    } else {
      click2("#171717");
    }
  };

  const changeImage = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const onSubmit = () => {
    setImageArr((prev) => [...prev, image]);
    toggleModal();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className=" f1 h-[825px] top-[-1468px] left-[-910px] gap-0 bg-[linear-gradient(180deg,#373E44_-100%,#191B1F_100%)]">
        <div className="  f2 gap-0 border absolute rounded-[27px_27px_27px_27px] border-[0px_0px] left-[15px] top-[74px] border-[1px_1px] border-solid border-[#96BEE7] "></div>
        <div className="f3 w-[670px] h-[285px] gap-0 bg-[#363C43] shadow-[5.67px_5.67px_3.78px_0px_#00000066] rounded-[18.89px_18.89px_18.89px_18.89px] top-[70px]  ">
          <img
            className="g1a"
            src="./Frame 1000002294 (2).jpg"
            alt="img1"
          ></img>
          <img className="g1b" src="./Rectangle 39335.jpg" alt="img2"></img>
          <div className="f3a">
            <div className="f3a11">
              <div className="f3b">
                <button id="#1" className="f3a1" onClick={toggleColor}>
                  <span className="f3a1a">About Me</span>
                </button>
              </div>
              <button id="#2" className="f3b1" onClick={toggleColor1}>
                <span className="f3b1a">Experiences</span>
              </button>
              <button id="#3" className="f3b2" onClick={toggleColor2}>
                <span className="f3c1a">Recommended</span>
              </button>
            </div>
          </div>
          <div className="a1">
            <span className="a1a">
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now.
            </span>
            <div class="a11">
              <span className="a1b">
                I was born and raised in Albany, NY& have been living in Santa
                Carla for the past 10 years my wife Tiffany and my 4 year old
                twin daughters- Emma and Ella. Both of them are just starting
                school, so my calender is usually blocked between 9-10 AM. This
                is a...
              </span>
            </div>
          </div>
        </div>
        <img className="g1c" src="./Rectangle 5.jpg" alt="img3"></img>
      </div>
      <div className="f4 w-[670px] h-[285px] gap-0 bg-[#363C43] shadow-[5.67px_5.67px_3.78px_0px_#00000066] rounded-[18.89px_18.89px_18.89px_18.89px] top-[404px]  ">
        <img className="g1a" src="./Frame 1000002294 (2).jpg" alt="img1"></img>

        <div className="absolute w-[149px] h-[62px] gap-0 bg-neutral-900 shadow-[0px_4px_10px_2px_#00000040_inset] rounded-[20px_20px_20px_20px] left-[50px] top-[27px] ">
          <span className="absolute w-[72px] h-[30px] gap-0 text-xl font-medium leading-[30px] text-left text-white left-[43px] top-[16px]">
            Gallery
          </span>
        </div>

        <button
          className="absolute w-[131.32px] h-[46px] gap-0 text-[#FFFFFF08] shadow-[0px_3.26px_3.26px_0px_hsla(0,0%,100%,0.149)inset,0px_0px_48.91px_0px#FFFFFF0D_inset,9px_10px_7.1px_0px_#00000066,-0.5px_-0.5px_6.9px_0px_#FFFFFF40] rounded-[104px_104px_104px_104px] left-[364.32px] top-[30px]"
          onClick={toggleModal}
        >
          <span className="w-[169px] h-[7px] gap-0 absolute text-xs font-bold leading-[6.29px] text-center text-white left-[-18px] top-[22px]">
            + ADD IMAGE
          </span>
        </button>

        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2>Upload an Image</h2>
              <input
                className="file"
                type="file"
                accept="image/*"
                onChange={changeImage}
              ></input>
              <button className="close-modal" onClick={toggleModal}>
                <RxCross2 />
              </button>

              <button className="submit" type="submit" onClick={onSubmit}>
                Submit
              </button>
            </div>
          </div>
        )}

        <div className="mt-28">
          <Slider {...settings}>
            {imageArr.map((data, index) => (
              <div className="img" key={index}>
                <img
                  className={
                    "w-[160px] h-[139px] gap-0 rounded-[24px_24px_24px_24px]  ml-[50px] mt-[20px]"
                  }
                  src={data}
                  alt="g1..."
                ></img>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <img className="g1d" src="./Rectangle 5.jpg" alt="img3"></img>
    </div>
  );
}

export default App;
