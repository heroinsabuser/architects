const CancelButton = ({className, onClick}:any) => {
  return (
    <button onClick={onClick} className={className} style={{border:'0', background:'white', cursor:'pointer'}}>
      <svg
        width="16"
        height="15"
        viewBox="0 0 16 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="1.35355"
          y1="0.646447"
          x2="15.3536"
          y2="14.6464"
          stroke="#C1C1C1"
        />
        <line
          x1="0.646447"
          y1="14.6464"
          x2="14.6464"
          y2="0.646448"
          stroke="#C1C1C1"
        />
      </svg>
    </button>
  );
};

export default CancelButton;
