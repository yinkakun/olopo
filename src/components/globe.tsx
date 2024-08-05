import React from "react";
import createGlobe from "cobe";

export const Globe = () => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    let phi = 0;
    console.log("Globe effect");
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      dark: 0,
      theta: 0.1,
      scale: 1,
      offset: [0, 0],
      opacity: 0.9,
      diffuse: 0,
      mapSamples: 30_000,
      mapBrightness: 5,
      devicePixelRatio: 2,
      markerColor: [0, 0, 0],
      baseColor: [1, 0.3, 0,],
      glowColor: [1, 0.2, 0,],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
      markers: [
        // longitude latitude
        { location: [6.5244, 3.3792], size: 0.1,  },
      ],
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
    />
  );
};
