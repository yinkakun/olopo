import React from "react";
import createGlobe from "cobe";

export const Globe = () => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    let phi = 0;
    console.log("Globe effect");
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      width: 300 * 2,
      height: 300 * 2,
      phi: 0,
      dark: 0,
      theta: 0,
      opacity: 1,
      diffuse: 1.2,
      mapSamples: 20_000,
      mapBrightness: 4,
      devicePixelRatio: 2,
      baseColor: [1.0, 0.5, 0.0],
      markerColor: [1, 1, 1],
      glowColor: [1.0, 0.5, 0.0],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.001;
      },
      markers: [
        // longitude latitude
        { location: [6.5244, 3.3792], size: 0.1 },
      ],
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 300, height: 300, maxWidth: "100%", aspectRatio: 1 }}
    />
  );
};
