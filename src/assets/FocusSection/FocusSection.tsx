import style from './FocusSection.module.css'

const FocusSection = () => {
  return (
    <section style={{ marginTop: "150px" }}>
      <h1 style={{ marginBottom: "60px" }}>Main Focus/Mission Statement</h1>
      <div style={{ display: "inline-flex", height:'140px' }}>
        <div className={style.content} style={{marginRight:'187px'}}>
          <h1 className={style.title}>1</h1>
          <p className={style.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat.
          </p>
        </div>
        <div className={style.content}>
          <h1 className={style.title}>2</h1>
          <p className={style.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat, magna mauris porttitor
            tortor, a auctor est felis ut nisl.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
