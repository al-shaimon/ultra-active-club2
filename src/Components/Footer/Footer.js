import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="accordin-container my-5">
      <h2 className="container text-center mt-5 mb-3 accordin-title">
        React QNA
      </h2>
      <div
        className="accordion accordion-flush container"
        id="accordionFlushExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              How React Works ?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              ReactJS is one of the most popular JavaScript libraries for mobile
              and web application development. Created by Facebook, React
              contains a collection of reusable JavaScript code snippets used
              for user interface (UI) building called components. It’s important
              to note that ReactJS is not a JavaScript framework. That’s because
              it’s only responsible for rendering the components of an
              application’s view layer. React is an alternative to frameworks
              like Angular and Vue, which all allow to create complex functions.
              This article will explore React’s features, explain how it works,
              and go over its benefits for front-end developers. We’ll also
              cover the differences between ReactJS and React Native regarding
              their roles in the web and mobile app development industry.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Difference between props and state
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              tl;dr: If a Component needs to alter one of its attributes at some
              point in time, that attribute should be part of its state,
              otherwise it should just be a prop for that Component., props
              props (short for properties) are a Component's configuration, its
              options if you may. They are received from above and immutable as
              far as the Component receiving them is concerned. A Component
              cannot change its props, but it is responsible for putting
              together the props of its child Components. state The state starts
              with a default value when a Component mounts and then suffers from
              mutations in time (mostly generated from user events). It's a
              serializable* representation of one point in time—a snapshot. A
              Component manages its own state internally, but—besides setting an
              initial state—has no business fiddling with the state of its
              children. You could say the state is private. * We didn't say
              props are also serializable because it's pretty common to pass
              down callback functions through props.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              What is the purpose of useeffect hook
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              The useEffect Hook allows you to perform side effects in your
              components. Some examples of side effects are: fetching data,
              directly updating the DOM, and timers. useEffect accepts two
              arguments. The second argument is optional.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
