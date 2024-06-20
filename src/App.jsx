import "./App.css";

import Header from "./components/header/header";
import ImpactInfo from "./components/impact-info/impact-info";
import ReverseImpactInfo from "./components/reverse-impact-info/reverse-impact-info";

import Soft1 from "./img/soft_1.png";
import Soft2 from "./img/soft_2.png";

export default function App() {
  return (
    <div className="flex flex-col">
      <Header />

      <ImpactInfo
        title="Easy to install and get started"
        content="Video Pool presents the first turnkey video transcoding tool. It allows you to share the computing power of your graphics card through the Livepeer network to assist with video decoding."
        imgSrc={Soft1}
      />

      <ReverseImpactInfo
        title="Servers worldwide"
        content="With servers in Europe, Asia, and the United States, you're equipped to broadcast your stream worldwide, efficiently, quickly, and securely."
        imgSrc={Soft2}
      />

      <ImpactInfo
        title="Easy to install and get started"
        content="Video Pool presents the first turnkey video transcoding tool. It allows you to share the computing power of your graphics card through the Livepeer network to assist with video decoding."
        imgSrc={Soft1}
      />
    </div>
  );
}
