import styles from "./icon.module.css";

const Icon = () => {
  return (
    <div className={styles.icon}>
      <div>
        <img style={{width:'100%', height:'100%'}} src="./up_icon.svg" alt="" />
      </div>
      <div style={{position:'absolute', bottom:"-4px"}}>
        <img style={{width:'100%', height:'100%'}} src="./down_icon.svg" alt="" />
      </div>
    </div>
  );
};

export default Icon;
