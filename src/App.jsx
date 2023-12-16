import "./App.css";
import FirstSection from "./components/FirstSection";
import FourthSection from "./components/FourthSection";
import LeftCardContent from "./components/LeftCardContent";
import SecondContainer from "./components/SecondContainer";
import SecondLeftCardContent from "./components/SecondLeftCardContent";

function App() {
  const src1 =
    "https://download-video.akamaized.net/v3-1/playback/69b36171-fc63-4703-bcc3-c35e3d56367c/2036718b-c3712cbb?__token__=st=1702746559~exp=1702760959~acl=%2Fv3-1%2Fplayback%2F69b36171-fc63-4703-bcc3-c35e3d56367c%2F2036718b-c3712cbb%2A~hmac=0450021c0a8bbfcad41becd2d31f282c2441275f03e38574c2530d9d2856ccd4&r=dXMtd2VzdDE%3D";
  const src2 =
    "https://download-video.akamaized.net/v3-1/playback/51f3c3f0-04b3-4c16-94ce-f7b6b09ba1f1/035411af?__token__=st=1702746701~exp=1702761101~acl=%2Fv3-1%2Fplayback%2F51f3c3f0-04b3-4c16-94ce-f7b6b09ba1f1%2F035411af%2A~hmac=3d878b1c47160c49d158b198feabc673dd99c611025ec06823a9752108c2e959&r=dXMtd2VzdDE%3D";
  return (
    <>
      <main className="main">
        <div id="custom-cursor"></div>
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
