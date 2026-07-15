/* Futurist design system — component bundle.
 * GENERATED from the .jsx sources in components/ (JSX compiled to React.createElement).
 * Load after React + ReactDOM UMD scripts. Exposes window.Futurist (alias window.DS).
 * Rebuild: strip 'import React'/'export' from each .jsx, compile JSX (classic runtime), wrap here.
 */
(function (global) {
  'use strict';
  var React = global.React;
  if (!React) { console.error('_ds_bundle.js: React must be loaded first'); return; }

  /* ── components/actions/Button.jsx ── */
  var Button = (function () {
const SIZES = {
  sm: {
    height: 'var(--control-h-sm)',
    padding: '0 10px',
    fontSize: 'var(--text-xs)',
    gap: '6px'
  },
  md: {
    height: 'var(--control-h)',
    padding: '0 14px',
    fontSize: 'var(--text-sm)',
    gap: '7px'
  },
  lg: {
    height: 'var(--control-h-lg)',
    padding: '0 18px',
    fontSize: 'var(--text-base)',
    gap: '8px'
  }
};
const VARIANTS = {
  primary: {
    rest: {
      background: 'var(--accent)',
      color: 'var(--accent-fg)',
      border: '1px solid transparent'
    },
    hover: {
      background: 'var(--accent-hover)'
    }
  },
  secondary: {
    rest: {
      background: 'var(--bg-1)',
      color: 'var(--fg-1)',
      border: '1px solid var(--border-3)'
    },
    hover: {
      background: 'var(--bg-2)',
      borderColor: 'var(--fg-4)'
    }
  },
  ghost: {
    rest: {
      background: 'transparent',
      color: 'var(--fg-2)',
      border: '1px solid transparent'
    },
    hover: {
      background: 'var(--bg-2)',
      color: 'var(--fg-1)'
    }
  },
  danger: {
    rest: {
      background: 'var(--danger)',
      color: 'var(--danger-fg)',
      border: '1px solid transparent'
    },
    hover: {
      filter: 'brightness(0.94)'
    }
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    fontSize: s.fontSize,
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-medium)',
    lineHeight: 1,
    letterSpacing: '0.005em',
    whiteSpace: 'nowrap',
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast), filter var(--dur-fast)',
    opacity: disabled ? 0.45 : 1,
    userSelect: 'none',
    ...v.rest,
    ...(hover && !disabled ? v.hover : null),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    style: base,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    ...rest
  }, iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexShrink: 0
    }
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexShrink: 0
    }
  }, iconRight) : null);
}
return Button;
})();

  /* ── components/actions/IconButton.jsx ── */
  var IconButton = (function () {
const SIZES = {
  sm: '26px',
  md: '32px',
  lg: '40px'
};
const VARIANTS = {
  secondary: {
    rest: {
      background: 'var(--bg-1)',
      color: 'var(--fg-2)',
      border: '1px solid var(--border-3)'
    },
    hover: {
      background: 'var(--bg-2)',
      color: 'var(--fg-1)'
    }
  },
  ghost: {
    rest: {
      background: 'transparent',
      color: 'var(--fg-3)',
      border: '1px solid transparent'
    },
    hover: {
      background: 'var(--bg-2)',
      color: 'var(--fg-1)'
    }
  },
  primary: {
    rest: {
      background: 'var(--accent)',
      color: 'var(--accent-fg)',
      border: '1px solid transparent'
    },
    hover: {
      background: 'var(--accent-hover)'
    }
  }
};
function IconButton({
  variant = 'ghost',
  size = 'md',
  disabled = false,
  'aria-label': ariaLabel,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dim = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.ghost;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: dim,
    height: dim,
    padding: 0,
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast)',
    ...v.rest,
    ...(hover && !disabled ? v.hover : null),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    style: base,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    ...rest
  }, children);
}
return IconButton;
})();

  /* ── components/forms/Checkbox.jsx ── */
  var Checkbox = (function () {
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled,
  onChange,
  id,
  style,
  ...rest
}) {
  const rid = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  const box = {
    width: '16px',
    height: '16px',
    flexShrink: 0,
    borderRadius: 'var(--radius-xs)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: on ? 'var(--accent)' : 'var(--bg-1)',
    border: '1px solid ' + (on ? 'var(--accent)' : 'var(--border-3)'),
    transition: 'background var(--dur-fast), border-color var(--dur-fast)'
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontSize: 'var(--text-sm)',
      color: 'var(--fg-1)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: rid,
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    },
    ...rest
  }), /*#__PURE__*/React.createElement("span", {
    style: box
  }, on ? /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 10 10"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 5L4.2 7L8 3",
    stroke: "var(--accent-fg)",
    strokeWidth: "1.6",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })) : null), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
