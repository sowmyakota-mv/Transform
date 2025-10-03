import React, { useEffect, useRef } from "react";
import ScrollAnimation from "../animation/ScrollAnimation";

const awards = [
  { name: "Industry Leader 2023", logo: "/award-1.PNG" },
  { name: "Best Innovation 2022", logo: "/award-2.PNG" },
  { name: "Top Employer 2021", logo: "/award-3.PNG" },
  { name: "Excellence in Tech 2020", logo: "/award-4.PNG" },
  { name: "Outstanding Service 2019", logo: "/award-5.PNG" },
  { name: "Global Recognition 2018", logo: "/award-6.PNG" },
  { name: "Transformative Impact 2017", logo: "/award-7.PNG" },
];

const awardsLoop = [...awards, ...awards];

const RecognisedAwards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<number>(0);

  useEffect(() => {
    const speed = 0.5;
    let animationFrameId: number;

    const step = () => {
      if (containerRef.current) {
        scrollRef.current += speed;
        const maxScroll = containerRef.current.scrollWidth / 2;
        if (scrollRef.current >= maxScroll) scrollRef.current = 0;
        containerRef.current.style.transform = `translateX(-${scrollRef.current}px)`;
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <ScrollAnimation delay={100}>
          <h2 className="text-4xl font-bold mb-4">Recognised for Excellence</h2>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            Over the years, Transform UK has consistently been acknowledged for
            driving impactful transformation, innovation, and leadership. Our
            commitment to excellence has earned us recognition across multiple
            industries worldwide.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={300}>
          <div className="overflow-hidden h-32">
            <div
              ref={containerRef}
              className="flex whitespace-nowrap items-center"
              style={{ gap: "1rem" }}
            >
              {awardsLoop.map((award, index) => (
                <div
                  key={index}
                  className="w-1/2 sm:w-1/3 md:w-1/6 flex-shrink-0 flex items-center justify-center"
                >
                  <img
                    src={award.logo}
                    alt={award.name}
                    className="h-24 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default RecognisedAwards;
