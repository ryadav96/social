import PropTypes from "prop-types";

function SvgIcon2({ className }) {
  return (
    <div
      className={`grow-0 shrink-0 basis-auto box-border w-5 h-5 text-[#c5c7ca] flex ${className}`}
    >
      <svg
        fill="none"
        viewBox="0 0 20.666 18.0004"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
      >
        <g id="Chat Bubble" xmlns="http://www.w3.org/2000/svg">
          <path
            id="Shape_2"
            d="M17.666,1.5h-14.666c-0.829,0 -1.5,0.672 -1.5,1.5v8c0,0.829 0.671,1.5 1.5,1.5h7.333c0.133,0 0.26,0.053 0.354,0.147l3.146,3.146v-2.793c0,-0.276 0.224,-0.5 0.5,-0.5h3.333c0.829,0 1.5,-0.671 1.5,-1.5v-8c0,-0.828 -0.671,-1.5 -1.5,-1.5zM3,0.5h14.666c1.381,0 2.5,1.12 2.5,2.5v8c0,1.381 -1.119,2.5 -2.5,2.5h-2.833v3.5c0,0.203 -0.122,0.385 -0.309,0.462c-0.187,0.078 -0.402,0.035 -0.545,-0.108l-3.853,-3.854h-7.126c-1.381,0 -2.5,-1.119 -2.5,-2.5v-8c0,-1.38 1.119,-2.5 2.5,-2.5z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </g>
      </svg>
    </div>
  );
}

export default SvgIcon2;

SvgIcon2.propTypes = {
  className: PropTypes.string,
};
