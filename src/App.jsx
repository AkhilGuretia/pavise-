import "./App.css";
import FirstSection from "./components/FirstSection";
import FourthSection from "./components/FourthSection";
import LeftCardContent from "./components/LeftCardContent";
import SecondContainer from "./components/SecondContainer";
import SecondLeftCardContent from "./components/SecondLeftCardContent";

function App() {
  const src1 =
    "https://download-video.akamaized.net/v3-1/playback/69b36171-fc63-4703-bcc3-c35e3d56367c/2036718b-c3712cbb?__token__=st=1702587506~exp=1702601906~acl=%2Fv3-1%2Fplayback%2F69b36171-fc63-4703-bcc3-c35e3d56367c%2F2036718b-c3712cbb%2A~hmac=a68888c76e2bedf94f204e3e0f18334994a329c3060432ab0338feffde96d015&r=dXMtd2VzdDE%3D";
  const src2 =
    "https://download-video.akamaized.net/v3-1/playback/51f3c3f0-04b3-4c16-94ce-f7b6b09ba1f1/035411af?__token__=st=1702588910~exp=1702603310~acl=%2Fv3-1%2Fplayback%2F51f3c3f0-04b3-4c16-94ce-f7b6b09ba1f1%2F035411af%2A~hmac=cf6eac2685099f297e3993b7961856dfbc8b3836ed61fdee8a19d97eac3cc16e&r=dXMtd2VzdDE%3D";
  return (
    <>
      <main className="main">
        <div className="main_second">
          <FirstSection />
        </div>
        <SecondContainer src={src1}>
          <LeftCardContent />
        </SecondContainer>

        <FourthSection />

        <SecondContainer src={src2}>
          <SecondLeftCardContent />
        </SecondContainer>
      </main>
    </>
  );
}

export default App;
