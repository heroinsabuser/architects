const Righticon = ( {color}:any) => {
  return (
    <div>
      <svg
        width="19"
        height="9"
        viewBox="0 0 19 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.935303 4.5C0.935303 4.22386 1.15916 4 1.4353 4L17.4353 4C17.7114 4 17.9353 4.22386 17.9353 4.5C17.9353 4.77614 17.7114 5 17.4353 5L1.4353 5C1.15916 5 0.935303 4.77614 0.935303 4.5Z"
          fill={color}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.5817 0.646447C13.777 0.451184 14.0936 0.451184 14.2889 0.646447L18.1424 4.5L14.2889 8.35355C14.0936 8.54882 13.777 8.54882 13.5817 8.35355C13.3865 8.15829 13.3865 7.84171 13.5817 7.64645L16.7282 4.5L13.5817 1.35355C13.3865 1.15829 13.3865 0.841709 13.5817 0.646447Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Righticon;