return Checkbox;
})();

  /* ── components/forms/Input.jsx ── */
  var Input = (function () {
function Input({
  label,
  hint,
  error,
  size = 'md',
  prefix,
  suffix,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const rid = id || React.useId();
  const h = size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h)';
  const field = {
    display: 'flex',
    alignItems: 'center',
    gap: '7px',
    height: h,
    padding: '0 10px',
    background: 'var(--bg-1)',
    border: '1px solid ' + (error ? 'var(--danger)' : focus ? 'var(--accent)' : 'var(--border-3)'),
    borderRadius: 'var(--radius-md)',
    boxShadow: focus ? error ? '0 0 0 3px var(--danger-subtle)' : 'var(--focus-ring)' : 'none',
    transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
  };
  const input = {
    flex: 1,
    minWidth: 0,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    color: 'var(--fg-1)',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-sm)',
    padding: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--fg-2)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: field
  }, prefix ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-3)',
      display: 'inline-flex',
      fontSize: 'var(--text-sm)'
    }
  }, prefix) : null, /*#__PURE__*/React.createElement("input", {
    id: rid,
    style: input,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    ...rest
  }), suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-3)',
      display: 'inline-flex',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)'
    }
  }, suffix) : null), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--fg-3)'
    }
  }, hint) : null);
}
return Input;
})();

  /* ── components/forms/Select.jsx ── */
  var Select = (function () {
function Select({
  label,
  hint,
  error,
  size = 'md',
  options = [],
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const rid = id || React.useId();
  const h = size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h)';
  const wrap = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: h,
    background: 'var(--bg-1)',
    border: '1px solid ' + (error ? 'var(--danger)' : focus ? 'var(--accent)' : 'var(--border-3)'),
    borderRadius: 'var(--radius-md)',
    boxShadow: focus ? 'var(--focus-ring)' : 'none',
    transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
  };
  const sel = {
    appearance: 'none',
    WebkitAppearance: 'none',
    flex: 1,
    height: '100%',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    padding: '0 30px 0 10px',
    color: 'var(--fg-1)',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-sm)',
    cursor: 'pointer'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--fg-2)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("select", {
    id: rid,
    style: sel,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    ...rest
  }, options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 10 10",
    style: {
      position: 'absolute',
      right: '10px',
      pointerEvents: 'none',
      color: 'var(--fg-3)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 3.5L5 6.5L8 3.5",
    stroke: "currentColor",
    strokeWidth: "1.4",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--fg-3)'
    }
  }, hint) : null);
}
return Select;
})();

  /* ── components/forms/Switch.jsx ── */
  var Switch = (function () {
function Switch({
  label,
  checked,
  defaultChecked,
  disabled,
  onChange,
  id,
  style,
  ...rest
}) {
  const rid = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  const track = {
    width: '30px',
    height: '18px',
    borderRadius: 'var(--radius-full)',
    flexShrink: 0,
    position: 'relative',
    background: on ? 'var(--accent)' : 'var(--bg-3)',
    border: '1px solid ' + (on ? 'var(--accent)' : 'var(--border-3)'),
    transition: 'background var(--dur-base) var(--ease-standard)'
  };
  const knob = {
    position: 'absolute',
    top: '2px',
    left: on ? '13px' : '2px',
    width: '13px',
    height: '13px',
    borderRadius: 'var(--radius-full)',
    background: '#fff',
    boxShadow: '0 1px 2px rgba(0,0,0,0.25)',
    transition: 'left var(--dur-base) var(--ease-standard)'
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '9px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontSize: 'var(--text-sm)',
      color: 'var(--fg-1)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: rid,
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    },
    ...rest
  }), /*#__PURE__*/React.createElement("span", {
    style: track
  }, /*#__PURE__*/React.createElement("span", {
    style: knob
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
return Switch;
})();

  /* ── components/forms/Textarea.jsx ── */
  var Textarea = (function () {
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const rid = id || React.useId();
  const area = {
    width: '100%',
    resize: 'vertical',
    padding: '8px 10px',
    background: 'var(--bg-1)',
    border: '1px solid ' + (error ? 'var(--danger)' : focus ? 'var(--accent)' : 'var(--border-3)'),
    borderRadius: 'var(--radius-md)',
    outline: 'none',
    boxShadow: focus ? error ? '0 0 0 3px var(--danger-subtle)' : 'var(--focus-ring)' : 'none',
    color: 'var(--fg-1)',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-sm)',
    lineHeight: 1.5,
    transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--fg-2)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("textarea", {
    id: rid,
    rows: rows,
    style: area,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    ...rest
  }), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--fg-3)'
    }
  }, hint) : null);
}
return Textarea;
})();

  /* ── components/data/Badge.jsx ── */
  var Badge = (function () {
const TONES = {
  neutral: {
    background: 'var(--bg-3)',
    color: 'var(--fg-2)'
  },
  accent: {
    background: 'var(--accent-subtle)',
    color: 'var(--accent-subtle-fg)'
  },
  success: {
    background: 'var(--success-subtle)',
    color: 'var(--success-subtle-fg)'
  },
  warning: {
    background: 'var(--warning-subtle)',
    color: 'var(--warning-subtle-fg)'
  },
  danger: {
    background: 'var(--danger-subtle)',
    color: 'var(--danger-subtle-fg)'
  },
  info: {
    background: 'var(--info-subtle)',
    color: 'var(--info-subtle-fg)'
  }
};
function Badge({
  tone = 'neutral',
  dot = false,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      height: '18px',
      padding: '0 7px',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '0.03em',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...t,
      ...style
    },
    ...rest
  }, dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      background: 'currentColor'
    }
  }) : null, children);
}
return Badge;
})();

  /* ── components/data/Card.jsx ── */
  var Card = (function () {
function Card({
  title,
  eyebrow,
  action,
  padding = 'md',
  interactive = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pad = padding === 'none' ? '0' : padding === 'sm' ? 'var(--space-4)' : padding === 'lg' ? 'var(--space-6)' : 'var(--card-pad)';
  const base = {
    background: 'var(--bg-1)',
    border: '1px solid var(--border-1)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: interactive && hover ? 'var(--shadow-2)' : 'var(--shadow-1)',
    borderColor: interactive && hover ? 'var(--border-2)' : 'var(--border-1)',
    transition: 'box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base)',
    overflow: 'hidden',
    ...style
  };
  const hasHeader = title || eyebrow || action;
  return /*#__PURE__*/React.createElement("div", {
    style: base,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    ...rest
  }, hasHeader ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: '12px',
      padding: pad,
      paddingBottom: children ? 'var(--space-3)' : pad
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3px',
      minWidth: 0
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--fg-3)'
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--fg-1)'
    }
  }, title) : null), action ? /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, action) : null) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pad,
      paddingTop: hasHeader ? 0 : pad
    }
  }, children) : null);
}
return Card;
})();

  /* ── components/data/Stat.jsx ── */
  var Stat = (function () {
function Stat({
  label,
  value,
  unit,
  delta,
  trend,
  style,
  ...rest
}) {
  const color = trend === 'up' ? 'var(--success)' : trend === 'down' ? 'var(--danger)' : 'var(--fg-3)';
  const arrow = trend === 'up' ? '↑' : trend === 'down' ? '↓' : '';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    },
    ...rest
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      color: 'var(--fg-3)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '5px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '-0.02em',
      color: 'var(--fg-1)',
      lineHeight: 1
    }
  }, value), unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--fg-3)'
    }
  }, unit) : null), delta != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color,
      display: 'inline-flex',
      gap: '3px'
    }
  }, arrow, " ", delta) : null);
}
return Stat;
})();

  /* ── components/data/Table.jsx ── */
  var Table = (function () {
function Table({
  columns = [],
  rows = [],
  dense = false,
  style,
  ...rest
}) {
  const [hoverRow, setHoverRow] = React.useState(-1);
  const cellPad = dense ? '6px 12px' : '9px 14px';
  const align = c => c.align || (c.numeric ? 'right' : 'left');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-1)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--bg-1)',
      ...style
    },
    ...rest
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--bg-2)'
    }
  }, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      textAlign: align(c),
      padding: cellPad,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--fg-3)',
      borderBottom: '1px solid var(--border-1)',
      whiteSpace: 'nowrap'
    }
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri,
    onMouseEnter: () => setHoverRow(ri),
    onMouseLeave: () => setHoverRow(-1),
    style: {
      background: hoverRow === ri ? 'var(--bg-2)' : 'transparent',
      transition: 'background var(--dur-fast)'
    }
  }, columns.map((c, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    style: {
      textAlign: align(c),
      padding: cellPad,
      color: c.numeric ? 'var(--fg-1)' : 'var(--fg-2)',
      fontFamily: c.numeric ? 'var(--font-mono)' : 'var(--font-sans)',
      borderBottom: ri === rows.length - 1 ? 'none' : '1px solid var(--border-1)',
      whiteSpace: 'nowrap'
    }
  }, c.render ? c.render(r[c.key], r) : r[c.key])))))));
}
return Table;
})();

  /* ── components/data/Tag.jsx ── */
  var Tag = (function () {
function Tag({
  children,
  onRemove,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      height: '22px',
      padding: onRemove ? '0 5px 0 9px' : '0 9px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--bg-2)',
      border: '1px solid var(--border-2)',
      color: 'var(--fg-2)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      whiteSpace: 'nowrap',
      ...style
    },
    ...rest
  }, children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: onRemove,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '15px',
      height: '15px',
      padding: 0,
      border: 'none',
      borderRadius: 'var(--radius-full)',
      cursor: 'pointer',
      background: hover ? 'var(--bg-3)' : 'transparent',
      color: hover ? 'var(--fg-1)' : 'var(--fg-3)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "8",
    viewBox: "0 0 8 8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1L7 7M7 1L1 7",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round"
  }))) : null);
}
return Tag;
})();

  /* ── components/navigation/Tabs.jsx ── */
  var Tabs = (function () {
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue != null ? defaultValue : tabs[0] && tabs[0].value);
  const active = isControlled ? value : internal;
  const [hover, setHover] = React.useState(null);
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '2px',
      borderBottom: '1px solid var(--border-1)',
      ...style
    },
    ...rest
  }, tabs.map(t => {
    const on = t.value === active;
    const hot = hover === t.value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      type: "button",
      onClick: () => select(t.value),
      onMouseEnter: () => setHover(t.value),
      onMouseLeave: () => setHover(null),
      style: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        height: '34px',
        padding: '0 12px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        color: on ? 'var(--fg-1)' : hot ? 'var(--fg-2)' : 'var(--fg-3)',
        transition: 'color var(--dur-fast)'
      }
    }, t.label, t.count != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-2xs)',
        color: 'var(--fg-4)'
      }
    }, t.count) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: '-1px',
        height: '2px',
        background: on ? 'var(--accent)' : 'transparent',
        borderRadius: '2px 2px 0 0'
      }
    }));
  }));
}
return Tabs;
})();

  /* ── components/overlays/Drawer.jsx ── */
  var Drawer = (function () {
function Drawer({
  open,
  onClose,
  side = 'right',
  width = 400,
  title,
  children,
  footer
}) {
  React.useEffect(() => {
    if (!open) return;
    const k = e => {
      if (e.key === 'Escape') onClose && onClose();
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  const isRight = side === 'right';
  return /*#__PURE__*/React.createElement("div", {
    onMouseDown: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      display: 'flex',
      justifyContent: isRight ? 'flex-end' : 'flex-start',
      background: 'oklch(0.2 0.02 262 / 0.45)',
      backdropFilter: 'blur(2px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onMouseDown: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      width: width + 'px',
      maxWidth: '92vw',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg-1)',
      borderLeft: isRight ? '1px solid var(--border-1)' : 'none',
      borderRight: isRight ? 'none' : '1px solid var(--border-1)',
      boxShadow: 'var(--shadow-3)'
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-4) var(--space-5)',
      borderBottom: '1px solid var(--border-1)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, title)) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 'var(--space-5)'
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '8px',
      padding: 'var(--space-4) var(--space-5)',
      borderTop: '1px solid var(--border-1)',
      background: 'var(--bg-2)'
    }
  }, footer) : null));
}
return Drawer;
})();

  /* ── components/overlays/Menu.jsx ── */
  var Menu = (function () {
function Menu({
  trigger,
  items = [],
  align = 'start'
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(o => !o)
  }, trigger), open ? /*#__PURE__*/React.createElement("div", {
    role: "menu",
    style: {
      position: 'absolute',
      top: '100%',
      [align === 'end' ? 'right' : 'left']: 0,
      marginTop: '6px',
      zIndex: 60,
      minWidth: '180px',
      padding: '5px',
      background: 'var(--bg-1)',
      border: '1px solid var(--border-1)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-3)'
    }
  }, items.map((it, i) => it.divider ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: '1px',
      background: 'var(--border-1)',
      margin: '5px 0'
    }
  }) : /*#__PURE__*/React.createElement("button", {
    key: i,
    role: "menuitem",
    disabled: it.disabled,
    onClick: () => {
      it.onClick && it.onClick();
      setOpen(false);
    },
    onMouseEnter: e => e.currentTarget.style.background = it.danger ? 'var(--danger-subtle)' : 'var(--bg-2)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '9px',
      width: '100%',
      padding: '7px 9px',
      border: 'none',
      background: 'transparent',
      borderRadius: 'var(--radius-sm)',
      cursor: it.disabled ? 'not-allowed' : 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: it.danger ? 'var(--danger)' : it.disabled ? 'var(--fg-4)' : 'var(--fg-1)'
    }
  }, it.icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: it.danger ? 'var(--danger)' : 'var(--fg-3)'
    }
  }, it.icon) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, it.label), it.shortcut ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--fg-4)'
    }
  }, it.shortcut) : null))) : null);
}
return Menu;
})();

  /* ── components/overlays/Popover.jsx ── */
  var Popover = (function () {
function Popover({
  trigger,
  children,
  width = 260,
  align = 'start'
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(o => !o)
  }, trigger), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      [align === 'end' ? 'right' : 'left']: 0,
      marginTop: '8px',
      zIndex: 60,
      width: width + 'px',
      padding: '14px',
      background: 'var(--bg-1)',
      border: '1px solid var(--border-1)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-3)'
    }
  }, children) : null);
}
return Popover;
})();

  /* ── components/overlays/Tooltip.jsx ── */
  var Tooltip = (function () {
function Tooltip({
  label,
  side = 'top',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: '7px'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: '7px'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: '7px'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: '7px'
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, children, open ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 50,
      ...pos,
      whiteSpace: 'nowrap',
      padding: '5px 9px',
      background: 'var(--bg-inverse)',
      color: 'var(--fg-inverse)',
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-sans)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-2)',
      pointerEvents: 'none'
    }
  }, label) : null);
}
return Tooltip;
})();

  /* ── components/feedback/Dialog.jsx ── */
  var Dialog = (function () {
function Dialog({
  open,
  onClose,
  title,
  description,
  footer,
  width = 460,
  children
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose && onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onMouseDown: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '10vh 16px',
      background: 'oklch(0.2 0.02 262 / 0.45)',
      backdropFilter: 'blur(2px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onMouseDown: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      width: '100%',
      maxWidth: width + 'px',
      background: 'var(--bg-1)',
      border: '1px solid var(--border-1)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-3)',
      overflow: 'hidden'
    }
  }, title || description ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) var(--space-5) var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: '5px'
    }
  }, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--fg-3)',
      lineHeight: 1.5
    }
  }, description) : null) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-5) var(--space-5)'
    }
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '8px',
      padding: 'var(--space-4) var(--space-5)',
      borderTop: '1px solid var(--border-1)',
      background: 'var(--bg-2)'
    }
  }, footer) : null));
}
return Dialog;
})();

  /* ── components/feedback/Toast.jsx ── */
  var Toast = (function () {
const TONES = {
  neutral: 'var(--fg-2)',
  success: 'var(--success)',
  warning: 'var(--warning)',
  danger: 'var(--danger)',
  info: 'var(--info)'
};
function Toast({
  tone = 'neutral',
  title,
  description,
  onClose,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
      width: '320px',
      padding: '11px 12px',
      background: 'var(--bg-1)',
      border: '1px solid var(--border-2)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-3)',
      ...style
    },
    ...rest
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '7px',
      height: '7px',
      marginTop: '5px',
      borderRadius: '50%',
      flexShrink: 0,
      background: TONES[tone] || TONES.neutral
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, title ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--fg-1)'
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--fg-3)',
      lineHeight: 1.45
    }
  }, description) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      flexShrink: 0,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--fg-4)',
      padding: '2px',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 10 10"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1L9 9M9 1L1 9",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round"
  }))) : null);
}
return Toast;
})();

  var Futurist = { Button, IconButton, Checkbox, Input, Select, Switch, Textarea, Badge, Card, Stat, Table, Tag, Tabs, Drawer, Menu, Popover, Tooltip, Dialog, Toast };
  global.Futurist = Futurist;
  global.DS = global.DS || Futurist;
})(typeof window !== 'undefined' ? window : this);
