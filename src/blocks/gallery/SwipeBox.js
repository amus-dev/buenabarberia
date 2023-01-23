import React, { Component, Fragment } from "react";
import SwipeBox from "fslightbox-react";

// Images
import Image1 from "../../assets/img/sliders/img-1.JPG";
import Image2 from "../../assets/img/sliders/img-2.JPG";
import Image3 from "../../assets/img/sliders/img-3.JPG";
import Image4 from "../../assets/img/sliders/img-4.JPG";
import Image5 from "../../assets/img/sliders/img-5.JPG";
import Image6 from "../../assets/img/sliders/img-6.JPG";
import Image7 from "../../assets/img/sliders/img-7.JPG";
import Image8 from "../../assets/img/sliders/img-8.JPG";
import Image9 from "../../assets/img/sliders/img-9.JPG";
import Image10 from "../../assets/img/sliders/barba-vip.jpeg";

class SwipeBoxComponent extends Component {
  state = {
    isVisible: false,
    slide: 0,
  };
  showSlide = (slide, event) => {
    event.preventDefault();
    this.setState({
      isVisible: !this.state.isVisible,
      slide: slide,
    });
  };

  render() {
    return (
      <Fragment>
        <SwipeBox
          toggler={this.state.isVisible}
          slide={this.state.slide}
          urls={[
            Image1,
            Image2,
            Image3,
            Image4,
            Image5,
            Image6,
            Image7,
            Image8,
            Image9,
            Image10,
          ]}
        />

        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <a
            onClick={(event) => this.showSlide(1, event)}
            title="Face & Body | Image 1"
            ref={this.swipeImg}
            className="gallery-item swipebox"
            href={Image1}
            rel="gallery"
          >
            <div className="img object-fit">
              <div className="object-fit-cover">
                <img src={Image1} alt="Face & Body" />
              </div>
            </div>

            <div className="img-bg-color"></div>
          </a>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <a
            onClick={(event) => this.showSlide(2, event)}
            title="Face & Body | Image 2"
            ref={this.swipeImg}
            className="gallery-item swipebox"
            href={Image2}
            rel="gallery"
          >
            <div className="img object-fit">
              <div className="object-fit-cover">
                <img src={Image2} alt="Face & Body" />
              </div>
            </div>

            <div className="img-bg-color"></div>
          </a>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <a
            onClick={(event) => this.showSlide(3, event)}
            title="Face & Body | Image 3"
            ref={this.swipeImg}
            className="gallery-item swipebox"
            href={Image3}
            rel="gallery"
          >
            <div className="img object-fit">
              <div className="object-fit-cover">
                <img src={Image3} alt="Face & Body" />
              </div>
            </div>

            <div className="img-bg-color"></div>
          </a>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <a
            onClick={(event) => this.showSlide(4, event)}
            title="Face & Body | Image 4"
            ref={this.swipeImg}
            className="gallery-item swipebox"
            href={Image4}
            rel="gallery"
          >
            <div className="img object-fit">
              <div className="object-fit-cover">
                <img src={Image4} alt="Face & Body" />
              </div>
            </div>

            <div className="img-bg-color"></div>
          </a>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <a
            onClick={(event) => this.showSlide(5, event)}
            title="Face & Body | Image 5"
            ref={this.swipeImg}
            className="gallery-item swipebox"
            href={Image5}
            rel="gallery"
          >
            <div className="img object-fit">
              <div className="object-fit-cover">
                <img src={Image5} alt="Face & Body" />
              </div>
            </div>

            <div className="img-bg-color"></div>
          </a>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <a
            onClick={(event) => this.showSlide(6, event)}
            title="Face & Body | Image 6"
            ref={this.swipeImg}
            className="gallery-item swipebox"
            href={Image6}
            rel="gallery"
          >
            <div className="img object-fit">
              <div className="object-fit-cover">
                <img src={Image6} alt="Face & Body" />
              </div>
            </div>

            <div className="img-bg-color"></div>
          </a>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <a
            onClick={(event) => this.showSlide(7, event)}
            title="Face & Body | Image 7"
            ref={this.swipeImg}
            className="gallery-item swipebox"
            href={Image7}
            rel="gallery"
          >
            <div className="img object-fit">
              <div className="object-fit-cover">
                <img src={Image7} alt="Face & Body" />
              </div>
            </div>

            <div className="img-bg-color"></div>
          </a>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <a
            onClick={(event) => this.showSlide(8, event)}
            title="Face & Body | Image 8"
            ref={this.swipeImg}
            className="gallery-item swipebox"
            href={Image8}
            rel="gallery"
          >
            <div className="img object-fit">
              <div className="object-fit-cover">
                <img src={Image8} alt="Face & Body" />
              </div>
            </div>

            <div className="img-bg-color"></div>
          </a>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <a
            onClick={(event) => this.showSlide(9, event)}
            title="Face & Body | Image 9"
            ref={this.swipeImg}
            className="gallery-item swipebox"
            href={Image9}
            rel="gallery"
          >
            <div className="img object-fit">
              <div className="object-fit-cover">
                <img src={Image9} alt="Face & Body" />
              </div>
            </div>

            <div className="img-bg-color"></div>
          </a>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <a
            onClick={(event) => this.showSlide(10, event)}
            title="Face & Body | Image 10"
            ref={this.swipeImg}
            className="gallery-item swipebox"
            href={Image10}
            rel="gallery"
          >
            <div className="img object-fit">
              <div className="object-fit-cover">
                <img src={Image10} alt="Face & Body" />
              </div>
            </div>

            <div className="img-bg-color"></div>
          </a>
        </div>
      </Fragment>
    );
  }
}

export default SwipeBoxComponent;
