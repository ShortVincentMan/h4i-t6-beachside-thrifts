require("./wave.css");

export default function Wave() {
  return (
    <div className="wave">
      <svg className="wave-layer wave-layer--back" viewBox="0 0 2880 140" preserveAspectRatio="none">
        <path d="M0 65 C180 65 180 35 360 35 S540 65 720 65 S900 95 1080 95 S1260 65 1440 65 S1620 35 1800 35 S1980 65 2160 65 S2340 95 2520 95 S2700 65 2880 65 V140 H0 Z" />
      </svg>
      <svg className="wave-layer wave-layer--front" viewBox="0 0 2880 140" preserveAspectRatio="none">
        <path d="M0 85 C180 85 180 55 360 55 S540 85 720 85 S900 115 1080 115 S1260 85 1440 85 S1620 55 1800 55 S1980 85 2160 85 S2340 115 2520 115 S2700 85 2880 85 V140 H0 Z" />
      </svg>
    </div>
  );
}
