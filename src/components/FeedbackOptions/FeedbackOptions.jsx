import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(({ id, title, type, name }) => (
    <button
      key={id}
      id={id}
      onClick={onLeaveFeedback}
      className={s.button}
      type={type}
      name={name}
    >
      {title}
    </button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};
