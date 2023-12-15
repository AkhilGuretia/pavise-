/* eslint-disable react/prop-types */

const SecondContainer = ({ children, src }) => {
  return (
    <div className="second_cont">
      <div className="left_card">
        <div className="upper_left_card">
          <div className="p2">{children}</div>

          <div className="lower_left_card">
            <a href="#" className="btn-sub-nav">
              <span className="pointer-events-none ">See Results Yourself</span>
            </a>
          </div>
        </div>
      </div>

      <div className="Right_card">
        <div className="mt-5 md:mt-0 relative w-full aspect-1 rounded-[8px] 2xl:max-w-[679px] 2xl:aspect-[679/667] overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover z-10 rounded-[8px]"
            loop
            muted
            playsInline
            autoPlay
          >
            <source src={src} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default SecondContainer;
