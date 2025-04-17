import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  card_main: {
    background: "#ffffff",
    display: "inline-block",
    padding: "24px 20px",
    margin: 30,
    borderRadius: 16,
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    minWidth: 280,
    maxWidth: 400,
    transition: "transform 0.2s ease-in-out",
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)'
    }
  },
  name: {
    marginBottom: 16,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 600,
    color: "#2c3e50"
  },
  d: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "darkblue",
    padding: "0 10px"
  },
  d1: {
    fontSize: 42,
    fontWeight: 700,
    color: "#2980b9"
  },
  d2: {
    fontSize: 22,
    fontWeight: 500,
    color: "#7f8c8d",
    marginLeft: 6
  },
  img: {
    width: 100,
    height: 100,
    objectFit: "contain",
    marginLeft: 20
  }
});

export const MainCard = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.card_main}>
      <div className={classes.name}>{props.title}</div>
      <div className={classes.d}>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <span className={classes.d1}>{props.value}</span>
          <span className={classes.d2}>/{props.total}</span>
        </div>
        <img src={props.image} className={classes.img} alt="" />
      </div>
    </div>
  );
};
