import PropTypes from "prop-types";

const Character = ({ family, fullName, imageUrl, title }) => {
  return (
    <div className="card-container">
      <img
        role="presentation"
        src={imageUrl}
        alt={fullName}
        aria-label={fullName}
      />
      <div className="card-body">
        <h2>
          {title} {fullName} of {family}
        </h2>
      </div>
    </div>
  );
};

Character.propTypes = {
  family: PropTypes.string,
  fullName: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
};

export default Character;
