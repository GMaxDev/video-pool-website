import darkVideopoolLogo from "../../img/dark_video-pool_logo.png";
import lightVideopoolLogo from "../../img/light_video-pool_logo.png";
import softExample from "../../img/base-soft.png";

export default function Header() {
  return (
    <div className="bg-dark-color flex justify-center">
      <div className="flex flex-col w-5/6 text-white my-10">
        <div className="flex flex-row items-center gap-x-1">
          <img
            className="h-12"
            src={darkVideopoolLogo}
            alt="Video Pool logo"
          />
          <h1 className="text-3xl font-semibold">Video Pool</h1>
        </div>

        <div className="flex h-[40rem] w-full justify-between gap-10">
          <div className="w-1/2 flex flex-col flex-start mt-10 gap-y-10">
            <h2 className="text-8xl font-semibold">A way to transcode for the internet</h2>
            <p>The easiest way to transcode video and get paid.</p>
            <button className="w-48 h-12 rounded-3xl bg-neutral" type="button">Download Now</button>
          </div>
          <img
            className="w-1/2 object-contain"
            src={softExample}
            alt="A Video Pool software example"
          />
        </div>
      </div>
    </div>
  );
}
