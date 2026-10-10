import React, { useState } from 'react';
import '../styles/badge.css';

/**
 * Official FacebookVerifiedBadge Component
 * A premium React component with official Facebook styling, white border, and hover effects
 * 
 * @param {Object} props - Component props
 * @param {string} props.size - Badge size: 'small' | 'medium' | 'large' | 'extra-large' (default: 'medium')
 * @param {string} props.tooltip - Tooltip text displayed on hover
 * @param {boolean} props.withText - Display text next to badge (default: false)
 * @param {string} props.text - Text to display next to badge
 * @param {function} props.onClick - Click handler callback
 * @param {boolean} props.animated - Enable hover animation (default: true)
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.ariaLabel - Accessibility label
 */
const FacebookVerifiedBadge = ({
  size = 'medium',
  tooltip = 'Verified Account',
  withText = false,
  text = 'Verified',
  onClick = null,
  animated = true,
  className = '',
  ariaLabel = 'Verified badge'
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const badgeClasses = `
    fb-verified-badge-official 
    ${size} 
    ${animated ? 'animated' : ''} 
    ${isHovering ? 'hovering' : ''} 
    ${className}
  `.trim();

  const badge = (
    <span
      className={badgeClasses}
      data-tooltip={tooltip}
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      role="img"
      aria-label={ariaLabel}
      title={tooltip}
    >
      <svg
        className="fb-checkmark-official"
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
      <div className="fb-badge-with-text-official">
        {badge}
        <span className="text">{text}</span>
      </div>
    );
  }

  return badge;
};

export default FacebookVerifiedBadge;
