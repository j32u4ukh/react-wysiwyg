import Counter from "./Counter";
import Styles from './List.module.css';
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function List(props) {
  const { name, price, isLimited, image, desrc } = props.item;
  return (
    <li className={Styles.item}>
      <LazyLoadImage
        src={image}
        alt=""
        style={{
          width: "80px",
          height: "80px",
          backgroundColor: "#ffe691"
        }}
      />
      <div className={Styles.name}>
        <span>{name}</span>
        {isLimited && <span className={Styles.limited}>(限量供應)</span>}
      </div>
      <div className={Styles.desrc}>
        <div dangerouslySetInnerHTML={{ __html: desrc }}></div>
      </div>
      <span>${price}</span>
      <Counter />
    </li>
  );
}