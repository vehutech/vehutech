import DecryptedText from "./DecryptedText";
import Hyperspeed from "./HyperSpeed";

const Value = () => {
  return (
    <div className="relative">
      <span className="text-[20rem] font-serif absolute top-[10%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        "
      </span>
      <div className="mt-30 m-auto w-[50%] text-center absolute top-[10%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <DecryptedText
          text="Every line purposeful. Every design decision deliberate.
 Technology that just works."
          animateOn="view"
          revealDirection="center"
          speed={50}
          maxIterations={20}
          className="text-2xl font-mono"
        />
        <span className="w-[20%] pt-8 text-gray-500 font-semibold">
          let's build something cool as we journey to{" "}
          <span className="text-primary">andromeda</span>
        </span>
      </div>
      <div className="w-full h-dvh">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion: "turbulentDistortion",
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
            },
          }}
        />
      </div>
    </div>
  );
};

export default Value;
