import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from './CarouselDotButtons';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './CarouselArrowButtons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const EmblaCarousel = ({ slides, options, identifier }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  return (
    <section className={identifier ? identifier + "_embla" : "embla"}>
      <div className={identifier ? identifier + "_embla__viewport" : "embla__viewport"} ref={emblaRef}>
        <div className={identifier ? identifier + "_embla__container" : "embla__container"}>
          {
            slides.map((slide, index) => (
              <div className={identifier ? identifier + "_embla__slide" : "embla__slide"} key={index}>
                <div className={identifier ? identifier + "_embla__slide__number" : "embla__slide__number"}>
                  <LazyLoadImage
                    className={identifier ? identifier + '_embla__slide__photo' : 'embla__slide__photo'}
                    src={slide.src}
                    alt={'slide-' + index}
                    effect='blur'
                    wrapperProps={{
                      style: { transitionDelay: "1s" },
                    }}
                  />
                  <div
                    className={identifier ? identifier + "_embla__slide__caption" : "embla__slide__caption"}
                  >
                    {slide.text}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className={identifier ? identifier + "_embla__controls" : "embla__controls"}>
        <div className={identifier ? identifier + "_embla__buttons" : "embla__buttons"}>
          <PrevButton identifier={identifier} onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton identifier={identifier} onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
