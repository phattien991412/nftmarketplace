import Image from "next/image";
import { useEffect, useRef } from "react";

const BlurredImage = ({src, alt, width, height, className}) => {
  const blurredImageDivRef = useRef(null);
  const imgRef = useRef(null);

  const loaded = () => {
    blurredImageDivRef.current.classList.add("loaded");
  };

  useEffect(() => {
    const img = imgRef.current;

    if (img.complete) {
      loaded();
    } else {
      img.addEventListener("load", loaded);
    }

    return () => {
      img.removeEventListener("load", loaded);
    };
  }, []);

  return (
    <div className="blur-img" ref={blurredImageDivRef}>
      <Image className={className} width={width} height={height} src={src} alt={alt} ref={imgRef} />
    </div>
  );
};

export default BlurredImage;
