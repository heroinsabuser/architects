import style from "./PhotoGallery.module.css";
import Photo from "../Photo/Photo";
import Sidebutton from "../SideButton/sidebutton";
import Lefticon from "../Icons/lefticon";
import Righticon from "../Icons/righticon";

const PhotoGallery = () => {
  return (
    <div className={style.gallery}>
      <div className={style.text}>
        <h1>Photo</h1>
        <h2>Gallery</h2>
      </div>
      <div className={style.photos}>
        <Photo image="./photo1.png" />
        <Photo image="./photo2.png" />
        <Photo image="./photo3.png" />
        <Photo image="./photo4.png" />
        <Photo image="./photo5.png" />
        <Photo image="./photo6.png" />
        <Photo image="./photo7.png" />
        <Photo image="./photo8.png" />
        <Photo image="./photo9.png" />
        <Photo image="./photo10.png" />
      </div>
      <div style={{ display: "inline-flex", alignItems:'center' }}>
        <div className={style.navigation}>01 / 05</div>
        <div style={{ marginLeft: "30px" }}>
          <Sidebutton>
            <Lefticon />
          </Sidebutton>
          <Sidebutton>
            <Righticon color='#333333' />
          </Sidebutton>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
