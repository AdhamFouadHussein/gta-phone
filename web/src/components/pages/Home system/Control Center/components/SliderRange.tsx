import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

const handleBtnVolum = (event: { key: string; preventDefault: () => void; }) => {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
  }
};

type Props = {

  image: string;
  valueNum: number;
  padd?: string;
}
const SliderRange = ({ image, valueNum, padd }: Props) => {
  return (
    <Box sx={{ height: "90%", width: 70, position: "relative" }}>
      <Slider
        sx={{
          '& input[type="range"]': {
            WebkitAppearance: "slider-vertical",
          },
          width: 60,
          color: "#FFFFFF",
          borderRadius: "20px 20px 20px 20px",
        }}
        orientation="vertical"
        defaultValue={valueNum}
        aria-label="Temperature"
        valueLabelDisplay="auto"
        onKeyDown={handleBtnVolum}
      />
      <img
        src={image}
        alt=""
        className={`absolute left-8 bottom-4 w-5 `}
        style={{ paddingBottom: padd }}
      />
    </Box>
  );
};

export default SliderRange;
