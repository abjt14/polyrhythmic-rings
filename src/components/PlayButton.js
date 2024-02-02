function PlayButton({ onClick }) {
  return (
    <div
      className="text-neutral-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 z-50 flex justify-center items-center gap-1 bg-[rgba(128,128,128,.1)] backdrop-blur-md rounded-full cursor-pointer"
      onClick={onClick}
    >
      <p className="font-semibold">PLAY</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

export default PlayButton;
