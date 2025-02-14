import '@/components/playGradient.css';
// import 'src/app/page.js'

function PlayButton({ onClick, play }) {
  return (
    <div
      className="text-neutral-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex justify-center items-center gap-1 bg-transparent backdrop-blur-md rounded-full cursor-pointer"
      onClick={onClick}
    >
      <p className="font-semibold text-lg" style={{
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        background: "linear-gradient(90deg, #0077e7, #01d8d1)",
        filter: "hue-rotate(0deg)",
        animation: "hueShift 6s infinite linear 1s",
      }}>
        {/* {play ? "STOP" : "PLAY"} */}
      </p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="w-6 h-6"
        >
          <defs>
            <linearGradient id="playGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#2598be" stop-opacity="1" />
              <stop offset="100%" stop-color="#2598be" stop-opacity="1" />
            </linearGradient>
          </defs>
          {play ? (
            <path
              fillRule="evenodd"
              d="M5 4h3v16H5zm6 0h3v16h-3z"         
              clipRule="evenodd"
              fill="url(#playGradient)"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
              fill="url(#playGradient)"
            />
          )}
        </svg>
    </div>
  );
}


export default PlayButton;
