import PropTypes from 'prop-types';

function SvgIcon1({ className }) {
  return (
    <div
      className={`grow-0 shrink-0 basis-auto box-border w-5 h-5 text-[#c5c7ca] flex ${className}`}
    >
      <svg
        fill="none"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
      >
        <g id="Dots Horizontal" xmlns="http://www.w3.org/2000/svg">
          <path
            id="Shape"
            d="M4.83,10c0,0.828 -0.67,1.5 -1.5,1.5c-0.83,0 -1.5,-0.672 -1.5,-1.5c0,-0.828 0.67,-1.5 1.5,-1.5c0.83,0 1.5,0.672 1.5,1.5zM11.5,10c0,0.828 -0.67,1.5 -1.5,1.5c-0.83,0 -1.5,-0.672 -1.5,-1.5c0,-0.828 0.67,-1.5 1.5,-1.5c0.83,0 1.5,0.672 1.5,1.5zM16.67,11.5c0.83,0 1.5,-0.672 1.5,-1.5c0,-0.828 -0.67,-1.5 -1.5,-1.5c-0.83,0 -1.5,0.672 -1.5,1.5c0,0.828 0.67,1.5 1.5,1.5z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </g>
      </svg>
    </div>
  );
}

SvgIcon1.propTypes = {
  className: PropTypes.string.isRequired,
};


export default SvgIcon1;
