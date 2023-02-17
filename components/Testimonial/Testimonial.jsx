import Image from "next/image";
import { useState } from "react";
import styles from "./Testimonial.module.css";
import { Box } from "@mui/material";

function Testimonial(props) {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Box className={styles.box} overflow="auto" scrollBehaviour="smooth">
      <Box>
        <Box
          sx={{
            borderRadius: "50%",
            width: "10px",
            height: "10vw",
            overflow: "hidden",
          }}
          className={styles.img}>
          <Image src={props.avtar} alt="Pic" layout="fill" objectFit="cover" />
        </Box>
      </Box>
      <Box className={styles.content}>
        <Box>
          <h5>{props.name}</h5>
          <h4>{props.designation}</h4>
        </Box>
        <Box>
          {props.description.length > 175 ? (
            <p>
              {isReadMore ? props.description.slice(0, 175) : props.description}
              <span onClick={toggleReadMore} className={styles.readhide}>
                {isReadMore ? "...read more" : " show less"}
              </span>
            </p>
          ) : (
            <p> {props.description} </p>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Testimonial;
