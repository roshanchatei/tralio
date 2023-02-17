import styles from "./DetailFeatures.module.css";
import Image from "next/image";

function DetailFeatures(props) {
  return (
    <>
      <div className={styles.Feature}>
        <div className={styles.left_feature}>
          <div className={styles.ImgFeature}>
          <Image
            src={props.leftImages}
            alt={props.leftHeading}
            width={45}
            height={45}
          />
          </div>
          <h2>{props.leftHeading}</h2>
          <p>{props.leftDescription}</p>
        </div>
        <div className={styles.right_feature}>
          <div className={styles.ImgFeature}>
          <Image
            src={props.rightImages}
            alt={props.rightHeading}
            width={45}
            height={45}
          />
          </div>
          <h2>{props.rightHeading}</h2>
          <p>{props.rightDescription}</p>
        </div>
      </div>
    </>
  );
}

export default DetailFeatures;
