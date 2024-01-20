import style from './Photo.module.css'

const Photo = ({image}:any) => {
    return (
        <div className={style.photo}>
            <img src={image} alt="" />
        </div>
    );
};

export default Photo;