import { useEffect, useState } from "react"

const ImageComponent = ({ src, width, height, className }) => {
  const [currentSrc, setCurrentSrc] = useState(`https://placehold.co/${width}x${height}?text=Loading...`)

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src)
    }
    return () => {
      img.src = null;
    }
  }, [src])

  return (
    <img
      src={currentSrc}
      width={width}
      height={height}
      className={currentSrc === src ? className : `${className} blur-sm`}
    />
  )
}
export default ImageComponent