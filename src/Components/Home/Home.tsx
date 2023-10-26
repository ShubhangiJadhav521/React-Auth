import React, { useEffect } from 'react';
import './Home.css';
import Image from "./image.jpg";
import { useSpring, animated } from 'react-spring';



interface HomePageProps {
  setHideNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  hideNavbar: boolean;
}

function HomePage({ setHideNavbar, hideNavbar }: HomePageProps) {
  const textContentAnimation = useSpring({
    from: { transform: 'translateX(-20%)' },
    to: { transform: 'translateX(0%)' },
    config: { duration: 2000 }, // Adjust animation speed
  });

  const imageAnimation = useSpring({
    from: { transform: 'translateX(20%)' },
    to: { transform: 'translateX(0%)' },
    config: { duration: 2000 }, // Adjust animation speed
  });
  useEffect(() => {
    setHideNavbar(false);
  }, [hideNavbar]);

  return (
    <div className='home-page '>
      <div className='home-Content'>
      <animated.div style={textContentAnimation} className="text-content">
          <h1>We take your visionary ideas and make them a reality</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
            rerum provident aliquid delectus nemo quia earum, laboriosam
            necessitatibus accusamus est impedit nesciunt quo suscipit minima
            temporibus cupiditate molestias voluptatem? Accusamus?
          </p>
        </animated.div>
        <animated.img
          style={imageAnimation}
          src={Image}
          alt="Image"
          height={300}
          width={400}
        />
      </div>
    </div>
  );
}

export default HomePage;
