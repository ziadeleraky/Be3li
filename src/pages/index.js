import classes from "./Home.module.css";

export default function Home() {
  return (
    <div className={`${classes.home}`}>
      <div className={classes.style1}></div>
      <div className={classes.style2}></div>
      <div className={classes.style3}></div>
      <div className={`container ${classes.home_paragraph}`}>All Your Needs Are HERE</div>
    </div>
  );
}
