import React from 'react';
import '../styles/badge.css';

/**
 * FacebookVerifiedBadge Component
 * A reusable React component that displays an official-looking Facebook verified badge
 * 
 * @param {Object} props - Component props
 * @param {string} props.size - Badge size: 'small' | 'medium' | 'large' | 'extra-large' (default: 'medium')
 * @param {string} props.tooltip - Tooltip text displayed on hover (default: 'Verified Account')
 * @param {boolean} props.withText - Display text next to badge (default: false)
 * @param {string} props.text - Text to display next to badge (default: 'Verified')
 * @param {function} props.onClick - Click handler callback
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.ariaLabel - Accessibility label
 * 
 * @example
 * // Basic usage
 * <FacebookVerifiedBadge />
 * 
 * @example
 * // With custom size and tooltip
 * <FacebookVerifiedBadge size="large" tooltip="Meta Verified" />
 * 
 * @example
 * // With text
 * <FacebookVerifiedBadge withText text="Verified Account" />
 */
const FacebookVerifiedBadge = ({
  size = 'medium',
  tooltip = 'Verified Account',
  withText = false,
  text = 'Verified',
  onClick = null,
  className = '',
  ariaLabel = 'Verified badge'
}) => {
  const badgeClasses = `fb-verified-badge ${size} ${className}`.trim();

  const badge = (
    <span
      className={badgeClasses}
      data-tooltip={tooltip}
      onClick={onClick}
      role="img"
      aria-label={ariaLabel}
      title={tooltip}
    >
      <svg
        className="fb-checkmark"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
      </svg>
    </span>
  );

  if (withText) {
    return (
      <div className="fb-badge-with-text">
        {badge}
        <span className="text">{text}</span>
      </div>
    );
  }

  return badge;
};

export default FacebookVerifiedBadge;
