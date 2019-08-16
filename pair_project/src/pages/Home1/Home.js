import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Typography from "../../component/typo";
import "./home1.css";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { Redirect } from "react-router-dom";

const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4)
  },
  images: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexWrap: "wrap"
  },
  imageWrapper: {
    position: "relative",
    display: "block",
    padding: 0,
    borderRadius: 0,
    height: "40vh",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      height: 100
    },
    "&:hover": {
      zIndex: 1
    },
    "&:hover $imageBackdrop": {
      opacity: 0.15
    },
    "&:hover $imageMarked": {
      opacity: 0
    },
    "&:hover $imageTitle": {
      border: "4px solid currentColor"
    }
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
});

function Home1(props) {
  const { classes } = props;

  const images = [
    {
      url:
        "https://i.pinimg.com/originals/c7/46/4e/c7464e53633d5e07f1c50b5670e189e1.jpg",
      title: "Cari Jodoh",
      width: "33%",
      link: "/carijodoh"
    },
    {
      url:
        "data:image/jpeg;base64,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",
      title: "CatFact",
      width: "34%",
      link: "/awalcats"
    },
    {
      url: "https://ak0.picdn.net/shutterstock/videos/20870680/thumb/9.jpg",
      title: "Ask Me Everything",
      width: "33%",
      link: "/yesno"
    }
  ];

  if (props.is_login === false) {
    return <Redirect to={{ pathname: "/" }} />;
  } else {
    return (
      <div className="animated bounce">
        <Container className={classes.root} component="section">
          <Typography
            variant="h4"
            marked="center"
            align="center"
            component="h2"
          >
            <div className="animated jackInTheBox">Pilih Fiturmu</div>
          </Typography>
          <div className={classes.images}>
            {images.map(image => (
              <ButtonBase
                key={image.title}
                className={classes.imageWrapper}
                style={{
                  width: image.width
                }}
                onClick={() => props.history.push(image.link)}
              >
                <div
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${image.url})`
                  }}
                />
                <div className={classes.imageBackdrop} />
                <div className={classes.imageButton}>
                  {/* <Link
                    to={image.link}
                    className="link"
                    style={{ textDecoration: "none" }}
                  > */}
                  <Typography
                    component="h3"
                    variant="h6"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    {/* <Link
                      to={image.link}
                      className="link"
                      style={{ textDecoration: "none" }}
                    > */}
                    {image.title}
                    {/* </Link> */}

                    <div className={classes.imageMarked} />
                  </Typography>
                  {/* </Link> */}
                </div>
              </ButtonBase>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

Home1.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  "is_login",
  actions
)(withStyles(styles)(Home1));
