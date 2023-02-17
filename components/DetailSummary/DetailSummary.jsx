
import style from "./DetailSummary.module.css";
import Grid from "@mui/material/Grid";

import Image from "next/image";
function DetailSummary(props) {
  return (
    <Grid
      container
      className={style.structure}
      justifyContent="space-between"
      alignItems="center"
      columnSpacing={{ xs: 0, sm: 8 }}
      direction={props.id % 2 == 0 ? "row" : "row-reverse"}>
      <Grid item xs={12} sm={6} className={props.id % 2 != 0 ? style.right_image : ""}>
        <div className={style.imgSize} >
        <Image
          src={props.images}
          alt={props.heading}
          width={300}
          height={300}
          layout="intrinsic"
        />
        </div>
      </Grid>
      <Grid item xs={12} sm={6} className={style.details}>
        <h2>{props.heading}</h2>
        <p className={style.dash} />
        <p>{props.description}</p>
      </Grid>
    </Grid>
  );
}

export default DetailSummary;
