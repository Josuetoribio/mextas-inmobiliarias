/* @ds-bundle: {"format":4,"namespace":"MextasDesignSystem_8aabb9","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastStack","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"AmenityItem","sourcePath":"components/realestate/AmenityItem.jsx"},{"name":"CategoryTile","sourcePath":"components/realestate/CategoryTile.jsx"},{"name":"CompareTray","sourcePath":"components/realestate/CompareTray.jsx"},{"name":"LocationCard","sourcePath":"components/realestate/LocationCard.jsx"},{"name":"PropertyCard","sourcePath":"components/realestate/PropertyCard.jsx"},{"name":"PropertySpecs","sourcePath":"components/realestate/PropertySpecs.jsx"},{"name":"SectionHeader","sourcePath":"components/realestate/SectionHeader.jsx"},{"name":"StatBlock","sourcePath":"components/realestate/StatBlock.jsx"},{"name":"TrustItem","sourcePath":"components/realestate/TrustItem.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"5ddda6956b22","components/core/Button.jsx":"248fa1f4c9c3","components/core/Chip.jsx":"067dc246fe45","components/core/Icon.jsx":"6b71b19a08fd","components/core/IconButton.jsx":"ca6165bc8bde","components/core/Logo.jsx":"c86c34cc116b","components/feedback/Dialog.jsx":"bc67afd40126","components/feedback/EmptyState.jsx":"0bc3190d0d85","components/feedback/Skeleton.jsx":"6f39427e3d29","components/feedback/Toast.jsx":"b8a27301b7fa","components/feedback/Tooltip.jsx":"09ef658dad4b","components/forms/Checkbox.jsx":"9f1a27c31940","components/forms/Field.jsx":"f33e406cf0fe","components/forms/Input.jsx":"d2113ecf531e","components/forms/Radio.jsx":"0d6688fc7bbd","components/forms/Select.jsx":"df39f5800721","components/forms/Slider.jsx":"d0cc3db982a4","components/forms/Switch.jsx":"c2ba67d4e783","components/navigation/Breadcrumbs.jsx":"6d39d7ce814b","components/navigation/Tabs.jsx":"e1adee0cfbdd","components/realestate/AmenityItem.jsx":"e43a438a34d3","components/realestate/CategoryTile.jsx":"ac7976aef4d5","components/realestate/CompareTray.jsx":"7ae714847602","components/realestate/LocationCard.jsx":"97c1bbc1ee13","components/realestate/PropertyCard.jsx":"23dc0c577232","components/realestate/PropertySpecs.jsx":"a0728b4d21a9","components/realestate/SectionHeader.jsx":"fbb32df9a39c","components/realestate/StatBlock.jsx":"9740bd4d2a47","components/realestate/TrustItem.jsx":"50f6f2050936","components/realestate/format.js":"38b1471f912c","ui_kits/website/app.jsx":"eebaaa70b47e","ui_kits/website/data.js":"3f57fc4a3bad","ui_kits/website/detail.jsx":"11ed86f9acae","ui_kits/website/ds-loader.js":"790fb37c3d02","ui_kits/website/home.jsx":"5e1f5b1f6095","ui_kits/website/modals.jsx":"e868ed05b3e1","ui_kits/website/pages.jsx":"e4bed20dcc64","ui_kits/website/pages2.jsx":"cc074a7cc6e1","ui_kits/website/shell.jsx":"f30e7751b3b4","ui_kits/website/store.jsx":"e0c0357cd51d"},"inlinedExternals":[],"unexposedExports":[{"name":"formatMXN","sourcePath":"components/realestate/format.js"}]} */

(() => {

const __ds_ns = (window.MextasDesignSystem_8aabb9 = window.MextasDesignSystem_8aabb9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'champagne',
  children,
  style,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'mx-badge mx-badge--' + tone + ' ' + className,
    style: style
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const toPascal = s => s.replace(/(^|[-_ ])(\w)/g, (_, __, c) => c.toUpperCase());

/** Lucide icon wrapper. Requires the Lucide UMD script (window.lucide) on the page. */
function Icon({
  name,
  size = 18,
  strokeWidth = 1.5,
  color = 'currentColor',
  fill = 'none',
  title,
  style,
  className,
  ...rest
}) {
  const lib = typeof window !== 'undefined' && window.lucide && window.lucide.icons;
  let node = lib ? lib[name] || lib[toPascal(name || '')] : null;
  if (node && node[0] === 'svg') node = node[2];
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": title ? undefined : true,
    role: title ? 'img' : undefined,
    className: className,
    style: {
      flexShrink: 0,
      display: 'block',
      ...style
    }
  }, rest), title ? /*#__PURE__*/React.createElement("title", null, title) : null, Array.isArray(node) ? node.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })) : null);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth,
  loading,
  disabled,
  href,
  type = 'button',
  children,
  className = '',
  ...rest
}) {
  const cls = ['mx-btn', 'mx-btn--' + variant, 'mx-btn--' + size, fullWidth ? 'mx-btn--block' : '', loading ? 'is-loading' : '', className].join(' ');
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, loading ? /*#__PURE__*/React.createElement("span", {
    className: "mx-spinner",
    "aria-hidden": "true"
  }) : iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: size === 'sm' ? 14 : 16
  }) : null, /*#__PURE__*/React.createElement("span", null, children), iconRight && !loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: size === 'sm' ? 14 : 16,
    className: "mx-btn__icon-r"
  }) : null);
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: cls,
    "aria-disabled": disabled || undefined
  }, rest), content);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled || loading,
    "aria-busy": loading || undefined
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function Chip({
  children,
  selected,
  icon,
  onClick,
  onRemove,
  removeLabel,
  tone = 'light',
  className = ''
}) {
  const cls = ['mx-chip', 'mx-chip--' + tone, selected ? 'is-selected' : '', onClick ? 'is-interactive' : '', className].join(' ');
  const Tag = onClick ? 'button' : 'span';
  return /*#__PURE__*/React.createElement(Tag, {
    type: onClick ? 'button' : undefined,
    className: cls,
    onClick: onClick,
    "aria-pressed": onClick ? !!selected : undefined
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }) : null, /*#__PURE__*/React.createElement("span", null, children), onRemove ? /*#__PURE__*/React.createElement("span", {
    role: "button",
    tabIndex: 0,
    "aria-label": removeLabel || 'Quitar filtro',
    className: "mx-chip__x",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onRemove(e);
      }
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "X",
    size: 12
  })) : null);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  variant = 'surface',
  size = 'md',
  active,
  activeIcon,
  count,
  className = '',
  iconFill,
  ...rest
}) {
  const px = {
    sm: 14,
    md: 17,
    lg: 20
  }[size];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    "aria-pressed": active === undefined ? undefined : !!active,
    className: ['mx-iconbtn', 'mx-iconbtn--' + variant, 'mx-iconbtn--' + size, active ? 'is-active' : '', className].join(' ')
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: active && activeIcon ? activeIcon : icon,
    size: px,
    fill: active ? iconFill || 'currentColor' : 'none'
  }), count ? /*#__PURE__*/React.createElement("span", {
    className: "mx-iconbtn__count"
  }, count) : null);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
/** MEXTAS / INMOBILIARIA typographic wordmark (no logo file supplied — plain type). */
function Logo({
  tone = 'light',
  size = 'md',
  href,
  onClick,
  style
}) {
  const s = {
    sm: [18, 6.5],
    md: [22, 7.5],
    lg: [34, 10.5]
  }[size] || [22, 7.5];
  const color = tone === 'light' ? 'var(--fg-inverse)' : 'var(--fg-1)';
  const inner = /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      lineHeight: 1,
      color,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `300 ${s[0]}px/1 var(--font-sans)`,
      letterSpacing: 'var(--ls-wordmark)',
      marginRight: '-0.3em'
    }
  }, "MEXTAS"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `500 ${s[1]}px/1 var(--font-sans)`,
      letterSpacing: 'var(--ls-sub)',
      marginTop: s[0] * 0.28,
      marginRight: '-0.44em',
      opacity: .85
    }
  }, "INMOBILIARIA"));
  if (href || onClick) return /*#__PURE__*/React.createElement("a", {
    href: href || '#',
    onClick: onClick,
    "aria-label": "Mextas Inmobiliaria \u2014 inicio",
    style: {
      textDecoration: 'none',
      display: 'inline-flex'
    }
  }, inner);
  return inner;
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const {
  useEffect,
  useRef,
  useState
} = React;
function Dialog({
  open,
  onClose,
  title,
  description,
  eyebrow,
  placement = 'center',
  size = 'md',
  tone = 'light',
  footer,
  hideClose,
  children,
  labelledBy,
  className = ''
}) {
  const [mounted, setMounted] = useState(open);
  const [closing, setClosing] = useState(false);
  const panel = useRef(null);
  const prev = useRef(null);
  useEffect(() => {
    if (open) {
      setMounted(true);
      setClosing(false);
    } else if (mounted) {
      setClosing(true);
      const t = setTimeout(() => {
        setMounted(false);
        setClosing(false);
      }, 280);
      return () => clearTimeout(t);
    }
  }, [open]);
  useEffect(() => {
    if (!open) return;
    prev.current = document.activeElement;
    const ov = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => {
      const f = panel.current && panel.current.querySelector('input,select,textarea,button:not([data-close]),[href],[tabindex]:not([tabindex="-1"])');
      (f || panel.current) && (f || panel.current).focus();
    }, 30);
    const onKey = e => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose && onClose();
      }
      if (e.key === 'Tab' && panel.current) {
        const els = [...panel.current.querySelectorAll('input,select,textarea,button,[href],[tabindex]:not([tabindex="-1"])')].filter(el => !el.disabled);
        if (!els.length) return;
        const first = els[0],
          last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = ov;
      document.removeEventListener('keydown', onKey);
      clearTimeout(t);
      prev.current && prev.current.focus && prev.current.focus();
    };
  }, [open]);
  if (!mounted) return null;
  const tid = labelledBy || (title ? 'mx-dlg-title' : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: ['mx-dialog', 'mx-dialog--' + placement, 'mx-dialog--' + size, 'mx-dialog--' + tone, closing ? 'is-closing' : '', className].join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-dialog__scrim",
    onClick: onClose,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    ref: panel,
    className: "mx-dialog__panel",
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": tid,
    tabIndex: -1
  }, !hideClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    "data-close": true,
    icon: "X",
    label: "Cerrar",
    variant: tone === 'dark' || placement === 'full' ? 'ghost' : 'ghost',
    className: "mx-dialog__close",
    onClick: onClose
  }) : null, title || description ? /*#__PURE__*/React.createElement("header", {
    className: "mx-dialog__head"
  }, eyebrow ? /*#__PURE__*/React.createElement("p", {
    className: "mx-dialog__eyebrow"
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
    id: tid,
    className: "mx-dialog__title"
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    className: "mx-dialog__desc"
  }, description) : null) : null, /*#__PURE__*/React.createElement("div", {
    className: "mx-dialog__body"
  }, children), footer ? /*#__PURE__*/React.createElement("footer", {
    className: "mx-dialog__foot"
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function EmptyState({
  icon = 'Search',
  title,
  description,
  action,
  tone = 'light',
  compact
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'mx-empty mx-empty--' + tone + (compact ? ' mx-empty--compact' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "mx-empty__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    strokeWidth: 1.25
  })), /*#__PURE__*/React.createElement("h3", {
    className: "mx-empty__title"
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    className: "mx-empty__desc"
  }, description) : null, action ? /*#__PURE__*/React.createElement("div", {
    className: "mx-empty__action"
  }, action) : null);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function Skeleton({
  width = '100%',
  height = 14,
  radius,
  variant = 'block',
  lines = 3,
  tone = 'light',
  style
}) {
  if (variant === 'text') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        width
      }
    }, Array.from({
      length: lines
    }).map((_, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: 'mx-skel mx-skel--' + tone,
      style: {
        height,
        width: i === lines - 1 ? '62%' : '100%'
      }
    })));
  }
  if (variant === 'card') {
    return /*#__PURE__*/React.createElement("div", {
      className: "mx-skel-card",
      "aria-hidden": "true",
      style: {
        width,
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: 'mx-skel mx-skel--' + tone,
      style: {
        aspectRatio: '3 / 2',
        borderRadius: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "mx-skel",
      style: {
        height: 14,
        width: '70%'
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "mx-skel",
      style: {
        height: 11,
        width: '45%'
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "mx-skel",
      style: {
        height: 11,
        width: '60%',
        marginTop: 6
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "mx-skel",
      style: {
        height: 18,
        width: '50%',
        marginTop: 6
      }
    })));
  }
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: 'mx-skel mx-skel--' + tone,
    style: {
      width,
      height,
      borderRadius: radius,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect
} = React;
const ICONS = {
  default: 'Info',
  success: 'CheckCircle2',
  error: 'AlertCircle',
  favorite: 'Heart'
};
function Toast({
  tone = 'default',
  title,
  message,
  icon,
  action,
  onClose,
  duration = 3800
}) {
  useEffect(() => {
    if (!duration || !onClose) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [duration, onClose]);
  return /*#__PURE__*/React.createElement("div", {
    className: 'mx-toast mx-toast--' + tone,
    role: "status",
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || ICONS[tone],
    size: 18,
    fill: tone === 'favorite' ? 'currentColor' : 'none',
    className: "mx-toast__icon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-toast__text"
  }, title ? /*#__PURE__*/React.createElement("strong", null, title) : null, message ? /*#__PURE__*/React.createElement("span", null, message) : null), action || null, onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "mx-toast__x",
    "aria-label": "Cerrar notificaci\xF3n",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "X",
    size: 14
  })) : null);
}
function ToastStack({
  toasts = [],
  onDismiss,
  position = 'bottom-center'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'mx-toast-stack mx-toast-stack--' + position
  }, toasts.map(t => /*#__PURE__*/React.createElement(Toast, _extends({
    key: t.id
  }, t, {
    onClose: () => onDismiss && onDismiss(t.id)
  }))));
}
Object.assign(__ds_scope, { Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  side = 'top',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'mx-tooltip mx-tooltip--' + side
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    className: "mx-tooltip__bubble"
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
const {
  useId
} = React;
function Checkbox({
  label,
  description,
  checked,
  onChange,
  disabled,
  id,
  name,
  tone = 'light',
  className = ''
}) {
  const auto = useId();
  const fid = id || 'mx-cb-' + auto;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    className: ['mx-check', 'mx-check--' + tone, disabled ? 'is-disabled' : '', className].join(' ')
  }, /*#__PURE__*/React.createElement("span", {
    className: "mx-check__box"
  }, /*#__PURE__*/React.createElement("input", {
    id: fid,
    name: name,
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked, e)
  }), /*#__PURE__*/React.createElement("span", {
    className: "mx-check__ui",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Check",
    size: 12,
    strokeWidth: 2.25
  }))), /*#__PURE__*/React.createElement("span", {
    className: "mx-check__text"
  }, /*#__PURE__*/React.createElement("span", null, label), description ? /*#__PURE__*/React.createElement("span", {
    className: "mx-check__desc"
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  htmlFor,
  hint,
  error,
  required,
  tone = 'light',
  children,
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'mx-field mx-field--' + tone + ' ' + className,
    style: style
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "mx-field__label",
    htmlFor: htmlFor
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "mx-field__req"
  }, " *") : null) : null, children, error ? /*#__PURE__*/React.createElement("p", {
    className: "mx-field__error",
    role: "alert"
  }, error) : hint ? /*#__PURE__*/React.createElement("p", {
    className: "mx-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useId
} = React;
function Input({
  label,
  hint,
  error,
  required,
  id,
  iconLeft,
  iconRight,
  multiline,
  rows = 4,
  size = 'md',
  tone = 'light',
  className = '',
  fieldStyle,
  ...rest
}) {
  const auto = useId();
  const fid = id || 'mx-in-' + auto;
  const Ctl = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    htmlFor: fid,
    hint: hint,
    error: error,
    required: required,
    tone: tone,
    style: fieldStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: ['mx-input', 'mx-input--' + size, 'mx-input--' + tone, error ? 'is-invalid' : '', multiline ? 'is-multiline' : '', className].join(' ')
  }, iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 16,
    className: "mx-input__icon"
  }) : null, /*#__PURE__*/React.createElement(Ctl, _extends({
    id: fid,
    rows: multiline ? rows : undefined,
    "aria-invalid": error ? true : undefined,
    required: required
  }, rest)), iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 16,
    className: "mx-input__icon"
  }) : null));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
const {
  useId
} = React;
function Radio({
  label,
  description,
  icon,
  name,
  value,
  checked,
  onChange,
  variant = 'default',
  disabled,
  id,
  className = ''
}) {
  const auto = useId();
  const fid = id || 'mx-rd-' + auto;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    className: ['mx-radio', 'mx-radio--' + variant, checked ? 'is-checked' : '', disabled ? 'is-disabled' : '', className].join(' ')
  }, /*#__PURE__*/React.createElement("input", {
    id: fid,
    type: "radio",
    name: name,
    value: value,
    checked: !!checked,
    disabled: disabled,
    onChange: () => onChange && onChange(value)
  }), /*#__PURE__*/React.createElement("span", {
    className: "mx-radio__dot",
    "aria-hidden": "true"
  }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    strokeWidth: 1.25,
    className: "mx-radio__icon"
  }) : null, /*#__PURE__*/React.createElement("span", {
    className: "mx-radio__text"
  }, /*#__PURE__*/React.createElement("span", null, label), description ? /*#__PURE__*/React.createElement("span", {
    className: "mx-radio__desc"
  }, description) : null));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const {
  useEffect,
  useId,
  useRef,
  useState
} = React;
function Select({
  label,
  hint,
  error,
  required,
  id,
  value,
  onChange,
  options = [],
  placeholder = 'Selecciona',
  size = 'md',
  tone = 'light',
  disabled,
  className = '',
  fieldStyle
}) {
  const auto = useId();
  const fid = id || 'mx-sel-' + auto;
  const [open, setOpen] = useState(false);
  const [hi, setHi] = useState(-1);
  const ref = useRef(null);
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const selIdx = opts.findIndex(o => o.value === value);
  const sel = opts[selIdx];
  useEffect(() => {
    if (!open) return;
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);
  const choose = o => {
    onChange && onChange(o.value);
    setOpen(false);
  };
  const onKey = e => {
    if (disabled) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        setHi(selIdx < 0 ? 0 : selIdx);
        return;
      }
      setHi(h => Math.max(0, Math.min(opts.length - 1, h + (e.key === 'ArrowDown' ? 1 : -1))));
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (open && hi >= 0) choose(opts[hi]);else {
        setOpen(true);
        setHi(selIdx < 0 ? 0 : selIdx);
      }
    } else if (e.key === 'Escape' || e.key === 'Tab') setOpen(false);
  };
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    htmlFor: fid,
    hint: hint,
    error: error,
    required: required,
    tone: tone,
    style: fieldStyle
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: ['mx-select', 'mx-input', 'mx-input--' + size, 'mx-input--' + tone, open ? 'is-open' : '', error ? 'is-invalid' : '', className].join(' ')
  }, /*#__PURE__*/React.createElement("button", {
    id: fid,
    type: "button",
    className: "mx-select__trigger",
    disabled: disabled,
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    "aria-controls": fid + '-list',
    onClick: () => {
      setOpen(o => !o);
      setHi(selIdx);
    },
    onKeyDown: onKey
  }, /*#__PURE__*/React.createElement("span", {
    className: sel ? '' : 'mx-select__ph'
  }, sel ? sel.label : placeholder), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ChevronDown",
    size: 16,
    className: "mx-select__chev"
  })), open ? /*#__PURE__*/React.createElement("ul", {
    id: fid + '-list',
    role: "listbox",
    className: "mx-select__list",
    "aria-labelledby": fid
  }, opts.map((o, i) => /*#__PURE__*/React.createElement("li", {
    key: String(o.value),
    role: "option",
    "aria-selected": o.value === value,
    className: (i === hi ? 'is-hi ' : '') + (o.value === value ? 'is-sel' : ''),
    onMouseEnter: () => setHi(i),
    onMouseDown: e => {
      e.preventDefault();
      choose(o);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mx-select__opt"
  }, /*#__PURE__*/React.createElement("span", null, o.label), o.description ? /*#__PURE__*/React.createElement("span", {
    className: "mx-select__desc"
  }, o.description) : null), o.value === value ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Check",
    size: 14
  }) : null))) : null));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
const {
  useId
} = React;
function Slider({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  format,
  id,
  tone = 'light',
  className = ''
}) {
  const auto = useId();
  const fid = id || 'mx-sl-' + auto;
  const p = (value - min) / (max - min) * 100;
  return /*#__PURE__*/React.createElement("div", {
    className: ['mx-slider', 'mx-slider--' + tone, className].join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-slider__head"
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fid
  }, label) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("output", {
    htmlFor: fid
  }, format ? format(value) : value)), /*#__PURE__*/React.createElement("input", {
    id: fid,
    type: "range",
    min: min,
    max: max,
    step: step,
    value: value,
    style: {
      '--_p': p + '%'
    },
    onChange: e => onChange && onChange(Number(e.target.value))
  }));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
const {
  useId
} = React;
function Switch({
  label,
  checked,
  onChange,
  disabled,
  id,
  className = ''
}) {
  const auto = useId();
  const fid = id || 'mx-sw-' + auto;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    className: ['mx-switch', disabled ? 'is-disabled' : '', className].join(' ')
  }, /*#__PURE__*/React.createElement("input", {
    id: fid,
    type: "checkbox",
    role: "switch",
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", {
    className: "mx-switch__track",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mx-switch__thumb"
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function Breadcrumbs({
  items = [],
  tone = 'light',
  className = ''
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Ruta de navegaci\xF3n",
    className: 'mx-crumbs mx-crumbs--' + tone + ' ' + className
  }, /*#__PURE__*/React.createElement("ol", null, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, i > 0 ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ChevronRight",
    size: 12
  }) : null, it.href && i < items.length - 1 ? /*#__PURE__*/React.createElement("a", {
    href: it.href,
    onClick: it.onClick
  }, it.label) : /*#__PURE__*/React.createElement("span", {
    "aria-current": i === items.length - 1 ? 'page' : undefined
  }, it.label)))));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const {
  useRef
} = React;
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  tone = 'light',
  size = 'md',
  fullWidth,
  label,
  className = ''
}) {
  const refs = useRef([]);
  const idx = items.findIndex(t => t.value === value);
  const onKey = e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const n = (idx + (e.key === 'ArrowRight' ? 1 : -1) + items.length) % items.length;
    onChange && onChange(items[n].value);
    refs.current[n] && refs.current[n].focus();
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    "aria-label": label,
    onKeyDown: onKey,
    className: ['mx-tabs', 'mx-tabs--' + variant, 'mx-tabs--' + tone, 'mx-tabs--' + size, fullWidth ? 'mx-tabs--full' : '', className].join(' ')
  }, items.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t.value,
    ref: el => refs.current[i] = el,
    type: "button",
    role: "tab",
    "aria-selected": t.value === value,
    tabIndex: t.value === value ? 0 : -1,
    className: 'mx-tab' + (t.value === value ? ' is-active' : ''),
    onClick: () => onChange && onChange(t.value)
  }, /*#__PURE__*/React.createElement("span", null, t.label), t.count != null ? /*#__PURE__*/React.createElement("span", {
    className: "mx-tab__count"
  }, t.count) : null)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/realestate/AmenityItem.jsx
try { (() => {
function AmenityItem({
  icon,
  label,
  detail,
  variant = 'tile',
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'mx-amen mx-amen--' + variant + ' ' + className
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: variant === 'tile' ? 28 : 18,
    strokeWidth: 1.25,
    className: "mx-amen__icon"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mx-amen__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mx-amen__l"
  }, label), detail ? /*#__PURE__*/React.createElement("span", {
    className: "mx-amen__d"
  }, detail) : null));
}
Object.assign(__ds_scope, { AmenityItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realestate/AmenityItem.jsx", error: String((e && e.message) || e) }); }

// components/realestate/CategoryTile.jsx
try { (() => {
function CategoryTile({
  icon,
  label,
  count,
  unit = 'propiedades',
  href,
  onClick,
  active,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href || '#',
    onClick: onClick,
    className: 'mx-cat' + (active ? ' is-active' : '') + ' ' + className
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 26,
    strokeWidth: 1.25,
    className: "mx-cat__icon"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mx-cat__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mx-cat__label"
  }, label), count != null ? /*#__PURE__*/React.createElement("span", {
    className: "mx-cat__count"
  }, count, " ", unit) : null));
}
Object.assign(__ds_scope, { CategoryTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realestate/CategoryTile.jsx", error: String((e && e.message) || e) }); }

// components/realestate/CompareTray.jsx
try { (() => {
function CompareTray({
  items = [],
  max = 3,
  onRemove,
  onCompare,
  onClear,
  fixed = true
}) {
  if (!items.length) return null;
  const slots = Array.from({
    length: max
  });
  return /*#__PURE__*/React.createElement("div", {
    className: 'mx-ctray' + (fixed ? ' is-fixed' : ''),
    role: "region",
    "aria-label": "Comparador de propiedades"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-ctray__label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mx-ctray__t"
  }, "Comparar propiedades (", items.length, ")"), /*#__PURE__*/React.createElement("span", {
    className: "mx-ctray__s"
  }, items.length < max ? 'Puedes agregar ' + (max - items.length) + ' más' : 'Máximo alcanzado')), /*#__PURE__*/React.createElement("ul", {
    className: "mx-ctray__slots"
  }, slots.map((_, i) => {
    const it = items[i];
    return it ? /*#__PURE__*/React.createElement("li", {
      key: it.id,
      className: "mx-ctray__item"
    }, /*#__PURE__*/React.createElement("img", {
      src: it.image,
      alt: ""
    }), /*#__PURE__*/React.createElement("span", {
      className: "mx-ctray__name"
    }, it.title), /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": 'Quitar ' + it.title,
      onClick: () => onRemove && onRemove(it)
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "X",
      size: 12
    }))) : /*#__PURE__*/React.createElement("li", {
      key: 'e' + i,
      className: "mx-ctray__empty",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "Plus",
      size: 14
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: "mx-ctray__actions"
  }, onClear ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "mx-ctray__clear",
    onClick: onClear
  }, "Limpiar") : null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    iconRight: "ArrowRight",
    disabled: items.length < 2,
    onClick: onCompare
  }, "Ver comparaci\xF3n")));
}
Object.assign(__ds_scope, { CompareTray });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realestate/CompareTray.jsx", error: String((e && e.message) || e) }); }

// components/realestate/LocationCard.jsx
try { (() => {
function LocationCard({
  name,
  region,
  image,
  count,
  href,
  onClick,
  aspect = '16 / 10',
  className = ''
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href || '#',
    onClick: onClick,
    className: 'mx-loc ' + className,
    style: {
      aspectRatio: aspect
    },
    "aria-label": name + ', ' + region + (count != null ? ' — ' + count + ' propiedades' : '')
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mx-loc__shade"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mx-loc__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mx-loc__name"
  }, name), /*#__PURE__*/React.createElement("span", {
    className: "mx-loc__region"
  }, region)), count != null ? /*#__PURE__*/React.createElement("span", {
    className: "mx-loc__count"
  }, count, " propiedades", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ArrowRight",
    size: 13
  })) : null);
}
Object.assign(__ds_scope, { LocationCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realestate/LocationCard.jsx", error: String((e && e.message) || e) }); }

// components/realestate/PropertySpecs.jsx
try { (() => {
function PropertySpecs({
  beds,
  baths,
  area,
  parking,
  variant = 'inline',
  tone = 'light',
  className = ''
}) {
  const items = [beds != null && {
    icon: 'BedDouble',
    value: beds,
    label: beds === 1 ? 'recámara' : 'recámaras'
  }, baths != null && {
    icon: 'Bath',
    value: baths,
    label: 'baños'
  }, area != null && {
    icon: 'Square',
    value: area + ' m²',
    label: 'superficie'
  }, parking != null && {
    icon: 'Car',
    value: parking,
    label: 'estacionamientos'
  }].filter(Boolean);
  return /*#__PURE__*/React.createElement("ul", {
    className: ['mx-specs', 'mx-specs--' + variant, 'mx-specs--' + tone, className].join(' ')
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.icon,
    title: it.value + ' ' + it.label
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: variant === 'blocks' ? 22 : 15,
    strokeWidth: variant === 'blocks' ? 1.25 : 1.5
  }), /*#__PURE__*/React.createElement("span", {
    className: "mx-specs__v"
  }, it.value), /*#__PURE__*/React.createElement("span", {
    className: variant === 'blocks' ? 'mx-specs__l' : 'mx-sr'
  }, it.label))));
}
Object.assign(__ds_scope, { PropertySpecs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realestate/PropertySpecs.jsx", error: String((e && e.message) || e) }); }

// components/realestate/SectionHeader.jsx
try { (() => {
function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  tone = 'light',
  align = 'left',
  as = 'h2',
  className = ''
}) {
  const H = as;
  return /*#__PURE__*/React.createElement("div", {
    className: ['mx-sech', 'mx-sech--' + tone, 'mx-sech--' + align, className].join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-sech__main"
  }, eyebrow ? /*#__PURE__*/React.createElement("p", {
    className: "mx-sech__eyebrow"
  }, eyebrow) : null, /*#__PURE__*/React.createElement(H, {
    className: "mx-sech__title"
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    className: "mx-sech__desc"
  }, description) : null), action ? /*#__PURE__*/React.createElement("div", {
    className: "mx-sech__action"
  }, action) : null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realestate/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/realestate/StatBlock.jsx
try { (() => {
function StatBlock({
  value,
  label,
  tone = 'dark',
  size = 'md',
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['mx-stat', 'mx-stat--' + tone, 'mx-stat--' + size, className].join(' ')
  }, /*#__PURE__*/React.createElement("span", {
    className: "mx-stat__v"
  }, value), /*#__PURE__*/React.createElement("span", {
    className: "mx-stat__l"
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realestate/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/realestate/TrustItem.jsx
try { (() => {
function TrustItem({
  icon,
  title,
  subtitle,
  tone = 'dark',
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'mx-trust mx-trust--' + tone + ' ' + className
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    strokeWidth: 1.25,
    className: "mx-trust__icon"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mx-trust__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mx-trust__t"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "mx-trust__s"
  }, subtitle)));
}
Object.assign(__ds_scope, { TrustItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realestate/TrustItem.jsx", error: String((e && e.message) || e) }); }

// components/realestate/format.js
try { (() => {
const formatMXN = (n, currency = 'MXN') => '$' + Math.round(n).toLocaleString('en-US') + (currency ? ' ' + currency : '');
Object.assign(__ds_scope, { formatMXN });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realestate/format.js", error: String((e && e.message) || e) }); }

// components/realestate/PropertyCard.jsx
try { (() => {
const {
  useState
} = React;
function PropertyCard({
  property: p,
  href,
  onOpen,
  favorite,
  onToggleFavorite,
  compared,
  onToggleCompare,
  compareDisabled,
  layout = 'grid',
  eager,
  className = ''
}) {
  const [loaded, setLoaded] = useState(false);
  const open = e => {
    if (onOpen) {
      e.preventDefault();
      onOpen(p);
    }
  };
  const price = p.priceLabel || __ds_scope.formatMXN(p.price, p.currency || 'MXN') + (p.operation === 'renta' ? ' / mes' : '');
  return /*#__PURE__*/React.createElement("article", {
    className: ['mx-pcard', 'mx-pcard--' + layout, className].join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-pcard__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: p.image,
    alt: p.title + ' — ' + p.location,
    loading: eager ? 'eager' : 'lazy',
    onLoad: () => setLoaded(true),
    className: loaded ? 'is-loaded' : ''
  }), p.badge ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    className: "mx-pcard__badge"
  }, p.badge) : null, onToggleFavorite ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    className: "mx-pcard__fav",
    icon: "Heart",
    variant: "glass",
    size: "md",
    active: !!favorite,
    label: favorite ? 'Quitar de favoritos' : 'Guardar en favoritos',
    onClick: () => onToggleFavorite(p)
  }) : null), /*#__PURE__*/React.createElement("div", {
    className: "mx-pcard__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-pcard__head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "mx-pcard__title"
  }, /*#__PURE__*/React.createElement("a", {
    href: href || '#',
    onClick: open
  }, p.title)), /*#__PURE__*/React.createElement("p", {
    className: "mx-pcard__loc"
  }, p.location)), /*#__PURE__*/React.createElement(__ds_scope.PropertySpecs, {
    beds: p.beds,
    baths: p.baths,
    area: p.area
  }), /*#__PURE__*/React.createElement("p", {
    className: "mx-pcard__price"
  }, price), /*#__PURE__*/React.createElement("div", {
    className: "mx-pcard__foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mx-pcard__cta"
  }, "Ver propiedad", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ArrowRight",
    size: 15
  })), onToggleCompare ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: 'mx-pcard__cmp' + (compared ? ' is-on' : ''),
    "aria-pressed": !!compared,
    disabled: compareDisabled && !compared,
    title: compareDisabled && !compared ? 'Máximo 3 propiedades' : undefined,
    onClick: () => onToggleCompare(p)
  }, /*#__PURE__*/React.createElement("span", {
    className: "mx-pcard__cmpbox"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Check",
    size: 10,
    strokeWidth: 2.5
  })), "Comparar") : null)));
}
Object.assign(__ds_scope, { PropertyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realestate/PropertyCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const MX = window.MX;
  function Router() {
    const {
      route
    } = useApp();
    const [a, b] = route.parts;
    let page;
    if (!a) page = /*#__PURE__*/React.createElement(Home, null);else if (a === 'propiedades') page = b ? /*#__PURE__*/React.createElement(PropertyDetail, {
      key: b,
      slug: b
    }) : /*#__PURE__*/React.createElement(Listings, null);else if (a === 'favoritos') page = /*#__PURE__*/React.createElement(Favorites, null);else if (a === 'comparar') page = /*#__PURE__*/React.createElement(Compare, null);else if (a === 'desarrollos') page = b ? /*#__PURE__*/React.createElement(DevelopmentDetail, {
      key: b,
      slug: b
    }) : /*#__PURE__*/React.createElement(Developments, null);else if (a === 'servicios') page = /*#__PURE__*/React.createElement(Services, null);else if (a === 'nosotros') page = /*#__PURE__*/React.createElement(About, null);else if (a === 'vender') page = /*#__PURE__*/React.createElement(Sell, null);else if (a === 'contacto') page = /*#__PURE__*/React.createElement(Contact, null);else if (a === 'blog') page = b ? /*#__PURE__*/React.createElement(BlogPost, {
      key: b,
      slug: b
    }) : /*#__PURE__*/React.createElement(Blog, null);else page = /*#__PURE__*/React.createElement(NotFound, null);
    return /*#__PURE__*/React.createElement("main", {
      id: "main",
      tabIndex: -1,
      key: route.path,
      className: "k-page",
      style: {
        outline: 'none'
      }
    }, page);
  }
  function Tray() {
    const {
      cmpItems,
      toggleCompare,
      clearCompare,
      navigate,
      route
    } = useApp();
    if (route.path === '/comparar') return null;
    return /*#__PURE__*/React.createElement(MX.CompareTray, {
      items: cmpItems,
      onRemove: toggleCompare,
      onClear: clearCompare,
      onCompare: () => navigate('/comparar')
    });
  }
  function Toasts() {
    const {
      toasts,
      dismiss
    } = useApp();
    return /*#__PURE__*/React.createElement("div", {
      className: "mx-toast-stack mx-toast-stack--top-center"
    }, toasts.map(t => /*#__PURE__*/React.createElement(MX.Toast, _extends({
      key: t.id
    }, t, {
      duration: 0,
      onClose: () => dismiss(t.id)
    }))));
  }
  function App() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
      className: "k-skip",
      href: "#main",
      onClick: e => {
        e.preventDefault();
        const m = document.getElementById('main');
        m && m.focus();
      }
    }, "Saltar al contenido"), /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Router, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(ModalHost, null), /*#__PURE__*/React.createElement(Tray, null), /*#__PURE__*/React.createElement(Toasts, null));
  }
  window.MX_READY.then(() => ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(AppProvider, null, /*#__PURE__*/React.createElement(App, null))));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* Mextas mock data — single source for every screen. Swap IMG paths when real photography arrives. */
(function () {
  const IMG = '../../assets/img/';
  const I = {
    hero: IMG + 'hero-casa-moderna.jpg',
    valle: IMG + 'casa-valle-real.jpg',
    lomas: IMG + 'residencia-lomas.jpg',
    polanco: IMG + 'depto-polanco.jpg',
    cabo: IMG + 'penthouse-cabo.jpg',
    interior: IMG + 'vender.jpg',
    mty: IMG + 'monterrey.jpg',
    gdl: IMG + 'guadalajara.jpg',
    cdmx: IMG + 'cdmx.jpg',
    cun: IMG + 'cancun.jpg',
    mid: IMG + 'merida.jpg'
  };
  const ARCH = [I.valle, I.hero, I.lomas, I.polanco, I.cabo, I.interior];
  const gallery = (first, ...rest) => [first, ...ARCH.filter(x => x !== first && !rest.includes(x)), ...rest].slice(0, 6);
  const agents = [{
    id: 'ag1',
    name: 'Mariana Ortega',
    role: 'Asesora senior · Zona Metropolitana GDL',
    phone: '33 1234 5678',
    email: 'mariana@mextas.mx',
    initials: 'MO'
  }, {
    id: 'ag2',
    name: 'Andrés Villarreal',
    role: 'Asesor residencial · Monterrey',
    phone: '81 1234 5678',
    email: 'andres@mextas.mx',
    initials: 'AV'
  }, {
    id: 'ag3',
    name: 'Lucía Fernández',
    role: 'Directora comercial · CDMX',
    phone: '55 1234 5678',
    email: 'lucia@mextas.mx',
    initials: 'LF'
  }, {
    id: 'ag4',
    name: 'Rodrigo Canul',
    role: 'Asesor de inversión · Península',
    phone: '999 123 4567',
    email: 'rodrigo@mextas.mx',
    initials: 'RC'
  }];
  const P = o => Object.assign({
    currency: 'MXN',
    operation: 'venta',
    status: 'Disponible',
    parking: 2,
    amenities: [],
    features: []
  }, o);
  const properties = [P({
    id: 'MX-1024',
    slug: 'casa-en-valle-real',
    title: 'Casa en Valle Real',
    type: 'Casa',
    city: 'Zapopan',
    state: 'Jalisco',
    location: 'Zapopan, Jalisco',
    zones: ['zapopan', 'guadalajara', 'valle-real'],
    price: 12850000,
    beds: 4,
    baths: 4.5,
    area: 320,
    lot: 410,
    parking: 3,
    year: 2021,
    badge: 'Destacada',
    image: I.valle,
    images: gallery(I.valle),
    amenities: ['Alberca', 'Jardín', 'Terraza', 'Seguridad', 'Cocina equipada', 'Estacionamiento', 'Bodega'],
    features: ['Doble altura en estancia', 'Cancelería de aluminio negro', 'Paneles solares', 'Cuarto de servicio independiente'],
    description: ['Residencia de dos niveles dentro de coto privado en Valle Real, a cinco minutos de Andares. La planta baja integra sala, comedor y cocina en un solo espacio abierto hacia el jardín y la alberca.', 'En planta alta, cuatro recámaras con baño completo y vestidor; la principal cuenta con terraza propia. Materiales de piedra natural, madera de parota y acabados en mármol travertino.'],
    lat: 20.7401,
    lng: -103.4262,
    agent: 'ag1',
    publishedAt: '2026-09-02'
  }), P({
    id: 'MX-1031',
    slug: 'residencia-en-lomas',
    title: 'Residencia en Lomas',
    type: 'Casa',
    city: 'Monterrey',
    state: 'Nuevo León',
    location: 'Monterrey, Nuevo León',
    zones: ['monterrey', 'lomas'],
    price: 9750000,
    beds: 3,
    baths: 3.5,
    area: 280,
    lot: 350,
    parking: 2,
    year: 2023,
    badge: 'Nueva',
    image: I.lomas,
    images: gallery(I.lomas),
    amenities: ['Jardín', 'Terraza', 'Seguridad', 'Cocina equipada', 'Estacionamiento', 'Pet friendly'],
    features: ['Vista a la Sierra Madre', 'Estudio en planta baja', 'Sistema de riego automatizado'],
    description: ['Casa contemporánea en Lomas del Valle con vista abierta a la Sierra Madre. Volúmenes limpios, grandes ventanales y una terraza techada que extiende la estancia hacia el exterior.', 'Tres recámaras en planta alta, estudio en planta baja que puede funcionar como cuarta recámara y cochera para dos autos.'],
    lat: 25.6415,
    lng: -100.3521,
    agent: 'ag2',
    publishedAt: '2026-09-18'
  }), P({
    id: 'MX-1046',
    slug: 'departamento-en-polanco',
    title: 'Departamento en Polanco',
    type: 'Departamento',
    city: 'Ciudad de México',
    state: 'CDMX',
    location: 'Miguel Hidalgo, CDMX',
    zones: ['cdmx', 'polanco', 'miguel-hidalgo'],
    price: 15600000,
    beds: 2,
    baths: 2,
    area: 150,
    parking: 2,
    year: 2020,
    badge: 'Premium',
    image: I.polanco,
    images: gallery(I.polanco, I.cdmx),
    amenities: ['Elevador', 'Gimnasio', 'Seguridad', 'Roof garden', 'Terraza', 'Estacionamiento', 'Pet friendly'],
    features: ['Piso 14 con vista a Chapultepec', 'Lobby con recepción 24 h', 'Bodega de 6 m²'],
    description: ['Departamento en piso alto sobre Campos Elíseos, con ventanales de piso a techo orientados al Bosque de Chapultepec. Distribución eficiente con estancia amplia y cocina integral abierta.', 'El edificio cuenta con roof garden, gimnasio equipado y recepción 24 horas. A pasos de Presidente Masaryk y del Auditorio Nacional.'],
    lat: 19.4285,
    lng: -99.1945,
    agent: 'ag3',
    publishedAt: '2026-08-21'
  }), P({
    id: 'MX-1052',
    slug: 'penthouse-en-cabo',
    title: 'Penthouse en Cabo',
    type: 'Penthouse',
    city: 'Los Cabos',
    state: 'Baja California Sur',
    location: 'Los Cabos, Baja California Sur',
    zones: ['los-cabos'],
    price: 18900000,
    beds: 3,
    baths: 3.5,
    area: 210,
    parking: 2,
    year: 2024,
    badge: 'Nueva',
    image: I.cabo,
    images: gallery(I.cabo),
    amenities: ['Alberca', 'Terraza', 'Elevador', 'Gimnasio', 'Seguridad', 'Amueblado'],
    features: ['Terraza de 60 m² con vista al Mar de Cortés', 'Se entrega amueblado', 'Programa de renta vacacional opcional'],
    description: ['Penthouse frente al Mar de Cortés en el corredor turístico, con terraza privada de 60 m² y vista abierta al atardecer. Se entrega amueblado y listo para habitar o rentar.', 'El desarrollo incluye alberca infinita, gimnasio y acceso controlado. Potencial de renta vacacional con administración opcional.'],
    lat: 22.9431,
    lng: -109.8187,
    agent: 'ag4',
    publishedAt: '2026-09-10'
  }), P({
    id: 'MX-1060',
    slug: 'residencia-lomas-de-chapultepec',
    title: 'Residencia en Lomas de Chapultepec',
    type: 'Casa',
    city: 'Ciudad de México',
    state: 'CDMX',
    location: 'Lomas de Chapultepec, CDMX',
    zones: ['cdmx', 'lomas', 'miguel-hidalgo'],
    price: 42500000,
    beds: 5,
    baths: 5.5,
    area: 620,
    lot: 900,
    parking: 4,
    year: 2019,
    badge: 'Premium',
    image: I.hero,
    images: gallery(I.hero),
    amenities: ['Alberca', 'Jardín', 'Terraza', 'Seguridad', 'Gimnasio', 'Cocina equipada', 'Estacionamiento', 'Bodega'],
    features: ['Alberca climatizada', 'Cava para 400 botellas', 'Casa de huéspedes', 'Domótica integral'],
    description: ['Residencia de autor en calle cerrada de Lomas de Chapultepec. Arquitectura horizontal de concreto y piedra, con alberca climatizada y jardín de 300 m².', 'Cinco recámaras, casa de huéspedes, cava, gimnasio y cuarto de cine. Sistema de domótica integral y seguridad perimetral.'],
    lat: 19.4234,
    lng: -99.2156,
    agent: 'ag3',
    publishedAt: '2026-07-30'
  }), P({
    id: 'MX-1067',
    slug: 'departamento-en-condesa',
    title: 'Departamento en Condesa',
    type: 'Departamento',
    operation: 'renta',
    city: 'Ciudad de México',
    state: 'CDMX',
    location: 'Cuauhtémoc, CDMX',
    zones: ['cdmx', 'condesa'],
    price: 38000,
    beds: 2,
    baths: 2,
    area: 110,
    parking: 1,
    year: 2018,
    image: I.interior,
    images: gallery(I.interior),
    amenities: ['Terraza', 'Elevador', 'Seguridad', 'Amueblado', 'Pet friendly'],
    features: ['Frente a Parque México', 'Contrato mínimo 12 meses', 'Mantenimiento incluido'],
    description: ['Departamento amueblado frente a Parque México, con terraza privada y luz natural durante todo el día. Ideal para una estancia larga en una de las zonas más caminables de la ciudad.', 'Incluye mantenimiento, un cajón de estacionamiento y admite mascotas.'],
    lat: 19.4122,
    lng: -99.1716,
    agent: 'ag3',
    publishedAt: '2026-09-20'
  }), P({
    id: 'MX-1073',
    slug: 'casa-en-san-pedro',
    title: 'Casa en San Pedro Garza García',
    type: 'Casa',
    city: 'Monterrey',
    state: 'Nuevo León',
    location: 'San Pedro Garza García, N.L.',
    zones: ['monterrey', 'san-pedro'],
    price: 24300000,
    beds: 4,
    baths: 5,
    area: 450,
    lot: 600,
    parking: 4,
    year: 2022,
    badge: 'Destacada',
    image: I.hero,
    images: gallery(I.hero, I.mty),
    amenities: ['Alberca', 'Jardín', 'Terraza', 'Seguridad', 'Gimnasio', 'Estacionamiento'],
    features: ['Fraccionamiento con caseta', 'Recámara principal con sala privada', 'Asador techado'],
    description: ['Casa en fraccionamiento privado de San Pedro, con alberca, jardín y asador techado. Espacios sociales en doble altura conectados al exterior.', 'Cuatro recámaras con baño y vestidor, sala de TV en planta alta y gimnasio.'],
    lat: 25.6573,
    lng: -100.4027,
    agent: 'ag2',
    publishedAt: '2026-08-05'
  }), P({
    id: 'MX-1081',
    slug: 'departamento-en-puerto-cancun',
    title: 'Departamento en Puerto Cancún',
    type: 'Departamento',
    city: 'Cancún',
    state: 'Quintana Roo',
    location: 'Cancún, Quintana Roo',
    zones: ['cancun'],
    price: 8950000,
    beds: 2,
    baths: 2.5,
    area: 140,
    parking: 2,
    year: 2023,
    badge: 'Destacada',
    image: I.cabo,
    images: gallery(I.cabo, I.cun),
    amenities: ['Alberca', 'Gimnasio', 'Elevador', 'Seguridad', 'Roof garden', 'Estacionamiento'],
    features: ['Vista a la marina', 'Club de playa con acceso', 'Alta demanda de renta vacacional'],
    description: ['Departamento con vista a la marina en Puerto Cancún, a minutos de la zona hotelera. Terraza con cocineta exterior y acceso al club de playa del desarrollo.', 'Alta ocupación para renta vacacional; se puede integrar a programa de administración.'],
    lat: 21.1619,
    lng: -86.8187,
    agent: 'ag4',
    publishedAt: '2026-09-12'
  }), P({
    id: 'MX-1088',
    slug: 'casa-en-centro-merida',
    title: 'Casa en Centro de Mérida',
    type: 'Casa',
    city: 'Mérida',
    state: 'Yucatán',
    location: 'Mérida, Yucatán',
    zones: ['merida'],
    price: 6400000,
    beds: 3,
    baths: 3,
    area: 260,
    lot: 330,
    parking: 1,
    year: 1920,
    badge: 'Nueva',
    image: I.interior,
    images: gallery(I.interior, I.mid),
    amenities: ['Alberca', 'Jardín', 'Terraza', 'Cocina equipada'],
    features: ['Casona restaurada', 'Pisos de pasta originales', 'Techos de 5 m de altura'],
    description: ['Casona restaurada en el Centro Histórico, con techos altos, pisos de pasta originales y patio central con alberca.', 'Tres recámaras independientes, cocina abierta y terraza en azotea. A dos calles del Paseo de Montejo.'],
    lat: 20.9754,
    lng: -89.6216,
    agent: 'ag4',
    publishedAt: '2026-09-15'
  }), P({
    id: 'MX-1094',
    slug: 'terreno-en-temozon-norte',
    title: 'Terreno en Temozón Norte',
    type: 'Terreno',
    city: 'Mérida',
    state: 'Yucatán',
    location: 'Mérida, Yucatán',
    zones: ['merida'],
    price: 3200000,
    beds: 0,
    baths: 0,
    area: 600,
    parking: 0,
    year: null,
    image: I.mid,
    images: [I.mid, I.hero, I.valle],
    amenities: ['Seguridad'],
    features: ['Uso de suelo habitacional', 'Servicios a pie de lote', 'Privada con caseta'],
    description: ['Lote residencial en privada de Temozón Norte, con servicios a pie de lote y acceso controlado. Topografía plana, lista para construir.'],
    lat: 21.0592,
    lng: -89.6103,
    agent: 'ag4',
    publishedAt: '2026-06-28'
  }), P({
    id: 'MX-1102',
    slug: 'oficina-en-santa-fe',
    title: 'Oficina en Santa Fe',
    type: 'Oficina',
    city: 'Ciudad de México',
    state: 'CDMX',
    location: 'Santa Fe, CDMX',
    zones: ['cdmx', 'santa-fe'],
    price: 11200000,
    beds: 0,
    baths: 2,
    area: 240,
    parking: 6,
    year: 2017,
    image: I.cdmx,
    images: [I.cdmx, I.polanco, I.interior],
    amenities: ['Elevador', 'Seguridad', 'Estacionamiento'],
    features: ['Piso 22, planta libre', 'Certificación LEED', 'Seis cajones de estacionamiento'],
    description: ['Oficina en planta libre en torre corporativa con certificación LEED. Entrega en obra gris acondicionada, lista para adaptar al proyecto de cada empresa.'],
    lat: 19.3659,
    lng: -99.2596,
    agent: 'ag3',
    publishedAt: '2026-07-11'
  }), P({
    id: 'MX-1109',
    slug: 'casa-en-juriquilla',
    title: 'Casa en Juriquilla',
    type: 'Casa',
    city: 'Querétaro',
    state: 'Querétaro',
    location: 'Juriquilla, Querétaro',
    zones: ['queretaro'],
    price: 7850000,
    beds: 3,
    baths: 3.5,
    area: 300,
    lot: 360,
    parking: 2,
    year: 2024,
    image: I.valle,
    images: gallery(I.valle, I.lomas),
    amenities: ['Jardín', 'Terraza', 'Seguridad', 'Cocina equipada', 'Estacionamiento', 'Pet friendly'],
    features: ['Vista al campo de golf', 'Preparación para paneles solares'],
    description: ['Casa nueva frente al campo de golf de Juriquilla, en condominio con seguridad 24 horas. Estancia con doble altura y jardín trasero.'],
    lat: 20.7036,
    lng: -100.4468,
    agent: 'ag2',
    publishedAt: '2026-09-08'
  }), P({
    id: 'MX-1115',
    slug: 'departamento-en-angelopolis',
    title: 'Departamento en Angelópolis',
    type: 'Departamento',
    city: 'Puebla',
    state: 'Puebla',
    location: 'Angelópolis, Puebla',
    zones: ['puebla'],
    price: 4650000,
    beds: 2,
    baths: 2,
    area: 118,
    parking: 2,
    year: 2022,
    image: I.polanco,
    images: gallery(I.polanco),
    amenities: ['Alberca', 'Gimnasio', 'Elevador', 'Seguridad', 'Estacionamiento'],
    features: ['Torre con amenidades completas', 'Cerca de Lomas de Angelópolis'],
    description: ['Departamento en torre residencial de Angelópolis con alberca, gimnasio y áreas comunes. Estancia luminosa con balcón.'],
    lat: 19.0197,
    lng: -98.2440,
    agent: 'ag2',
    publishedAt: '2026-08-14'
  }), P({
    id: 'MX-1121',
    slug: 'local-en-andares',
    title: 'Local comercial en Andares',
    type: 'Local',
    operation: 'renta',
    city: 'Zapopan',
    state: 'Jalisco',
    location: 'Zapopan, Jalisco',
    zones: ['zapopan', 'guadalajara'],
    price: 95000,
    beds: 0,
    baths: 1,
    area: 180,
    parking: 4,
    year: 2016,
    image: I.gdl,
    images: [I.gdl, I.interior, I.polanco],
    amenities: ['Seguridad', 'Estacionamiento'],
    features: ['Frente de 12 m', 'Alto flujo peatonal'],
    description: ['Local en planta baja sobre el corredor comercial de Andares, con frente de 12 metros y alto flujo peatonal.'],
    lat: 20.7101,
    lng: -103.4115,
    agent: 'ag1',
    publishedAt: '2026-09-01'
  }), P({
    id: 'MX-1128',
    slug: 'departamento-en-providencia',
    title: 'Departamento en Providencia',
    type: 'Departamento',
    operation: 'renta',
    city: 'Guadalajara',
    state: 'Jalisco',
    location: 'Guadalajara, Jalisco',
    zones: ['guadalajara'],
    price: 26000,
    beds: 2,
    baths: 2,
    area: 105,
    parking: 1,
    year: 2021,
    image: I.interior,
    images: gallery(I.interior, I.gdl),
    amenities: ['Elevador', 'Gimnasio', 'Roof garden', 'Seguridad', 'Pet friendly'],
    features: ['Roof garden con asadores', 'A una calle de Av. Providencia'],
    description: ['Departamento en edificio boutique de Providencia con roof garden y gimnasio. Ubicación caminable, cerca de cafés y restaurantes.'],
    lat: 20.6913,
    lng: -103.3906,
    agent: 'ag1',
    publishedAt: '2026-09-21'
  }), P({
    id: 'MX-1134',
    slug: 'casa-en-cumbres',
    title: 'Casa en Cumbres',
    type: 'Casa',
    city: 'Monterrey',
    state: 'Nuevo León',
    location: 'Monterrey, Nuevo León',
    zones: ['monterrey'],
    price: 5900000,
    beds: 3,
    baths: 2.5,
    area: 210,
    lot: 240,
    parking: 2,
    year: 2020,
    image: I.lomas,
    images: gallery(I.lomas, I.mty),
    amenities: ['Jardín', 'Seguridad', 'Estacionamiento', 'Pet friendly'],
    features: ['Privada con áreas verdes', 'Cocina abierta'],
    description: ['Casa en privada de Cumbres con áreas verdes y vigilancia. Distribución funcional para familias, con jardín trasero y cocina abierta.'],
    lat: 25.7288,
    lng: -100.3935,
    agent: 'ag2',
    publishedAt: '2026-06-02'
  })];
  const developments = [{
    slug: 'altura-polanco',
    name: 'Altura Polanco',
    city: 'Ciudad de México',
    state: 'CDMX',
    zone: 'cdmx',
    location: 'Polanco, Miguel Hidalgo',
    from: 9800000,
    units: 18,
    total: 64,
    progress: 72,
    delivery: 'Diciembre 2027',
    status: 'En construcción',
    image: I.cdmx,
    gallery: [I.cdmx, I.polanco, I.interior, I.hero],
    amenities: ['Roof garden', 'Gimnasio', 'Alberca', 'Seguridad', 'Elevador', 'Terraza'],
    tagline: 'Vivir a la altura de Polanco.',
    description: 'Torre residencial de 22 niveles sobre Ejército Nacional, con departamentos de uno a tres recámaras, roof garden con alberca y vistas abiertas a Chapultepec.',
    models: [{
      type: 'Studio',
      area: 68,
      beds: 1,
      price: 9800000,
      available: 4
    }, {
      type: 'Residencia A',
      area: 112,
      beds: 2,
      price: 14500000,
      available: 9
    }, {
      type: 'Residencia B',
      area: 156,
      beds: 3,
      price: 19900000,
      available: 5
    }, {
      type: 'Penthouse',
      area: 280,
      beds: 3,
      price: 38000000,
      available: 0
    }]
  }, {
    slug: 'torre-monterrey',
    name: 'Torre Monterrey',
    city: 'Monterrey',
    state: 'Nuevo León',
    zone: 'monterrey',
    location: 'Valle Oriente, San Pedro',
    from: 6200000,
    units: 31,
    total: 120,
    progress: 45,
    delivery: 'Junio 2028',
    status: 'Preventa',
    image: I.mty,
    gallery: [I.mty, I.lomas, I.polanco, I.interior],
    amenities: ['Alberca', 'Gimnasio', 'Seguridad', 'Elevador', 'Roof garden', 'Estacionamiento'],
    tagline: 'Una nueva línea en el perfil de Valle Oriente.',
    description: 'Proyecto de uso mixto con 120 residencias, lobby de doble altura y amenidades en el nivel 30 con vista a la Sierra Madre.',
    models: [{
      type: 'Loft',
      area: 74,
      beds: 1,
      price: 6200000,
      available: 12
    }, {
      type: 'Residencia',
      area: 128,
      beds: 2,
      price: 10400000,
      available: 14
    }, {
      type: 'Residencia Plus',
      area: 176,
      beds: 3,
      price: 14800000,
      available: 5
    }]
  }, {
    slug: 'marea-los-cabos',
    name: 'Maréa Los Cabos',
    city: 'Los Cabos',
    state: 'Baja California Sur',
    zone: 'los-cabos',
    location: 'Corredor turístico, Los Cabos',
    from: 12400000,
    units: 9,
    total: 42,
    progress: 88,
    delivery: 'Marzo 2027',
    status: 'Entrega inmediata',
    image: I.cabo,
    gallery: [I.cabo, I.hero, I.interior, I.valle],
    amenities: ['Alberca', 'Terraza', 'Gimnasio', 'Seguridad', 'Amueblado'],
    tagline: 'Frente al Mar de Cortés.',
    description: 'Residencias frente al mar con terrazas privadas, alberca infinita y programa de renta vacacional administrado.',
    models: [{
      type: 'Ocean 2',
      area: 145,
      beds: 2,
      price: 12400000,
      available: 4
    }, {
      type: 'Ocean 3',
      area: 198,
      beds: 3,
      price: 16900000,
      available: 4
    }, {
      type: 'Sky Villa',
      area: 320,
      beds: 4,
      price: 29500000,
      available: 1
    }]
  }, {
    slug: 'casa-nautica-cancun',
    name: 'Casa Náutica Cancún',
    city: 'Cancún',
    state: 'Quintana Roo',
    zone: 'cancun',
    location: 'Puerto Cancún',
    from: 7300000,
    units: 22,
    total: 58,
    progress: 30,
    delivery: 'Octubre 2028',
    status: 'Preventa',
    image: I.cun,
    gallery: [I.cun, I.cabo, I.interior, I.polanco],
    amenities: ['Alberca', 'Gimnasio', 'Roof garden', 'Seguridad', 'Elevador'],
    tagline: 'La marina como punto de partida.',
    description: 'Departamentos con vista a la marina y al mar Caribe, club de playa y muelle para residentes.',
    models: [{
      type: 'Marina 1',
      area: 82,
      beds: 1,
      price: 7300000,
      available: 8
    }, {
      type: 'Marina 2',
      area: 124,
      beds: 2,
      price: 10900000,
      available: 10
    }, {
      type: 'Marina 3',
      area: 168,
      beds: 3,
      price: 14600000,
      available: 4
    }]
  }, {
    slug: 'centro-merida',
    name: 'Centro Mérida',
    city: 'Mérida',
    state: 'Yucatán',
    zone: 'merida',
    location: 'Centro Histórico, Mérida',
    from: 4100000,
    units: 11,
    total: 24,
    progress: 60,
    delivery: 'Agosto 2027',
    status: 'En construcción',
    image: I.mid,
    gallery: [I.mid, I.interior, I.valle, I.hero],
    amenities: ['Alberca', 'Jardín', 'Terraza', 'Seguridad'],
    tagline: 'Arquitectura contemporánea en el corazón colonial.',
    description: 'Veinticuatro residencias alrededor de patios con alberca, integradas a una casona restaurada del siglo XIX.',
    models: [{
      type: 'Patio',
      area: 96,
      beds: 2,
      price: 4100000,
      available: 6
    }, {
      type: 'Casona',
      area: 148,
      beds: 3,
      price: 6300000,
      available: 5
    }]
  }];
  const locations = [{
    slug: 'monterrey',
    name: 'Monterrey',
    region: 'Nuevo León',
    image: I.mty
  }, {
    slug: 'guadalajara',
    name: 'Guadalajara',
    region: 'Jalisco',
    image: I.gdl
  }, {
    slug: 'cdmx',
    name: 'CDMX',
    region: 'Ciudad de México',
    image: I.cdmx
  }, {
    slug: 'cancun',
    name: 'Cancún',
    region: 'Quintana Roo',
    image: I.cun
  }, {
    slug: 'merida',
    name: 'Mérida',
    region: 'Yucatán',
    image: I.mid
  }];
  const locationOptions = [{
    value: 'cdmx',
    label: 'Ciudad de México'
  }, {
    value: 'monterrey',
    label: 'Monterrey'
  }, {
    value: 'guadalajara',
    label: 'Guadalajara'
  }, {
    value: 'cancun',
    label: 'Cancún'
  }, {
    value: 'merida',
    label: 'Mérida'
  }, {
    value: 'los-cabos',
    label: 'Los Cabos'
  }, {
    value: 'zapopan',
    label: 'Zapopan'
  }, {
    value: 'polanco',
    label: 'Polanco'
  }, {
    value: 'lomas',
    label: 'Lomas'
  }, {
    value: 'queretaro',
    label: 'Querétaro'
  }, {
    value: 'puebla',
    label: 'Puebla'
  }];
  const suggestions = [{
    value: 'polanco',
    label: 'Polanco',
    sub: 'Miguel Hidalgo, CDMX'
  }, {
    value: 'valle-real',
    label: 'Valle Real',
    sub: 'Zapopan, Jalisco'
  }, {
    value: 'lomas',
    label: 'Lomas',
    sub: 'Monterrey, Nuevo León'
  }, {
    value: 'cancun',
    label: 'Cancún',
    sub: 'Quintana Roo'
  }, {
    value: 'cdmx',
    label: 'Ciudad de México',
    sub: 'CDMX'
  }, {
    value: 'monterrey',
    label: 'Monterrey',
    sub: 'Nuevo León'
  }, {
    value: 'san-pedro',
    label: 'San Pedro Garza García',
    sub: 'Nuevo León'
  }, {
    value: 'guadalajara',
    label: 'Guadalajara',
    sub: 'Jalisco'
  }, {
    value: 'zapopan',
    label: 'Zapopan',
    sub: 'Jalisco'
  }, {
    value: 'condesa',
    label: 'Condesa',
    sub: 'Cuauhtémoc, CDMX'
  }, {
    value: 'santa-fe',
    label: 'Santa Fe',
    sub: 'Álvaro Obregón, CDMX'
  }, {
    value: 'merida',
    label: 'Mérida',
    sub: 'Yucatán'
  }, {
    value: 'los-cabos',
    label: 'Los Cabos',
    sub: 'Baja California Sur'
  }, {
    value: 'queretaro',
    label: 'Juriquilla',
    sub: 'Querétaro'
  }, {
    value: 'puebla',
    label: 'Angelópolis',
    sub: 'Puebla'
  }];
  const types = ['Casa', 'Departamento', 'Penthouse', 'Terreno', 'Oficina', 'Local', 'Desarrollo'];
  const priceOptions = [{
    value: '2000000',
    label: 'Hasta $2M'
  }, {
    value: '5000000',
    label: 'Hasta $5M'
  }, {
    value: '10000000',
    label: 'Hasta $10M'
  }, {
    value: '20000000',
    label: 'Hasta $20M'
  }, {
    value: '50000000',
    label: 'Hasta $50M'
  }, {
    value: '',
    label: 'Sin límite'
  }];
  const bedOptions = [{
    value: '',
    label: 'Cualquiera'
  }, {
    value: '1',
    label: '1+'
  }, {
    value: '2',
    label: '2+'
  }, {
    value: '3',
    label: '3+'
  }, {
    value: '4',
    label: '4+'
  }, {
    value: '5',
    label: '5+'
  }];
  const amenityList = ['Alberca', 'Terraza', 'Jardín', 'Seguridad', 'Elevador', 'Gimnasio', 'Roof garden', 'Estacionamiento', 'Amueblado', 'Pet friendly'];
  const amenityIcons = {
    'Alberca': 'Waves',
    'Jardín': 'Trees',
    'Terraza': 'Sun',
    'Seguridad': 'ShieldCheck',
    'Gimnasio': 'Dumbbell',
    'Elevador': 'ArrowUpDown',
    'Cocina equipada': 'CookingPot',
    'Estacionamiento': 'Car',
    'Roof garden': 'Flower2',
    'Bodega': 'Package',
    'Amueblado': 'Sofa',
    'Pet friendly': 'PawPrint'
  };
  const categories = [{
    type: 'Casa',
    label: 'Casas',
    icon: 'House'
  }, {
    type: 'Departamento',
    label: 'Departamentos',
    icon: 'Building2'
  }, {
    type: 'Terreno',
    label: 'Terrenos',
    icon: 'LandPlot'
  }, {
    type: 'Oficina',
    label: 'Oficinas',
    icon: 'Briefcase'
  }, {
    type: 'Desarrollo',
    label: 'Desarrollos',
    icon: 'Building'
  }, {
    type: 'Local',
    label: 'Locales',
    icon: 'Store'
  }];
  const services = {
    buyers: [{
      icon: 'Search',
      title: 'Búsqueda personalizada',
      text: 'Definimos contigo zona, presupuesto y prioridades, y filtramos el mercado para presentarte solo opciones que cumplen.'
    }, {
      icon: 'MessagesSquare',
      title: 'Asesoría inmobiliaria',
      text: 'Un asesor asignado te acompaña desde la primera visita hasta la firma ante notario.'
    }, {
      icon: 'TrendingUp',
      title: 'Análisis de inversión',
      text: 'Comparamos precio por m², plusvalía histórica de la zona y rendimiento estimado de renta.'
    }, {
      icon: 'CalendarCheck',
      title: 'Visitas',
      text: 'Coordinamos recorridos presenciales o por videollamada, agrupados para aprovechar tu tiempo.'
    }, {
      icon: 'Handshake',
      title: 'Negociación',
      text: 'Revisamos documentación y negociamos precio y condiciones con base en comparables reales.'
    }],
    owners: [{
      icon: 'Calculator',
      title: 'Valuación',
      text: 'Opinión de valor con comparables de la zona y recomendación de precio de salida.'
    }, {
      icon: 'Camera',
      title: 'Fotografía',
      text: 'Sesión de fotografía arquitectónica, video y recorrido virtual de la propiedad.'
    }, {
      icon: 'Megaphone',
      title: 'Marketing',
      text: 'Campaña digital segmentada por perfil de comprador y presentación editorial de la propiedad.'
    }, {
      icon: 'Globe',
      title: 'Publicación',
      text: 'Publicación en Mextas y en los principales portales, con seguimiento semanal de desempeño.'
    }, {
      icon: 'Users',
      title: 'Promoción',
      text: 'Difusión con nuestra red de compradores calificados y asesores aliados.'
    }, {
      icon: 'FileCheck',
      title: 'Gestión de venta',
      text: 'Coordinamos visitas, ofertas, due diligence y cierre notarial.'
    }]
  };
  const posts = [{
    slug: 'como-elegir-tu-primera-propiedad',
    title: 'Cómo elegir tu primera propiedad',
    category: 'Compra',
    read: '6 min',
    date: '12 sep 2026',
    image: I.valle,
    excerpt: 'Ubicación, presupuesto total y proyección a cinco años: los tres filtros que conviene aplicar antes de visitar.',
    body: ['Antes de comparar acabados, define el radio de ubicación que realmente funciona para tu día a día: trayectos, escuelas y servicios cercanos pesan más que un metro cuadrado adicional.', 'Calcula el presupuesto total, no solo el precio: gastos notariales, impuestos de adquisición y mobiliario pueden sumar entre 6% y 9% del valor.', 'Por último, piensa a cinco años. Una recámara extra o un estudio pueden evitar una segunda mudanza.']
  }, {
    slug: 'que-revisar-antes-de-comprar-una-casa',
    title: 'Qué revisar antes de comprar una casa',
    category: 'Compra',
    read: '8 min',
    date: '2 sep 2026',
    image: I.lomas,
    excerpt: 'Escrituras, libertad de gravamen, uso de suelo y estado de instalaciones: una lista práctica para tu visita.',
    body: ['Solicita copia de escrituras y un certificado de libertad de gravamen reciente. Verifica que el vendedor sea el propietario registrado.', 'Revisa predial y agua al corriente, y confirma que el uso de suelo coincida con lo que planeas.', 'En la visita, pon atención a humedad, instalaciones eléctricas y presión de agua. Un peritaje técnico es una inversión menor frente al valor de la propiedad.']
  }, {
    slug: 'comprar-o-rentar',
    title: '¿Comprar o rentar?',
    category: 'Finanzas',
    read: '5 min',
    date: '26 ago 2026',
    image: I.interior,
    excerpt: 'Una comparación honesta entre pago mensual, costo de oportunidad y flexibilidad.',
    body: ['Rentar ofrece flexibilidad y menor desembolso inicial; comprar construye patrimonio y protege contra aumentos de renta.', 'Compara la mensualidad hipotecaria con la renta equivalente y considera cuánto tiempo planeas quedarte: por debajo de cinco años, rentar suele ser más eficiente.']
  }, {
    slug: 'como-calcular-una-inversion-inmobiliaria',
    title: 'Cómo calcular una inversión inmobiliaria',
    category: 'Inversión',
    read: '7 min',
    date: '18 ago 2026',
    image: I.cabo,
    excerpt: 'Rendimiento bruto, neto y plusvalía: fórmulas simples para comparar oportunidades.',
    body: ['El rendimiento bruto es la renta anual dividida entre el precio de compra. El neto descuenta mantenimiento, predial, administración y periodos de vacancia.', 'Suma la plusvalía estimada de la zona para obtener el retorno total, y compáralo con alternativas de riesgo similar.']
  }];
  const fmt = n => '$' + Math.round(n).toLocaleString('en-US');
  const fmtPrice = p => fmt(p.price) + ' ' + (p.currency || 'MXN') + (p.operation === 'renta' ? ' / mes' : '');
  const fmtShort = n => n >= 1e6 ? '$' + (n / 1e6).toLocaleString('en-US', {
    maximumFractionDigits: 1
  }) + 'M' : fmt(n);
  window.MXData = {
    IMG: I,
    agents,
    properties,
    developments,
    locations,
    locationOptions,
    suggestions,
    types,
    priceOptions,
    bedOptions,
    amenityList,
    amenityIcons,
    categories,
    services,
    posts,
    fmt,
    fmtPrice,
    fmtShort
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/detail.jsx
try { (() => {
(() => {
  const {
    useState,
    useEffect,
    useRef
  } = React;
  const MX = window.MX;
  const ageLabel = y => !y ? 'No aplica' : 2026 - y <= 0 ? 'A estrenar' : 2026 - y + (2026 - y === 1 ? ' año' : ' años');
  function Gallery({
    p,
    onOpen
  }) {
    const imgs = p.images;
    const [mi, setMi] = useState(0);
    const shown = imgs.length >= 5 ? imgs.slice(0, 5) : imgs.slice(0, 3);
    return /*#__PURE__*/React.createElement("div", {
      className: "k-gal-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: 'k-gal' + (shown.length === 3 ? ' k-gal--3' : '')
    }, shown.map((src, i) => /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      onClick: () => onOpen(i),
      "aria-label": 'Abrir galería, imagen ' + (i + 1) + ' de ' + imgs.length
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: i === 0 ? p.title : '',
      loading: i < 3 ? 'eager' : 'lazy'
    })))), /*#__PURE__*/React.createElement("div", {
      className: "k-gal-m",
      onScroll: e => {
        const el = e.currentTarget;
        setMi(Math.round(el.scrollLeft / el.clientWidth));
      }
    }, imgs.map((src, i) => /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      onClick: () => onOpen(i),
      "aria-label": 'Abrir imagen ' + (i + 1)
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: i === 0 ? p.title : '',
      loading: i < 2 ? 'eager' : 'lazy'
    })))), /*#__PURE__*/React.createElement("span", {
      className: "k-gal__count"
    }, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "Images",
      size: 14
    }), mi + 1, " / ", imgs.length), /*#__PURE__*/React.createElement(MX.Button, {
      className: "k-gal__all",
      size: "sm",
      variant: "outline-inverse",
      iconLeft: "Expand",
      onClick: () => onOpen(0),
      style: {
        background: 'rgba(13,13,12,.55)'
      }
    }, "Ver las ", imgs.length, " fotos"));
  }
  function Lightbox({
    images,
    index,
    onIndex,
    title
  }) {
    const open = index >= 0;
    const [i, setI] = useState(0);
    const tx = useRef(null);
    useEffect(() => {
      if (open) setI(index);
    }, [index]);
    const go = d => setI(x => (x + d + images.length) % images.length);
    useEffect(() => {
      if (!open) return;
      const h = e => {
        if (e.key === 'ArrowRight') go(1);
        if (e.key === 'ArrowLeft') go(-1);
      };
      window.addEventListener('keydown', h);
      return () => window.removeEventListener('keydown', h);
    }, [open]);
    return /*#__PURE__*/React.createElement(MX.Dialog, {
      open: open,
      onClose: () => onIndex(-1),
      placement: "full",
      tone: "dark",
      hideClose: true
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-lb"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-lb__top"
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-lb__title"
    }, title), /*#__PURE__*/React.createElement("span", {
      className: "k-lb__count",
      "aria-live": "polite"
    }, i + 1, " / ", images.length), /*#__PURE__*/React.createElement(MX.IconButton, {
      icon: "X",
      label: "Cerrar galer\xEDa",
      variant: "ghost",
      onClick: () => onIndex(-1)
    })), /*#__PURE__*/React.createElement("div", {
      className: "k-lb__stage",
      onTouchStart: e => {
        tx.current = e.touches[0].clientX;
      },
      onTouchEnd: e => {
        if (tx.current == null) return;
        const dx = e.changedTouches[0].clientX - tx.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        tx.current = null;
      }
    }, /*#__PURE__*/React.createElement("img", {
      key: i,
      src: images[i],
      alt: title + ' — imagen ' + (i + 1) + ' de ' + images.length
    }), /*#__PURE__*/React.createElement(MX.IconButton, {
      className: "k-lb__nav k-lb__prev",
      icon: "ChevronLeft",
      label: "Imagen anterior",
      variant: "glass",
      size: "lg",
      onClick: () => go(-1)
    }), /*#__PURE__*/React.createElement(MX.IconButton, {
      className: "k-lb__nav k-lb__next",
      icon: "ChevronRight",
      label: "Imagen siguiente",
      variant: "glass",
      size: "lg",
      onClick: () => go(1)
    })), /*#__PURE__*/React.createElement("div", {
      className: "k-lb__thumbs"
    }, images.map((s, j) => /*#__PURE__*/React.createElement("button", {
      key: j,
      type: "button",
      className: j === i ? 'is-on' : '',
      "aria-label": 'Ver imagen ' + (j + 1),
      "aria-current": j === i || undefined,
      onClick: () => setI(j)
    }, /*#__PURE__*/React.createElement("img", {
      src: s,
      alt: "",
      loading: "lazy"
    }))))));
  }
  function MortgageCalculator({
    p
  }) {
    const D = window.MXData;
    const {
      openModal
    } = useApp();
    const [price, setPrice] = useState(p.price);
    const [down, setDown] = useState(20);
    const [years, setYears] = useState('20');
    const [rate, setRate] = useState(10.5);
    const dp = price * down / 100;
    const loan = Math.max(0, price - dp);
    const n = Number(years) * 12;
    const r = rate / 100 / 12;
    const monthly = loan > 0 ? loan * r / (1 - Math.pow(1 + r, -n)) : 0;
    const total = monthly * n + dp;
    return /*#__PURE__*/React.createElement("div", {
      className: "k-mort"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-mort__in"
    }, /*#__PURE__*/React.createElement(MX.Input, {
      label: "Precio de propiedad",
      iconLeft: "DollarSign",
      inputMode: "numeric",
      hint: "MXN",
      value: price ? price.toLocaleString('en-US') : '',
      onChange: e => setPrice(Number(e.target.value.replace(/\D/g, '')) || 0)
    }), /*#__PURE__*/React.createElement(MX.Slider, {
      label: "Enganche",
      min: 10,
      max: 60,
      value: down,
      onChange: setDown,
      format: v => v + '%'
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "k-label"
    }, "Plazo"), /*#__PURE__*/React.createElement(MX.Tabs, {
      variant: "segmented",
      fullWidth: true,
      label: "Plazo",
      value: years,
      onChange: setYears,
      items: ['5', '10', '15', '20'].map(y => ({
        value: y,
        label: y + ' años'
      }))
    })), /*#__PURE__*/React.createElement(MX.Slider, {
      label: "Tasa estimada anual",
      min: 8,
      max: 14,
      step: 0.1,
      value: rate,
      onChange: setRate,
      format: v => v.toFixed(1) + '%'
    })), /*#__PURE__*/React.createElement("div", {
      className: "k-mort__out",
      "aria-live": "polite"
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-mort__lbl"
    }, "Pago mensual estimado"), /*#__PURE__*/React.createElement("span", {
      className: "k-mort__big"
    }, D.fmt(monthly), /*#__PURE__*/React.createElement("small", null, " MXN")), /*#__PURE__*/React.createElement("div", {
      className: "k-mort__rows"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Enganche (", down, "%)"), /*#__PURE__*/React.createElement("b", null, D.fmt(dp))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Monto financiado"), /*#__PURE__*/React.createElement("b", null, D.fmt(loan))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Total estimado a ", years, " a\xF1os"), /*#__PURE__*/React.createElement("b", null, D.fmt(total)))), /*#__PURE__*/React.createElement("p", {
      className: "k-disclaimer"
    }, "Simulaci\xF3n informativa. Las condiciones reales dependen de la instituci\xF3n financiera."), /*#__PURE__*/React.createElement(MX.Button, {
      iconRight: "ArrowRight",
      onClick: () => openModal('contact', {
        p,
        channel: 'credit'
      })
    }, "Hablar con un asesor de cr\xE9dito")));
  }
  function AgentPanel({
    p,
    agent
  }) {
    const {
      openModal
    } = useApp();
    return /*#__PURE__*/React.createElement("div", {
      className: "k-agent"
    }, /*#__PURE__*/React.createElement("p", {
      className: "k-eyebrow"
    }, "Asesor Mextas"), /*#__PURE__*/React.createElement("h3", null, "\xBFTe interesa esta propiedad?"), /*#__PURE__*/React.createElement("p", {
      className: "k-agent__sub"
    }, "Habla con un asesor Mextas."), /*#__PURE__*/React.createElement("div", {
      className: "k-agent__btns"
    }, /*#__PURE__*/React.createElement(MX.Button, {
      variant: "dark",
      fullWidth: true,
      iconLeft: "Mail",
      onClick: () => openModal('contact', {
        p,
        channel: 'info'
      })
    }, "Solicitar informaci\xF3n"), /*#__PURE__*/React.createElement(MX.Button, {
      fullWidth: true,
      iconLeft: "CalendarDays",
      onClick: () => openModal('visit', {
        p
      })
    }, "Agendar visita"), /*#__PURE__*/React.createElement("div", {
      className: "k-agent__row"
    }, /*#__PURE__*/React.createElement(MX.Button, {
      variant: "outline",
      size: "sm",
      iconLeft: "MessageCircle",
      onClick: () => openModal('contact', {
        p,
        channel: 'whatsapp'
      })
    }, "WhatsApp"), /*#__PURE__*/React.createElement(MX.Button, {
      variant: "outline",
      size: "sm",
      iconLeft: "Phone",
      onClick: () => openModal('contact', {
        p,
        channel: 'call'
      })
    }, "Llamar"))), /*#__PURE__*/React.createElement("div", {
      className: "k-agent__who"
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-avatar"
    }, agent.initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, agent.name), /*#__PURE__*/React.createElement("small", null, agent.role))), /*#__PURE__*/React.createElement("p", {
      className: "k-agent__note"
    }, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "Clock",
      size: 14
    }), "Respuesta promedio: menos de 2 horas en horario laboral."));
  }
  function PropertyDetail({
    slug
  }) {
    const app = useApp();
    const D = window.MXData;
    const [lb, setLb] = useState(-1);
    const p = app.bySlug[slug];
    if (!p) return /*#__PURE__*/React.createElement(NotFound, {
      what: "propiedad"
    });
    const agent = D.agents.find(a => a.id === p.agent) || D.agents[0];
    const fav = app.isFav(p);
    const cmp = app.isCmp(p);
    const share = async () => {
      try {
        await navigator.clipboard.writeText(location.href);
        app.toast({
          tone: 'success',
          title: 'Enlace copiado',
          message: 'Compártelo con quien quieras.'
        });
      } catch (e) {
        app.toast({
          icon: 'Link',
          title: 'Copia este enlace',
          message: location.href
        });
      }
    };
    const similar = D.properties.filter(x => x.slug !== p.slug && x.operation === p.operation && (x.city === p.city || x.type === p.type)).slice(0, 3);
    const feats = [['Tipo', p.type], ['Operación', p.operation === 'renta' ? 'Renta' : 'Venta'], ['Superficie construida', p.area + ' m²'], p.lot ? ['Terreno', p.lot + ' m²'] : null, p.beds ? ['Recámaras', p.beds] : null, p.baths ? ['Baños', p.baths] : null, ['Estacionamientos', p.parking || '—'], ['Antigüedad', ageLabel(p.year)], ['Estatus', p.status], ['Clave', p.id]].filter(Boolean);
    return /*#__PURE__*/React.createElement("div", {
      className: "k-detail k-has-mbar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, /*#__PURE__*/React.createElement(MX.Breadcrumbs, {
      items: [{
        label: 'Inicio',
        href: '#/'
      }, {
        label: 'Propiedades',
        href: '#/propiedades'
      }, {
        label: p.city,
        href: '#/propiedades?ubicacion=' + p.zones[0]
      }, {
        label: p.title
      }]
    }), /*#__PURE__*/React.createElement(Gallery, {
      p: p,
      onOpen: setLb
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-dhead"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "k-dbadges"
    }, p.badge ? /*#__PURE__*/React.createElement(MX.Badge, null, p.badge) : null, /*#__PURE__*/React.createElement(MX.Badge, {
      tone: "outline"
    }, p.operation === 'renta' ? 'En renta' : 'En venta'), /*#__PURE__*/React.createElement("span", {
      className: "k-dref"
    }, p.id)), /*#__PURE__*/React.createElement("h1", null, p.title), /*#__PURE__*/React.createElement("p", {
      className: "k-dloc"
    }, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "MapPin",
      size: 15
    }), p.location)), /*#__PURE__*/React.createElement("div", {
      className: "k-dhead__side"
    }, /*#__PURE__*/React.createElement("p", {
      className: "k-dprice"
    }, D.fmtPrice(p), /*#__PURE__*/React.createElement("small", null, p.operation === 'venta' ? D.fmt(p.price / p.area) + ' MXN por m²' : 'Contrato mínimo 12 meses')), /*#__PURE__*/React.createElement("div", {
      className: "k-dactions"
    }, /*#__PURE__*/React.createElement(MX.IconButton, {
      icon: "Heart",
      label: fav ? 'Quitar de favoritos' : 'Guardar en favoritos',
      active: fav,
      onClick: () => app.toggleFav(p)
    }), /*#__PURE__*/React.createElement(MX.IconButton, {
      icon: "Share2",
      label: "Compartir",
      onClick: share
    }), /*#__PURE__*/React.createElement(MX.Button, {
      size: "sm",
      variant: cmp ? 'dark' : 'outline',
      iconLeft: cmp ? 'Check' : 'Scale',
      onClick: () => app.toggleCompare(p)
    }, cmp ? 'En comparación' : 'Comparar')))), /*#__PURE__*/React.createElement(MX.PropertySpecs, {
      variant: "blocks",
      beds: p.beds || undefined,
      baths: p.baths || undefined,
      area: p.area,
      parking: p.parking || undefined
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-dlayout"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      className: "k-dblock"
    }, /*#__PURE__*/React.createElement("h2", null, "Descripci\xF3n"), p.description.map((t, i) => /*#__PURE__*/React.createElement("p", {
      key: i,
      className: "k-prose"
    }, t))), /*#__PURE__*/React.createElement("section", {
      className: "k-dblock"
    }, /*#__PURE__*/React.createElement("h2", null, "Caracter\xEDsticas"), /*#__PURE__*/React.createElement("ul", {
      className: "k-features"
    }, feats.map(([k, v]) => /*#__PURE__*/React.createElement("li", {
      key: k
    }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("b", null, v)))), p.features.length ? /*#__PURE__*/React.createElement("ul", {
      className: "k-highlights"
    }, p.features.map(x => /*#__PURE__*/React.createElement("li", {
      key: x
    }, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "Check",
      size: 16
    }), x))) : null), /*#__PURE__*/React.createElement("section", {
      className: "k-dblock"
    }, /*#__PURE__*/React.createElement("h2", null, "Amenidades"), /*#__PURE__*/React.createElement("div", {
      className: "k-amen-grid"
    }, p.amenities.map(a => /*#__PURE__*/React.createElement(MX.AmenityItem, {
      key: a,
      icon: D.amenityIcons[a] || 'Check',
      label: a
    })))), /*#__PURE__*/React.createElement("section", {
      className: "k-dblock"
    }, /*#__PURE__*/React.createElement("h2", null, "Ubicaci\xF3n"), /*#__PURE__*/React.createElement(MockMap, {
      p: p
    }), /*#__PURE__*/React.createElement("p", {
      className: "k-fine",
      style: {
        marginTop: 12
      }
    }, "La ubicaci\xF3n exacta se comparte al agendar una visita.")), /*#__PURE__*/React.createElement("section", {
      className: "k-dblock"
    }, /*#__PURE__*/React.createElement("h2", null, "Galer\xEDa"), /*#__PURE__*/React.createElement("div", {
      className: "k-galgrid"
    }, p.images.map((src, i) => /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      onClick: () => setLb(i),
      "aria-label": 'Ver imagen ' + (i + 1)
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "",
      loading: "lazy"
    }))))), p.operation === 'venta' ? /*#__PURE__*/React.createElement("section", {
      className: "k-dblock",
      id: "simulador"
    }, /*#__PURE__*/React.createElement("p", {
      className: "k-eyebrow"
    }, "Informaci\xF3n financiera"), /*#__PURE__*/React.createElement("h2", null, "Calcula tu inversi\xF3n"), /*#__PURE__*/React.createElement(MortgageCalculator, {
      p: p
    })) : null), /*#__PURE__*/React.createElement("aside", {
      "aria-label": "Contactar asesor"
    }, /*#__PURE__*/React.createElement(AgentPanel, {
      p: p,
      agent: agent
    })))), similar.length ? /*#__PURE__*/React.createElement("section", {
      className: "k-section k-white k-bt"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, /*#__PURE__*/React.createElement(MX.SectionHeader, {
      eyebrow: "Tambi\xE9n te puede interesar",
      title: "Propiedades similares",
      action: /*#__PURE__*/React.createElement(MX.Button, {
        variant: "outline",
        size: "sm",
        iconRight: "ArrowRight",
        href: '#/propiedades?ubicacion=' + p.zones[0]
      }, "Ver m\xE1s en ", p.city)
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-grid k-grid--3 k-mt"
    }, similar.map(x => /*#__PURE__*/React.createElement(PCard, {
      key: x.id,
      p: x
    }))))) : null, /*#__PURE__*/React.createElement("div", {
      className: "k-mbar"
    }, /*#__PURE__*/React.createElement(MX.Button, {
      variant: "outline",
      iconLeft: "CalendarDays",
      onClick: () => app.openModal('visit', {
        p
      })
    }, "Agendar visita"), /*#__PURE__*/React.createElement(MX.Button, {
      variant: "dark",
      onClick: () => app.openModal('contact', {
        p,
        channel: 'info'
      })
    }, "Solicitar info")), /*#__PURE__*/React.createElement(Lightbox, {
      images: p.images,
      index: lb,
      onIndex: setLb,
      title: p.title
    }));
  }
  Object.assign(window, {
    PropertyDetail,
    Lightbox,
    MortgageCalculator,
    ageLabel
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/detail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ds-loader.js
try { (() => {
/* Exposes Mextas DS components as window.MX (from the compiled bundle; dev fallback transpiles sources). */
(function () {
  var NS = 'MextasDesignSystem_8aabb9';
  window.MX = window.MX || {};
  if (window[NS] && window[NS].PropertyCard) {
    Object.assign(window.MX, window[NS]);
    window.MX_READY = Promise.resolve();
    return;
  }
  var BASE = '../../components/';
  var FILES = ['core/Icon.jsx', 'core/Logo.jsx', 'core/Button.jsx', 'core/IconButton.jsx', 'core/Badge.jsx', 'core/Chip.jsx', 'forms/Field.jsx', 'forms/Input.jsx', 'forms/Select.jsx', 'forms/Checkbox.jsx', 'forms/Radio.jsx', 'forms/Switch.jsx', 'forms/Slider.jsx', 'navigation/Tabs.jsx', 'navigation/Breadcrumbs.jsx', 'feedback/Dialog.jsx', 'feedback/Toast.jsx', 'feedback/Tooltip.jsx', 'feedback/Skeleton.jsx', 'feedback/EmptyState.jsx', 'realestate/format.js', 'realestate/PropertySpecs.jsx', 'realestate/PropertyCard.jsx', 'realestate/LocationCard.jsx', 'realestate/CategoryTile.jsx', 'realestate/StatBlock.jsx', 'realestate/TrustItem.jsx', 'realestate/SectionHeader.jsx', 'realestate/AmenityItem.jsx', 'realestate/CompareTray.jsx'];
  var NAMES = 'Icon,Logo,Button,IconButton,Badge,Chip,Field,Input,Select,Checkbox,Radio,Switch,Slider,Tabs,Breadcrumbs,Dialog,Toast,ToastStack,Tooltip,Skeleton,EmptyState,PropertySpecs,PropertyCard,LocationCard,CategoryTile,StatBlock,TrustItem,SectionHeader,AmenityItem,CompareTray,formatMXN';
  window.MX_READY = Promise.all(FILES.map(function (f) {
    return fetch(BASE + f).then(function (r) {
      return r.text();
    });
  })).then(function (srcs) {
    var code = 'var {useState,useEffect,useRef,useId}=React;\n' + srcs.map(function (s) {
      return s.replace(/^import[^\n]*\n/gm, '').replace(/^export\s+/gm, '');
    }).join('\n') + '\nObject.assign(window.MX,{' + NAMES + '});';
    (0, eval)(Babel.transform('(function(){' + code + '})();', {
      presets: ['react']
    }).code);
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ds-loader.js", error: String((e && e.message) || e) }); }

// ui_kits/website/home.jsx
try { (() => {
(() => {
  const MX = window.MX;
  function Home() {
    const {
      openModal
    } = useApp();
    const D = window.MXData;
    const featured = D.properties.filter(p => p.badge).slice(0, 4);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
      className: "k-hero",
      "aria-label": "Presentaci\xF3n"
    }, /*#__PURE__*/React.createElement("img", {
      className: "k-hero__img",
      src: D.IMG.hero,
      alt: "Residencia contempor\xE1nea de concreto y madera iluminada al anochecer",
      fetchpriority: "high"
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-hero__shade"
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide k-hero__content"
    }, /*#__PURE__*/React.createElement("p", {
      className: "k-eyebrow k-fadeup"
    }, "Espacios que inspiran"), /*#__PURE__*/React.createElement("h1", {
      className: "k-fadeup",
      style: {
        animationDelay: '120ms'
      }
    }, "Encuentra el lugar", /*#__PURE__*/React.createElement("br", null), "donde comienzan", /*#__PURE__*/React.createElement("br", null), "tus ", /*#__PURE__*/React.createElement("em", null, "mejores historias.")), /*#__PURE__*/React.createElement("p", {
      className: "k-hero__lead k-fadeup",
      style: {
        animationDelay: '240ms'
      }
    }, "Propiedades seleccionadas en las mejores ubicaciones. Asesor\xEDa personalizada para ayudarte a encontrar tu pr\xF3ximo hogar o inversi\xF3n."), /*#__PURE__*/React.createElement("div", {
      className: "k-hero__ctas k-fadeup",
      style: {
        animationDelay: '360ms'
      }
    }, /*#__PURE__*/React.createElement(MX.Button, {
      size: "lg",
      iconRight: "ArrowRight",
      href: "#/propiedades"
    }, "Ver propiedades"), /*#__PURE__*/React.createElement(MX.Button, {
      size: "lg",
      variant: "outline-inverse",
      href: "#/desarrollos"
    }, "Explorar desarrollos")), /*#__PURE__*/React.createElement("div", {
      className: "k-trust k-fadeup",
      style: {
        animationDelay: '480ms'
      }
    }, window.MX_TRUST.map(([i, t, s]) => /*#__PURE__*/React.createElement(MX.TrustItem, {
      key: t,
      icon: i,
      title: t,
      subtitle: s
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide k-search-wrap"
    }, /*#__PURE__*/React.createElement(PropertySearch, null)), /*#__PURE__*/React.createElement("section", {
      className: "k-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(MX.SectionHeader, {
      eyebrow: "Propiedades destacadas",
      title: "Descubre nuestras propiedades exclusivas",
      action: /*#__PURE__*/React.createElement(MX.Button, {
        variant: "outline",
        size: "sm",
        iconRight: "ArrowRight",
        href: "#/propiedades"
      }, "Ver todas")
    })), /*#__PURE__*/React.createElement("div", {
      className: "k-grid k-grid--4 k-mt"
    }, featured.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: p.id,
      delay: i * 90
    }, /*#__PURE__*/React.createElement(PCard, {
      p: p
    })))))), /*#__PURE__*/React.createElement("section", {
      className: "k-section k-white k-bt"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(MX.SectionHeader, {
      eyebrow: "Explora por categor\xEDa",
      title: "Encuentra el espacio que buscas"
    })), /*#__PURE__*/React.createElement(Reveal, {
      className: "k-cats k-mt"
    }, D.categories.map(c => {
      const dev = c.type === 'Desarrollo';
      const n = dev ? D.developments.length : D.properties.filter(p => p.type === c.type).length;
      return /*#__PURE__*/React.createElement(MX.CategoryTile, {
        key: c.type,
        icon: c.icon,
        label: c.label,
        count: n,
        unit: dev ? 'proyectos' : n === 1 ? 'propiedad' : 'propiedades',
        href: dev ? '#/desarrollos' : '#/propiedades?tipo=' + c.type
      });
    })), /*#__PURE__*/React.createElement("div", {
      className: "k-sub"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(MX.SectionHeader, {
      eyebrow: "Ubicaciones",
      title: "Encuentra propiedades en las mejores zonas",
      action: /*#__PURE__*/React.createElement(MX.Button, {
        variant: "outline",
        size: "sm",
        iconRight: "ArrowRight",
        href: "#/propiedades"
      }, "Todas las zonas")
    })), /*#__PURE__*/React.createElement(Reveal, {
      className: "k-locs k-mt"
    }, D.locations.map(l => /*#__PURE__*/React.createElement(MX.LocationCard, {
      key: l.slug,
      name: l.name,
      region: l.region,
      image: l.image,
      aspect: "4 / 5",
      count: D.properties.filter(p => p.zones.includes(l.slug)).length,
      href: '#/propiedades?ubicacion=' + l.slug
    })))))), /*#__PURE__*/React.createElement("section", {
      className: "k-section k-dark"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide k-why"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
      className: "k-eyebrow"
    }, "Por qu\xE9 elegir Mextas"), /*#__PURE__*/React.createElement("h2", null, "M\xE1s que propiedades,", /*#__PURE__*/React.createElement("br", null), "creamos ", /*#__PURE__*/React.createElement("em", null, "oportunidades.")), /*#__PURE__*/React.createElement("p", {
      className: "k-why__lead"
    }, "Seleccionamos propiedades y desarrollos con criterios de ubicaci\xF3n, arquitectura y potencial de inversi\xF3n, y acompa\xF1amos cada operaci\xF3n de principio a fin."), /*#__PURE__*/React.createElement(MX.Button, {
      variant: "outline-inverse",
      iconRight: "ArrowRight",
      href: "#/nosotros"
    }, "Conoce Mextas")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 150
    }, /*#__PURE__*/React.createElement(StatsRow, null), /*#__PURE__*/React.createElement("p", {
      className: "k-demo-note"
    }, "Cifras demostrativas para este prototipo.")))), /*#__PURE__*/React.createElement("section", {
      className: "k-sell",
      "aria-label": "Vende tu propiedad"
    }, /*#__PURE__*/React.createElement("img", {
      src: D.IMG.interior,
      alt: "",
      loading: "lazy"
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-sell__shade"
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide k-sell__in"
    }, /*#__PURE__*/React.createElement(Reveal, {
      className: "k-sell__box"
    }, /*#__PURE__*/React.createElement("p", {
      className: "k-eyebrow"
    }, "Propietarios"), /*#__PURE__*/React.createElement("h2", null, "\xBFBuscas vender", /*#__PURE__*/React.createElement("br", null), "tu propiedad?"), /*#__PURE__*/React.createElement("p", null, "Conoce el valor de tu propiedad", /*#__PURE__*/React.createElement("br", null), "y llega a m\xE1s compradores."), /*#__PURE__*/React.createElement("div", {
      className: "k-hero__ctas"
    }, /*#__PURE__*/React.createElement(MX.Button, {
      size: "lg",
      iconRight: "ArrowRight",
      onClick: () => openModal('seller')
    }, "Quiero vender"), /*#__PURE__*/React.createElement(MX.Button, {
      size: "lg",
      variant: "outline-inverse",
      onClick: () => openModal('seller', {
        valuation: true
      })
    }, "Solicitar valuaci\xF3n"))))), /*#__PURE__*/React.createElement("section", {
      className: "k-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(MX.SectionHeader, {
      eyebrow: "Gu\xEDas Mextas",
      title: "Consejos para tomar mejores decisiones inmobiliarias",
      action: /*#__PURE__*/React.createElement(MX.Button, {
        variant: "outline",
        size: "sm",
        iconRight: "ArrowRight",
        href: "#/blog"
      }, "Ir al blog")
    })), /*#__PURE__*/React.createElement("div", {
      className: "k-grid k-grid--4 k-mt"
    }, D.posts.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: p.slug,
      delay: i * 90
    }, /*#__PURE__*/React.createElement(PostCard, {
      post: p
    })))))));
  }
  const SORTS = [{
    value: 'rel',
    label: 'Relevancia'
  }, {
    value: 'asc',
    label: 'Precio menor'
  }, {
    value: 'desc',
    label: 'Precio mayor'
  }, {
    value: 'new',
    label: 'Más recientes'
  }, {
    value: 'area',
    label: 'Superficie'
  }];
  const EMPTY_F = {
    op: '',
    ubicacion: '',
    tipo: '',
    precio: '',
    pmin: '',
    pmax: '',
    rec: '',
    banos: '',
    mmin: '',
    mmax: '',
    amen: [],
    q: ''
  };
  function Listings() {
    const {
      route,
      navigate
    } = useApp();
    const D = window.MXData;
    const key = route.query.toString();
    const f = readFilters(route.query);
    const set = patch => navigate('/propiedades' + filtersToQuery({
      ...f,
      ...patch
    }), {
      replace: true
    });
    const results = React.useMemo(() => applyFilters(D.properties, f), [key]);
    const [loading, setLoading] = React.useState(true);
    const [adv, setAdv] = React.useState(false);
    const [q, setQ] = React.useState(f.q);
    const isMobile = useMedia('(max-width: 1100px)');
    const listMode = f.view === 'list' && !useMedia('(max-width: 640px)');
    React.useEffect(() => {
      setLoading(true);
      const t = setTimeout(() => setLoading(false), 450);
      return () => clearTimeout(t);
    }, [key]);
    React.useEffect(() => {
      setQ(f.q);
    }, [f.q]);
    React.useEffect(() => {
      if (q === f.q) return;
      const t = setTimeout(() => set({
        q
      }), 380);
      return () => clearTimeout(t);
    }, [q]);
    const chips = [];
    if (f.op) chips.push([f.op === 'renta' ? 'En renta' : 'En venta', {
      op: ''
    }]);
    if (f.ubicacion) chips.push([locLabel(f.ubicacion), {
      ubicacion: ''
    }]);
    if (f.tipo) chips.push([f.tipo, {
      tipo: ''
    }]);
    if (f.precio) chips.push(['Hasta ' + D.fmtShort(+f.precio), {
      precio: ''
    }]);
    if (f.pmin) chips.push(['Desde ' + D.fmtShort(+f.pmin), {
      pmin: ''
    }]);
    if (f.pmax) chips.push(['Máx. ' + D.fmtShort(+f.pmax), {
      pmax: ''
    }]);
    if (f.rec) chips.push([f.rec + '+ recámaras', {
      rec: ''
    }]);
    if (f.banos) chips.push([f.banos + '+ baños', {
      banos: ''
    }]);
    if (f.mmin) chips.push(['Desde ' + f.mmin + ' m²', {
      mmin: ''
    }]);
    if (f.mmax) chips.push(['Hasta ' + f.mmax + ' m²', {
      mmax: ''
    }]);
    f.amen.forEach(a => chips.push([a, {
      amen: f.amen.filter(x => x !== a)
    }]));
    if (f.q) chips.push(['“' + f.q + '”', {
      q: ''
    }]);
    const advCount = ['pmin', 'pmax', 'banos', 'mmin', 'mmax'].filter(k => f[k]).length + f.amen.length;
    const clearAll = () => {
      setQ('');
      navigate('/propiedades' + filtersToQuery({
        ...EMPTY_F,
        sort: f.sort,
        view: f.view
      }), {
        replace: true
      });
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Cat\xE1logo Mextas",
      title: "Propiedades",
      text: "Encuentra un espacio que se adapte a tu estilo de vida.",
      crumbs: [{
        label: 'Inicio',
        href: '#/'
      }, {
        label: 'Propiedades'
      }]
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-toolbar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-filters"
    }, /*#__PURE__*/React.createElement("form", {
      className: "k-qsearch",
      role: "search",
      onSubmit: e => {
        e.preventDefault();
        set({
          q
        });
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-input mx-input--sm"
    }, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "Search",
      size: 16,
      className: "mx-input__icon"
    }), /*#__PURE__*/React.createElement("input", {
      "aria-label": "Buscar por nombre, zona o ciudad",
      placeholder: "Buscar por nombre, zona o ciudad",
      value: q,
      onChange: e => setQ(e.target.value)
    }), q ? /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "k-clearx",
      "aria-label": "Borrar b\xFAsqueda",
      onClick: () => {
        setQ('');
        set({
          q: ''
        });
      }
    }, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "X",
      size: 14
    })) : null)), /*#__PURE__*/React.createElement("div", {
      className: "k-f-desk"
    }, /*#__PURE__*/React.createElement(MX.Select, {
      size: "sm",
      value: f.op,
      onChange: v => set({
        op: v
      }),
      options: [{
        value: '',
        label: 'Venta y renta'
      }, {
        value: 'venta',
        label: 'Venta'
      }, {
        value: 'renta',
        label: 'Renta'
      }]
    })), /*#__PURE__*/React.createElement("div", {
      className: "k-f-desk"
    }, /*#__PURE__*/React.createElement(MX.Select, {
      size: "sm",
      value: f.ubicacion,
      onChange: v => set({
        ubicacion: v
      }),
      options: [{
        value: '',
        label: 'Todas las zonas'
      }, ...D.locationOptions]
    })), /*#__PURE__*/React.createElement("div", {
      className: "k-f-desk"
    }, /*#__PURE__*/React.createElement(MX.Select, {
      size: "sm",
      value: f.tipo,
      onChange: v => set({
        tipo: v
      }),
      options: [{
        value: '',
        label: 'Todos los tipos'
      }, ...D.types.filter(t => t !== 'Desarrollo').map(t => ({
        value: t,
        label: t
      }))]
    })), /*#__PURE__*/React.createElement("div", {
      className: "k-f-desk"
    }, /*#__PURE__*/React.createElement(MX.Select, {
      size: "sm",
      value: f.precio,
      onChange: v => set({
        precio: v,
        pmax: ''
      }),
      options: D.priceOptions.map(o => o.value ? o : {
        value: '',
        label: 'Cualquier precio'
      })
    })), /*#__PURE__*/React.createElement("div", {
      className: "k-f-desk"
    }, /*#__PURE__*/React.createElement(MX.Select, {
      size: "sm",
      value: f.rec,
      onChange: v => set({
        rec: v
      }),
      options: D.bedOptions.map(o => o.value ? {
        value: o.value,
        label: o.label + ' recámaras'
      } : {
        value: '',
        label: 'Recámaras'
      })
    })), /*#__PURE__*/React.createElement(MX.Button, {
      size: "sm",
      variant: isMobile ? 'dark' : 'outline',
      iconLeft: "SlidersHorizontal",
      onClick: () => setAdv(true)
    }, isMobile ? 'Filtros' + (chips.length ? ' (' + chips.length + ')' : '') : 'Más filtros' + (advCount ? ' (' + advCount + ')' : ''))), chips.length ? /*#__PURE__*/React.createElement("div", {
      className: "k-activechips"
    }, chips.map(([l, patch]) => /*#__PURE__*/React.createElement(MX.Chip, {
      key: l,
      onRemove: () => set(patch),
      removeLabel: 'Quitar filtro ' + l
    }, l)), /*#__PURE__*/React.createElement(MX.Button, {
      variant: "ghost",
      size: "sm",
      onClick: clearAll
    }, "Limpiar filtros")) : null)), /*#__PURE__*/React.createElement("section", {
      className: "k-section k-pt0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-resbar"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "k-rescount",
      "aria-live": "polite"
    }, loading ? 'Buscando…' : results.length + (results.length === 1 ? ' propiedad' : ' propiedades')), /*#__PURE__*/React.createElement("p", {
      className: "k-ressub"
    }, f.ubicacion ? 'en ' + locLabel(f.ubicacion) : 'en todo México', f.op ? f.op === 'renta' ? ' · en renta' : ' · en venta' : '')), /*#__PURE__*/React.createElement("div", {
      className: "k-restools"
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-sortlbl"
    }, "Ordenar por"), /*#__PURE__*/React.createElement(MX.Select, {
      size: "sm",
      value: f.sort,
      onChange: v => set({
        sort: v
      }),
      options: SORTS
    }), /*#__PURE__*/React.createElement(MX.Tabs, {
      variant: "segmented",
      size: "sm",
      label: "Vista",
      value: f.view,
      onChange: v => set({
        view: v
      }),
      items: [{
        value: 'grid',
        label: 'Cuadrícula'
      }, {
        value: 'list',
        label: 'Lista'
      }]
    }))), f.tipo === 'Desarrollo' ? /*#__PURE__*/React.createElement("div", {
      className: "k-note",
      style: {
        marginTop: 0,
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "Building",
      size: 18
    }), "Los desarrollos tienen su propio cat\xE1logo con preventa, avance de obra y modelos. ", /*#__PURE__*/React.createElement("a", {
      href: "#/desarrollos"
    }, "Ver desarrollos \u2192")) : null, loading ? /*#__PURE__*/React.createElement("div", {
      className: listMode ? 'k-list' : 'k-grid k-grid--3'
    }, [0, 1, 2, 3, 4, 5].slice(0, listMode ? 3 : 6).map(i => /*#__PURE__*/React.createElement(MX.Skeleton, {
      key: i,
      variant: "card"
    }))) : results.length ? /*#__PURE__*/React.createElement("div", {
      className: listMode ? 'k-list' : 'k-grid k-grid--3'
    }, results.map((p, i) => /*#__PURE__*/React.createElement(PCard, {
      key: p.id,
      p: p,
      layout: listMode ? 'list' : 'grid',
      eager: i < 3
    }))) : /*#__PURE__*/React.createElement(MX.EmptyState, {
      icon: "SearchX",
      title: "No encontramos propiedades con estos filtros.",
      description: "Prueba ampliar el rango de precio, cambiar de zona o quitar algunas amenidades.",
      action: /*#__PURE__*/React.createElement(MX.Button, {
        variant: "dark",
        iconLeft: "RotateCcw",
        onClick: clearAll
      }, "Limpiar filtros")
    }))), /*#__PURE__*/React.createElement(AdvancedFilters, {
      open: adv,
      onClose: () => setAdv(false),
      f: f,
      mobile: isMobile,
      onApply: d => {
        setAdv(false);
        setQ(d.q);
        navigate('/propiedades' + filtersToQuery({
          ...d,
          sort: f.sort,
          view: f.view
        }), {
          replace: true
        });
      }
    }));
  }
  function AdvancedFilters({
    open,
    onClose,
    f,
    onApply,
    mobile
  }) {
    const D = window.MXData;
    const [d, setD] = React.useState(f);
    React.useEffect(() => {
      if (open) setD(f);
    }, [open]);
    const count = applyFilters(D.properties, d).length;
    const up = patch => setD(s => ({
      ...s,
      ...patch
    }));
    const chipRow = (key, opts) => /*#__PURE__*/React.createElement("div", {
      className: "k-chiprow"
    }, opts.map(([v, l]) => /*#__PURE__*/React.createElement(MX.Chip, {
      key: v,
      selected: d[key] === v,
      onClick: () => up({
        [key]: d[key] === v ? '' : v
      })
    }, l)));
    const money = v => v ? Number(v).toLocaleString('en-US') : '';
    const digits = e => e.target.value.replace(/\D/g, '');
    return /*#__PURE__*/React.createElement(MX.Dialog, {
      open: open,
      onClose: onClose,
      placement: mobile ? 'bottom' : 'right',
      title: "Filtros avanzados",
      description: "El conteo de resultados se actualiza al instante.",
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MX.Button, {
        variant: "ghost",
        onClick: () => setD({
          ...EMPTY_F
        })
      }, "Limpiar todo"), /*#__PURE__*/React.createElement("span", {
        className: "k-spacer"
      }), /*#__PURE__*/React.createElement(MX.Button, {
        variant: "dark",
        disabled: !count,
        onClick: () => onApply(d)
      }, count ? 'Ver ' + count + (count === 1 ? ' resultado' : ' resultados') : 'Sin resultados'))
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-adv"
    }, mobile ? /*#__PURE__*/React.createElement(LocationAutocomplete, {
      id: "adv-loc",
      value: d.ubicacion,
      onChange: v => up({
        ubicacion: v
      })
    }) : null, /*#__PURE__*/React.createElement("fieldset", {
      className: "k-fs"
    }, /*#__PURE__*/React.createElement("legend", {
      className: "k-label"
    }, "Operaci\xF3n"), chipRow('op', [['venta', 'Venta'], ['renta', 'Renta']])), /*#__PURE__*/React.createElement("fieldset", {
      className: "k-fs"
    }, /*#__PURE__*/React.createElement("legend", {
      className: "k-label"
    }, "Tipo de propiedad"), chipRow('tipo', D.types.filter(t => t !== 'Desarrollo').map(t => [t, t]))), /*#__PURE__*/React.createElement("fieldset", {
      className: "k-fs"
    }, /*#__PURE__*/React.createElement("legend", {
      className: "k-label"
    }, "Precio (MXN)"), /*#__PURE__*/React.createElement("div", {
      className: "k-form__2"
    }, /*#__PURE__*/React.createElement(MX.Input, {
      size: "sm",
      label: "Precio m\xEDnimo",
      inputMode: "numeric",
      placeholder: "$0",
      value: money(d.pmin),
      onChange: e => up({
        pmin: digits(e)
      })
    }), /*#__PURE__*/React.createElement(MX.Input, {
      size: "sm",
      label: "Precio m\xE1ximo",
      inputMode: "numeric",
      placeholder: "Sin l\xEDmite",
      value: money(d.pmax || d.precio),
      onChange: e => up({
        pmax: digits(e),
        precio: ''
      })
    }))), /*#__PURE__*/React.createElement("fieldset", {
      className: "k-fs"
    }, /*#__PURE__*/React.createElement("legend", {
      className: "k-label"
    }, "Rec\xE1maras"), chipRow('rec', [['1', '1+'], ['2', '2+'], ['3', '3+'], ['4', '4+'], ['5', '5+']])), /*#__PURE__*/React.createElement("fieldset", {
      className: "k-fs"
    }, /*#__PURE__*/React.createElement("legend", {
      className: "k-label"
    }, "Ba\xF1os"), chipRow('banos', [['1', '1+'], ['2', '2+'], ['3', '3+'], ['4', '4+']])), /*#__PURE__*/React.createElement("fieldset", {
      className: "k-fs"
    }, /*#__PURE__*/React.createElement("legend", {
      className: "k-label"
    }, "Superficie (m\xB2)"), /*#__PURE__*/React.createElement("div", {
      className: "k-form__2"
    }, /*#__PURE__*/React.createElement(MX.Input, {
      size: "sm",
      label: "m\xB2 m\xEDnimos",
      inputMode: "numeric",
      placeholder: "0",
      value: d.mmin,
      onChange: e => up({
        mmin: digits(e)
      })
    }), /*#__PURE__*/React.createElement(MX.Input, {
      size: "sm",
      label: "m\xB2 m\xE1ximos",
      inputMode: "numeric",
      placeholder: "Sin l\xEDmite",
      value: d.mmax,
      onChange: e => up({
        mmax: digits(e)
      })
    }))), /*#__PURE__*/React.createElement("fieldset", {
      className: "k-fs"
    }, /*#__PURE__*/React.createElement("legend", {
      className: "k-label"
    }, "Amenidades"), /*#__PURE__*/React.createElement("div", {
      className: "k-chiprow"
    }, D.amenityList.map(a => {
      const on = d.amen.includes(a);
      return /*#__PURE__*/React.createElement(MX.Chip, {
        key: a,
        icon: D.amenityIcons[a],
        selected: on,
        onClick: () => up({
          amen: on ? d.amen.filter(x => x !== a) : [...d.amen, a]
        })
      }, a);
    })))));
  }
  Object.assign(window, {
    Home,
    Listings
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/modals.jsx
try { (() => {
(() => {
  const {
    useState,
    useMemo
  } = React;
  const MX = window.MX;
  const TIPOS = ['Comprar', 'Rentar', 'Vender', 'Desarrollos', 'Inversión', 'Otro'];
  const validate = (v, fields) => {
    const e = {};
    if (fields.includes('name') && !v.name.trim()) e.name = 'Ingresa tu nombre';
    if (fields.includes('phone') && v.phone.replace(/\D/g, '').length < 10) e.phone = 'Ingresa un teléfono de 10 dígitos';
    if (fields.includes('email') && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Ingresa un correo válido';
    return e;
  };
  const firstName = n => n.trim().split(' ')[0];
  const CHANNELS = {
    info: {
      title: 'Solicitar información',
      desc: () => 'Un asesor Mextas te responderá en menos de 2 horas hábiles.'
    },
    whatsapp: {
      title: 'Escríbenos por WhatsApp',
      desc: () => 'Déjanos tus datos y un asesor te enviará la ficha completa por WhatsApp.'
    },
    call: {
      title: 'Llamar a un asesor',
      desc: () => 'Llámanos al 33 1234 5678 (lun–vie, 9:00–19:00) o deja tu número y te llamamos.'
    },
    credit: {
      title: 'Asesoría de crédito',
      desc: () => 'Te ayudamos a comparar opciones de financiamiento con instituciones aliadas.'
    },
    general: {
      title: 'Consultar propiedad',
      desc: () => 'Cuéntanos qué buscas y te enviaremos opciones seleccionadas.'
    },
    dev: {
      title: 'Solicitar información',
      desc: P => 'Recibe precios, planos y disponibilidad actualizada de ' + (P.devName || 'este desarrollo') + '.'
    }
  };
  function ContactForm({
    p,
    devName,
    model,
    channel = 'info',
    inline,
    showType,
    onDone
  }) {
    const app = useApp();
    const defMsg = p ? 'Hola, me interesa ' + p.title + ' (' + p.id + '). ¿Podrían darme más información?' : devName ? 'Hola, me interesa ' + devName + (model ? ', modelo ' + model : '') + '. ¿Podrían enviarme precios y disponibilidad?' : '';
    const [v, setV] = useState({
      name: '',
      phone: '',
      email: '',
      message: defMsg,
      optin: true,
      tipo: 'Comprar'
    });
    const [err, setErr] = useState({});
    const [status, setStatus] = useState('idle');
    const up = k => e => {
      const val = e.target.value;
      setV(s => ({
        ...s,
        [k]: val
      }));
      if (err[k]) setErr(x => ({
        ...x,
        [k]: undefined
      }));
    };
    const submit = e => {
      e.preventDefault();
      const er = validate(v, ['name', 'phone', 'email']);
      setErr(er);
      if (Object.keys(er).length) return;
      setStatus('sending');
      setTimeout(() => {
        setStatus('sent');
        app.toast({
          tone: 'success',
          title: 'Solicitud enviada',
          message: 'Un asesor te contactará pronto.'
        });
      }, 1300);
    };
    if (status === 'sent') {
      const how = channel === 'call' ? 'Te llamaremos' : channel === 'whatsapp' ? 'Te escribiremos por WhatsApp' : 'Te contactaremos';
      return /*#__PURE__*/React.createElement(Success, {
        title: "Solicitud enviada",
        text: 'Gracias, ' + firstName(v.name) + '. ' + how + ' al ' + v.phone + ' en menos de 2 horas hábiles.',
        action: onDone ? /*#__PURE__*/React.createElement(MX.Button, {
          variant: "dark",
          onClick: onDone
        }, "Cerrar") : /*#__PURE__*/React.createElement(MX.Button, {
          variant: "outline",
          onClick: () => {
            setStatus('idle');
            setV(s => ({
              ...s,
              message: defMsg
            }));
          }
        }, "Enviar otra consulta")
      });
    }
    const hasErr = Object.values(err).some(Boolean);
    return /*#__PURE__*/React.createElement("form", {
      className: "k-form",
      onSubmit: submit,
      noValidate: true
    }, hasErr ? /*#__PURE__*/React.createElement("div", {
      className: "k-alert",
      role: "alert"
    }, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "AlertCircle",
      size: 16
    }), "Revisa los campos marcados.") : null, showType ? /*#__PURE__*/React.createElement("fieldset", {
      className: "k-fs"
    }, /*#__PURE__*/React.createElement("legend", {
      className: "k-label"
    }, "Tipo de consulta"), /*#__PURE__*/React.createElement("div", {
      className: "k-chiprow"
    }, TIPOS.map(t => /*#__PURE__*/React.createElement(MX.Chip, {
      key: t,
      selected: v.tipo === t,
      onClick: () => setV(s => ({
        ...s,
        tipo: t
      }))
    }, t)))) : null, /*#__PURE__*/React.createElement(MX.Input, {
      label: "Nombre",
      required: true,
      autoComplete: "name",
      placeholder: "Nombre y apellido",
      value: v.name,
      onChange: up('name'),
      error: err.name
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-form__2"
    }, /*#__PURE__*/React.createElement(MX.Input, {
      label: "Tel\xE9fono",
      required: true,
      type: "tel",
      inputMode: "tel",
      autoComplete: "tel",
      placeholder: "55 1234 5678",
      value: v.phone,
      onChange: up('phone'),
      error: err.phone
    }), /*#__PURE__*/React.createElement(MX.Input, {
      label: "Correo",
      required: true,
      type: "email",
      autoComplete: "email",
      placeholder: "nombre@correo.com",
      value: v.email,
      onChange: up('email'),
      error: err.email
    })), /*#__PURE__*/React.createElement(MX.Input, {
      label: "Mensaje",
      multiline: true,
      rows: 4,
      value: v.message,
      onChange: up('message'),
      placeholder: "\xBFQu\xE9 te gustar\xEDa saber?"
    }), p || devName ? /*#__PURE__*/React.createElement(MX.Checkbox, {
      label: p ? 'Quiero recibir información sobre esta propiedad.' : 'Quiero recibir actualizaciones de este desarrollo.',
      checked: v.optin,
      onChange: c => setV(s => ({
        ...s,
        optin: c
      }))
    }) : null, /*#__PURE__*/React.createElement(MX.Button, {
      type: "submit",
      variant: "dark",
      size: "lg",
      fullWidth: true,
      loading: status === 'sending'
    }, status === 'sending' ? 'Enviando…' : 'Enviar solicitud'), /*#__PURE__*/React.createElement("p", {
      className: "k-fine"
    }, "Al enviar aceptas el tratamiento de tus datos conforme a nuestro ", inline ? /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        app.openModal('legal', {
          doc: 'privacidad'
        });
      }
    }, "aviso de privacidad") : 'aviso de privacidad', "."));
  }
  const TIMES = ['09:00', '10:00', '11:00', '12:00', '13:00', '16:00', '17:00', '18:00'];
  function icsDownload(p, date, time, type) {
    const [h, m] = time.split(':').map(Number);
    const s = new Date(date);
    s.setHours(h, m, 0, 0);
    const e = new Date(s.getTime() + 60 * 60000);
    const f = d => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Mextas//Visita//ES', 'BEGIN:VEVENT', 'UID:' + Date.now() + '@mextas.mx', 'DTSTAMP:' + f(new Date()), 'DTSTART:' + f(s), 'DTEND:' + f(e), 'SUMMARY:Visita ' + (type === 'video' ? 'por videollamada' : 'presencial') + ' · ' + p.title, 'LOCATION:' + p.location, 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([ics], {
      type: 'text/calendar'
    }));
    a.download = 'visita-mextas.ics';
    a.click();
  }
  function VisitFlow({
    p,
    onDone
  }) {
    const app = useApp();
    const D = window.MXData;
    const days = useMemo(() => {
      const out = [];
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      while (out.length < 12) {
        d.setDate(d.getDate() + 1);
        if (d.getDay() !== 0) out.push(new Date(d));
      }
      return out;
    }, []);
    const [step, setStep] = useState(1);
    const [day, setDay] = useState(0);
    const [time, setTime] = useState(null);
    const [type, setType] = useState('presencial');
    const [v, setV] = useState({
      name: '',
      phone: '',
      email: ''
    });
    const [err, setErr] = useState({});
    const [status, setStatus] = useState('idle');
    const agent = D.agents.find(a => a.id === p.agent) || D.agents[0];
    const long = d => d.toLocaleDateString('es-MX', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
    const up = k => e => {
      const val = e.target.value;
      setV(s => ({
        ...s,
        [k]: val
      }));
    };
    const confirm = e => {
      e.preventDefault();
      const er = validate(v, ['name', 'phone', 'email']);
      setErr(er);
      if (Object.keys(er).length) return;
      setStatus('sending');
      setTimeout(() => {
        setStatus('sent');
        app.toast({
          tone: 'success',
          title: 'Visita confirmada',
          message: long(days[day]) + ' · ' + time
        });
      }, 1300);
    };
    if (status === 'sent') {
      return /*#__PURE__*/React.createElement(Success, {
        title: "Tu visita est\xE1 confirmada",
        text: 'Te enviamos la confirmación a ' + v.email + '. ' + agent.name + ' te contactará un día antes.',
        action: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MX.Button, {
          variant: "outline",
          iconLeft: "CalendarPlus",
          onClick: () => icsDownload(p, days[day], time, type)
        }, "Agregar a mi calendario"), /*#__PURE__*/React.createElement(MX.Button, {
          variant: "dark",
          onClick: onDone
        }, "Listo"))
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-summary"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Propiedad"), /*#__PURE__*/React.createElement("b", null, p.title)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Fecha"), /*#__PURE__*/React.createElement("b", null, long(days[day]))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Hora"), /*#__PURE__*/React.createElement("b", null, time, " h")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Tipo"), /*#__PURE__*/React.createElement("b", null, type === 'video' ? 'Videollamada' : 'Presencial')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Asesor"), /*#__PURE__*/React.createElement("b", null, agent.name))));
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "k-form"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-steps",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("span", {
      className: "is-on"
    }, "1 \xB7 Fecha y hora"), /*#__PURE__*/React.createElement("span", {
      className: step === 2 ? 'is-on' : ''
    }, "2 \xB7 Tus datos")), step === 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("fieldset", {
      className: "k-fs"
    }, /*#__PURE__*/React.createElement("legend", {
      className: "k-label"
    }, "Fecha"), /*#__PURE__*/React.createElement("div", {
      className: "k-dates"
    }, days.map((d, i) => /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: i,
      className: 'k-date' + (i === day ? ' is-on' : ''),
      "aria-pressed": i === day,
      "aria-label": long(d),
      onClick: () => {
        setDay(i);
        setTime(null);
      }
    }, /*#__PURE__*/React.createElement("small", null, d.toLocaleDateString('es-MX', {
      weekday: 'short'
    }).replace('.', '')), /*#__PURE__*/React.createElement("b", null, d.getDate()), /*#__PURE__*/React.createElement("small", null, d.toLocaleDateString('es-MX', {
      month: 'short'
    }).replace('.', '')))))), /*#__PURE__*/React.createElement("fieldset", {
      className: "k-fs"
    }, /*#__PURE__*/React.createElement("legend", {
      className: "k-label"
    }, "Hora"), /*#__PURE__*/React.createElement("div", {
      className: "k-times"
    }, TIMES.map((t, i) => {
      const taken = (i + day) % 4 === 1 || days[day].getDay() === 6 && i > 4;
      return /*#__PURE__*/React.createElement("button", {
        type: "button",
        key: t,
        disabled: taken,
        className: 'k-time' + (time === t ? ' is-on' : ''),
        "aria-pressed": time === t,
        "aria-label": t + (taken ? ', no disponible' : ''),
        onClick: () => setTime(t)
      }, t);
    }))), /*#__PURE__*/React.createElement("fieldset", {
      className: "k-fs"
    }, /*#__PURE__*/React.createElement("legend", {
      className: "k-label"
    }, "Tipo de visita"), /*#__PURE__*/React.createElement("div", {
      className: "k-radios"
    }, /*#__PURE__*/React.createElement(MX.Radio, {
      variant: "card",
      icon: "MapPin",
      name: "visit-type",
      value: "presencial",
      label: "Presencial",
      description: "Recorrido en sitio con tu asesor",
      checked: type === 'presencial',
      onChange: setType
    }), /*#__PURE__*/React.createElement(MX.Radio, {
      variant: "card",
      icon: "Video",
      name: "visit-type",
      value: "video",
      label: "Videollamada",
      description: "Recorrido guiado en vivo",
      checked: type === 'video',
      onChange: setType
    }))), /*#__PURE__*/React.createElement(MX.Button, {
      variant: "dark",
      size: "lg",
      fullWidth: true,
      iconRight: "ArrowRight",
      disabled: !time,
      onClick: () => setStep(2)
    }, time ? 'Continuar' : 'Selecciona un horario')) : /*#__PURE__*/React.createElement("form", {
      className: "k-form",
      onSubmit: confirm,
      noValidate: true
    }, /*#__PURE__*/React.createElement("p", {
      className: "k-pick"
    }, /*#__PURE__*/React.createElement("b", null, long(days[day])), " \xB7 ", time, " h \xB7 ", type === 'video' ? 'Videollamada' : 'Presencial'), /*#__PURE__*/React.createElement(MX.Input, {
      label: "Nombre",
      required: true,
      autoComplete: "name",
      value: v.name,
      onChange: up('name'),
      error: err.name,
      placeholder: "Nombre y apellido"
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-form__2"
    }, /*#__PURE__*/React.createElement(MX.Input, {
      label: "Tel\xE9fono",
      required: true,
      type: "tel",
      autoComplete: "tel",
      value: v.phone,
      onChange: up('phone'),
      error: err.phone,
      placeholder: "55 1234 5678"
    }), /*#__PURE__*/React.createElement(MX.Input, {
      label: "Correo",
      required: true,
      type: "email",
      autoComplete: "email",
      value: v.email,
      onChange: up('email'),
      error: err.email,
      placeholder: "nombre@correo.com"
    })), /*#__PURE__*/React.createElement("div", {
      className: "k-row-btns"
    }, /*#__PURE__*/React.createElement(MX.Button, {
      variant: "outline",
      size: "lg",
      iconLeft: "ArrowLeft",
      onClick: () => setStep(1)
    }, "Atr\xE1s"), /*#__PURE__*/React.createElement(MX.Button, {
      type: "submit",
      variant: "dark",
      size: "lg",
      loading: status === 'sending'
    }, status === 'sending' ? 'Confirmando…' : 'Confirmar visita'))));
  }
  function SellerForm({
    valuation: initialVal,
    onDone,
    inline
  }) {
    const app = useApp();
    const D = window.MXData;
    const [v, setV] = useState({
      name: '',
      phone: '',
      email: '',
      ubicacion: '',
      tipo: null,
      precio: '',
      message: '',
      valuation: !!initialVal
    });
    const [err, setErr] = useState({});
    const [status, setStatus] = useState('idle');
    const up = k => e => {
      const val = e.target.value;
      setV(s => ({
        ...s,
        [k]: val
      }));
    };
    const submit = e => {
      e.preventDefault();
      const er = validate(v, ['name', 'phone', 'email']);
      if (!v.ubicacion.trim()) er.ubicacion = 'Indica la ubicación de la propiedad';
      if (!v.tipo) er.tipo = 'Selecciona el tipo de propiedad';
      setErr(er);
      if (Object.keys(er).length) return;
      setStatus('sending');
      setTimeout(() => {
        setStatus('sent');
        app.toast({
          tone: 'success',
          title: v.valuation ? 'Valuación solicitada' : 'Solicitud recibida',
          message: 'Te contactaremos en menos de 24 horas.'
        });
      }, 1400);
    };
    if (status === 'sent') {
      return /*#__PURE__*/React.createElement(Success, {
        title: v.valuation ? 'Valuación solicitada' : 'Recibimos tu solicitud',
        text: 'Gracias, ' + firstName(v.name) + '. Un especialista revisará tu ' + (v.tipo || 'propiedad').toLowerCase() + ' en ' + v.ubicacion + ' y te contactará en menos de 24 horas para agendar la visita de valuación.',
        action: onDone ? /*#__PURE__*/React.createElement(MX.Button, {
          variant: "dark",
          onClick: onDone
        }, "Cerrar") : /*#__PURE__*/React.createElement(MX.Button, {
          variant: "outline",
          onClick: () => setStatus('idle')
        }, "Enviar otra propiedad")
      });
    }
    return /*#__PURE__*/React.createElement("form", {
      className: "k-form",
      onSubmit: submit,
      noValidate: true
    }, Object.values(err).some(Boolean) ? /*#__PURE__*/React.createElement("div", {
      className: "k-alert",
      role: "alert"
    }, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "AlertCircle",
      size: 16
    }), "Revisa los campos marcados.") : null, /*#__PURE__*/React.createElement(MX.Input, {
      label: "Nombre",
      required: true,
      autoComplete: "name",
      value: v.name,
      onChange: up('name'),
      error: err.name,
      placeholder: "Nombre y apellido"
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-form__2"
    }, /*#__PURE__*/React.createElement(MX.Input, {
      label: "Tel\xE9fono",
      required: true,
      type: "tel",
      autoComplete: "tel",
      value: v.phone,
      onChange: up('phone'),
      error: err.phone,
      placeholder: "55 1234 5678"
    }), /*#__PURE__*/React.createElement(MX.Input, {
      label: "Correo",
      required: true,
      type: "email",
      autoComplete: "email",
      value: v.email,
      onChange: up('email'),
      error: err.email,
      placeholder: "nombre@correo.com"
    })), /*#__PURE__*/React.createElement("div", {
      className: "k-form__2"
    }, /*#__PURE__*/React.createElement(MX.Input, {
      label: "Ubicaci\xF3n de la propiedad",
      required: true,
      iconLeft: "MapPin",
      value: v.ubicacion,
      onChange: up('ubicacion'),
      error: err.ubicacion,
      placeholder: "Colonia, ciudad"
    }), /*#__PURE__*/React.createElement(MX.Select, {
      label: "Tipo de propiedad",
      required: true,
      placeholder: "Selecciona tipo",
      value: v.tipo,
      error: err.tipo,
      onChange: t => setV(s => ({
        ...s,
        tipo: t
      })),
      options: D.types.filter(t => t !== 'Desarrollo')
    })), /*#__PURE__*/React.createElement(MX.Input, {
      label: "Precio estimado",
      hint: "Opcional \xB7 lo validamos con comparables de la zona",
      inputMode: "numeric",
      iconLeft: "DollarSign",
      placeholder: "MXN",
      value: v.precio ? Number(v.precio).toLocaleString('en-US') : '',
      onChange: e => setV(s => ({
        ...s,
        precio: e.target.value.replace(/\D/g, '')
      }))
    }), /*#__PURE__*/React.createElement(MX.Input, {
      label: "Mensaje",
      multiline: true,
      rows: 3,
      value: v.message,
      onChange: up('message'),
      placeholder: "Superficie, estado de la propiedad, fecha en que te gustar\xEDa vender\u2026"
    }), /*#__PURE__*/React.createElement(MX.Checkbox, {
      label: "Solicitar valuaci\xF3n",
      description: "Un especialista visita la propiedad y te entrega una opini\xF3n de valor sin costo.",
      checked: v.valuation,
      onChange: c => setV(s => ({
        ...s,
        valuation: c
      }))
    }), /*#__PURE__*/React.createElement(MX.Button, {
      type: "submit",
      variant: "dark",
      size: "lg",
      fullWidth: true,
      loading: status === 'sending'
    }, status === 'sending' ? 'Enviando…' : v.valuation ? 'Solicitar valuación' : 'Enviar solicitud'));
  }
  const LEGAL = {
    privacidad: {
      title: 'Aviso de privacidad',
      body: ['Mextas Inmobiliaria utiliza los datos que compartes (nombre, teléfono y correo) exclusivamente para dar seguimiento a tu solicitud y, si lo autorizas, enviarte información de propiedades.', 'No compartimos tus datos con terceros sin tu consentimiento, salvo con notarías e instituciones financieras cuando forman parte de una operación que tú solicitas.', 'Puedes ejercer tus derechos ARCO escribiendo a privacidad@mextas.mx.', 'Documento de demostración: el texto legal definitivo debe ser revisado por el área jurídica.']
    },
    terminos: {
      title: 'Términos y condiciones',
      body: ['La información publicada es de carácter informativo y puede cambiar sin previo aviso. Precios, superficies y disponibilidad deben confirmarse con un asesor.', 'Las simulaciones de crédito son estimaciones y no constituyen una oferta de financiamiento.', 'Documento de demostración: el texto legal definitivo debe ser revisado por el área jurídica.']
    }
  };
  function ModalHost() {
    const {
      modal,
      closeModal
    } = useApp();
    const last = React.useRef({
      kind: null,
      props: {},
      id: 0
    });
    if (modal) last.current = modal;
    const m = modal || last.current;
    const P = m.props || {};
    const is = k => !!modal && modal.kind === k;
    const ch = CHANNELS[P.channel] || CHANNELS.info;
    const legal = LEGAL[P.doc] || LEGAL.privacidad;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MX.Dialog, {
      open: is('contact'),
      onClose: closeModal,
      eyebrow: P.p ? P.p.title : P.devName || 'Mextas Inmobiliaria',
      title: ch.title,
      description: ch.desc(P)
    }, /*#__PURE__*/React.createElement(ContactForm, {
      key: m.id,
      p: P.p,
      devName: P.devName,
      model: P.model,
      channel: P.channel,
      onDone: closeModal
    })), /*#__PURE__*/React.createElement(MX.Dialog, {
      open: is('visit'),
      onClose: closeModal,
      eyebrow: P.p ? P.p.title : '',
      title: "Agenda una visita",
      description: "Elige el d\xEDa, la hora y el tipo de recorrido."
    }, P.p ? /*#__PURE__*/React.createElement(VisitFlow, {
      key: m.id,
      p: P.p,
      onDone: closeModal
    }) : null), /*#__PURE__*/React.createElement(MX.Dialog, {
      open: is('seller'),
      onClose: closeModal,
      eyebrow: "Propietarios",
      title: P.valuation ? 'Solicitar valuación' : 'Vende con Mextas',
      description: "Cu\xE9ntanos sobre tu propiedad. La valuaci\xF3n inicial no tiene costo."
    }, /*#__PURE__*/React.createElement(SellerForm, {
      key: m.id,
      valuation: P.valuation,
      onDone: closeModal
    })), /*#__PURE__*/React.createElement(MX.Dialog, {
      open: is('legal'),
      onClose: closeModal,
      size: "lg",
      title: legal.title,
      footer: /*#__PURE__*/React.createElement(MX.Button, {
        variant: "dark",
        onClick: closeModal
      }, "Entendido")
    }, legal.body.map((t, i) => /*#__PURE__*/React.createElement("p", {
      key: i,
      className: "k-prose",
      style: {
        fontSize: 15
      }
    }, t))));
  }
  Object.assign(window, {
    ContactForm,
    SellerForm,
    VisitFlow,
    ModalHost
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/modals.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages.jsx
try { (() => {
(() => {
  const {
    useState
  } = React;
  const MX = window.MX;
  function NotFound({
    what = 'página'
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 140,
        paddingBottom: 80
      }
    }, /*#__PURE__*/React.createElement(MX.EmptyState, {
      icon: "Compass",
      title: 'No encontramos esta ' + what,
      description: "Es posible que el enlace haya cambiado o que la publicaci\xF3n ya no est\xE9 disponible.",
      action: /*#__PURE__*/React.createElement(MX.Button, {
        variant: "dark",
        iconRight: "ArrowRight",
        href: "#/propiedades"
      }, "Explorar propiedades")
    }));
  }
  function Favorites() {
    const {
      favItems,
      setCompareList,
      navigate
    } = useApp();
    const n = favItems.length;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Tu colecci\xF3n",
      title: "Favoritos",
      crumbs: [{
        label: 'Inicio',
        href: '#/'
      }, {
        label: 'Favoritos'
      }],
      text: n ? n + (n === 1 ? ' propiedad guardada' : ' propiedades guardadas') + '. Se conservan en este dispositivo.' : null
    }), /*#__PURE__*/React.createElement("section", {
      className: "k-section k-pt0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, n ? /*#__PURE__*/React.createElement(React.Fragment, null, n >= 2 ? /*#__PURE__*/React.createElement("div", {
      className: "k-cmp-bar"
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-fine"
    }, "\xBFIndeciso? Compara hasta tres de tus favoritas lado a lado."), /*#__PURE__*/React.createElement(MX.Button, {
      variant: "outline",
      size: "sm",
      iconLeft: "Scale",
      onClick: () => {
        setCompareList(favItems.map(p => p.slug));
        navigate('/comparar');
      }
    }, "Comparar favoritas")) : null, /*#__PURE__*/React.createElement("div", {
      className: "k-grid k-grid--3"
    }, favItems.map(p => /*#__PURE__*/React.createElement(PCard, {
      key: p.id,
      p: p
    })))) : /*#__PURE__*/React.createElement("div", {
      className: "k-card"
    }, /*#__PURE__*/React.createElement(MX.EmptyState, {
      icon: "Heart",
      title: "Tu colecci\xF3n est\xE1 vac\xEDa",
      description: "Guarda las propiedades que m\xE1s te interesen para encontrarlas f\xE1cilmente.",
      action: /*#__PURE__*/React.createElement(MX.Button, {
        variant: "dark",
        iconRight: "ArrowRight",
        href: "#/propiedades"
      }, "Explorar propiedades")
    })))));
  }
  function Compare() {
    const {
      cmpItems: items,
      toggleCompare,
      clearCompare
    } = useApp();
    const D = window.MXData;
    const crumbs = [{
      label: 'Inicio',
      href: '#/'
    }, {
      label: 'Comparar'
    }];
    if (!items.length) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
        eyebrow: "Comparador",
        title: "Comparar propiedades",
        crumbs: crumbs
      }), /*#__PURE__*/React.createElement("section", {
        className: "k-section k-pt0"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-container k-wide"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-card"
      }, /*#__PURE__*/React.createElement(MX.EmptyState, {
        icon: "Scale",
        title: "A\xFAn no hay propiedades para comparar",
        description: "Marca \u201CComparar\u201D en hasta tres propiedades para verlas lado a lado.",
        action: /*#__PURE__*/React.createElement(MX.Button, {
          variant: "dark",
          iconRight: "ArrowRight",
          href: "#/propiedades"
        }, "Explorar propiedades")
      })))));
    }
    const sale = items.filter(p => p.operation === 'venta');
    const bestPpm = sale.length > 1 ? Math.min(...sale.map(p => p.price / p.area)) : null;
    const maxArea = items.length > 1 ? Math.max(...items.map(p => p.area)) : null;
    const amen = [...new Set(items.flatMap(p => p.amenities))];
    const rows = [['Precio', p => /*#__PURE__*/React.createElement("span", {
      className: "k-cmp__price"
    }, D.fmtPrice(p))], ['Precio por m²', p => p.operation === 'venta' ? /*#__PURE__*/React.createElement(React.Fragment, null, D.fmt(p.price / p.area), " MXN", bestPpm && p.price / p.area === bestPpm ? /*#__PURE__*/React.createElement(MX.Badge, {
      tone: "success",
      className: "k-cmp__best"
    }, "Mejor valor") : null) : '—'], ['Ubicación', p => p.location], ['Tipo', p => p.type], ['Operación', p => p.operation === 'renta' ? 'Renta' : 'Venta'], ['Recámaras', p => p.beds || '—'], ['Baños', p => p.baths || '—'], ['Superficie', p => /*#__PURE__*/React.createElement(React.Fragment, null, p.area, " m\xB2", maxArea && p.area === maxArea ? /*#__PURE__*/React.createElement(MX.Badge, {
      tone: "outline",
      className: "k-cmp__best"
    }, "Mayor") : null)], ['Estacionamientos', p => p.parking || '—'], ['Antigüedad', p => ageLabel(p.year)], ['Amenidades', p => /*#__PURE__*/React.createElement("ul", null, amen.map(a => {
      const on = p.amenities.includes(a);
      return /*#__PURE__*/React.createElement("li", {
        key: a,
        className: on ? '' : 'is-off'
      }, /*#__PURE__*/React.createElement(MX.Icon, {
        name: on ? 'Check' : 'Minus',
        size: 14
      }), a);
    }))], ['Características', p => p.features.length ? /*#__PURE__*/React.createElement("ul", null, p.features.map(x => /*#__PURE__*/React.createElement("li", {
      key: x
    }, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "Check",
      size: 14
    }), x))) : '—']];
    const empty = Math.max(0, 3 - items.length);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Comparador",
      title: "Comparar propiedades",
      crumbs: crumbs,
      text: items.length < 2 ? 'Agrega al menos una propiedad más para una comparación completa.' : 'Revisa precio, superficie y amenidades lado a lado.'
    }), /*#__PURE__*/React.createElement("section", {
      className: "k-section k-pt0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-cmp-bar"
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-fine"
    }, items.length, " de 3 propiedades seleccionadas"), /*#__PURE__*/React.createElement(MX.Button, {
      variant: "ghost",
      size: "sm",
      iconLeft: "RotateCcw",
      onClick: clearCompare
    }, "Vaciar comparador")), /*#__PURE__*/React.createElement("div", {
      className: "k-cmp",
      role: "region",
      "aria-label": "Tabla comparativa",
      tabIndex: 0
    }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      scope: "row"
    }, "Propiedad"), items.map(p => /*#__PURE__*/React.createElement("td", {
      key: p.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-cmp__head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-cmp__img"
    }, /*#__PURE__*/React.createElement("img", {
      src: p.image,
      alt: ""
    }), /*#__PURE__*/React.createElement(MX.IconButton, {
      icon: "X",
      label: 'Quitar ' + p.title,
      variant: "glass",
      size: "sm",
      onClick: () => toggleCompare(p)
    })), /*#__PURE__*/React.createElement("a", {
      href: '#/propiedades/' + p.slug
    }, p.title), /*#__PURE__*/React.createElement("small", null, p.id)))), Array.from({
      length: empty
    }).map((_, i) => /*#__PURE__*/React.createElement("td", {
      key: 'e' + i
    }, /*#__PURE__*/React.createElement("a", {
      className: "k-cmp__add",
      href: "#/propiedades"
    }, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "Plus",
      size: 18
    }), "Agregar propiedad"))))), /*#__PURE__*/React.createElement("tbody", null, rows.map(([label, fn]) => /*#__PURE__*/React.createElement("tr", {
      key: label
    }, /*#__PURE__*/React.createElement("th", {
      scope: "row"
    }, label), items.map(p => /*#__PURE__*/React.createElement("td", {
      key: p.id
    }, fn(p))), Array.from({
      length: empty
    }).map((_, i) => /*#__PURE__*/React.createElement("td", {
      key: 'e' + i
    })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      scope: "row"
    }), " ", items.map(p => /*#__PURE__*/React.createElement("td", {
      key: p.id
    }, /*#__PURE__*/React.createElement(MX.Button, {
      size: "sm",
      variant: "dark",
      iconRight: "ArrowRight",
      href: '#/propiedades/' + p.slug
    }, "Ver propiedad"))), Array.from({
      length: empty
    }).map((_, i) => /*#__PURE__*/React.createElement("td", {
      key: 'e' + i
    })))))))));
  }
  const DEV_STATUSES = [{
    value: 'all',
    label: 'Todos'
  }, {
    value: 'Preventa',
    label: 'Preventa'
  }, {
    value: 'En construcción',
    label: 'En construcción'
  }, {
    value: 'Entrega inmediata',
    label: 'Entrega inmediata'
  }];
  function Developments() {
    const {
      route,
      navigate
    } = useApp();
    const D = window.MXData;
    const zone = route.query.get('ubicacion') || '';
    const [status, setStatus] = useState('all');
    const list = D.developments.filter(d => (!zone || d.zone === zone) && (status === 'all' || d.status === status));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Desarrollos",
      title: "Proyectos residenciales seleccionados",
      crumbs: [{
        label: 'Inicio',
        href: '#/'
      }, {
        label: 'Desarrollos'
      }],
      text: "Preventa y entrega inmediata en las ciudades con mayor dinamismo del pa\xEDs. Revisamos desarrollador, permisos, avance de obra y calendario de entrega de cada proyecto."
    }), /*#__PURE__*/React.createElement("section", {
      className: "k-section k-pt0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-filterbar"
    }, /*#__PURE__*/React.createElement(MX.Tabs, {
      variant: "segmented",
      size: "sm",
      label: "Estatus",
      value: status,
      onChange: setStatus,
      items: DEV_STATUSES.map(s => ({
        ...s,
        count: s.value === 'all' ? D.developments.length : D.developments.filter(d => d.status === s.value).length
      }))
    }), zone ? /*#__PURE__*/React.createElement(MX.Chip, {
      icon: "MapPin",
      onRemove: () => navigate('/desarrollos', {
        replace: true
      })
    }, locLabel(zone)) : null), list.length ? /*#__PURE__*/React.createElement("div", null, list.map((d, i) => /*#__PURE__*/React.createElement(DevRow, {
      key: d.slug,
      d: d,
      i: i
    }))) : /*#__PURE__*/React.createElement(MX.EmptyState, {
      icon: "Building",
      title: "No hay desarrollos con este criterio",
      description: "Prueba con otro estatus o revisa todas las ciudades.",
      action: /*#__PURE__*/React.createElement(MX.Button, {
        variant: "dark",
        onClick: () => {
          setStatus('all');
          navigate('/desarrollos', {
            replace: true
          });
        }
      }, "Ver todos los desarrollos")
    }))));
  }
  function DevRow({
    d,
    i
  }) {
    const D = window.MXData;
    return /*#__PURE__*/React.createElement(Reveal, {
      as: "article",
      className: "k-devrow"
    }, /*#__PURE__*/React.createElement("a", {
      className: "k-devrow__img",
      href: '#/desarrollos/' + d.slug,
      "aria-label": 'Explorar ' + d.name
    }, /*#__PURE__*/React.createElement("img", {
      src: d.image,
      alt: 'Vista de ' + d.name,
      loading: i ? 'lazy' : 'eager'
    }), /*#__PURE__*/React.createElement(MX.Badge, {
      tone: "light"
    }, d.status)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "k-eyebrow"
    }, d.location), /*#__PURE__*/React.createElement("h2", null, d.name), /*#__PURE__*/React.createElement("p", {
      className: "k-devrow__tag"
    }, d.tagline), /*#__PURE__*/React.createElement("dl", {
      className: "k-devmeta"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Desde"), /*#__PURE__*/React.createElement("dd", null, D.fmtShort(d.from))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Disponibles"), /*#__PURE__*/React.createElement("dd", null, d.units, " ", /*#__PURE__*/React.createElement("small", null, "de ", d.total))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Entrega"), /*#__PURE__*/React.createElement("dd", null, d.delivery))), /*#__PURE__*/React.createElement("div", {
      className: "k-progress-lbl"
    }, /*#__PURE__*/React.createElement("span", null, "Avance de obra"), /*#__PURE__*/React.createElement("b", null, d.progress, "%")), /*#__PURE__*/React.createElement("div", {
      className: "k-progress",
      role: "progressbar",
      "aria-valuenow": d.progress,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-label": "Avance de obra"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: d.progress + '%'
      }
    })), /*#__PURE__*/React.createElement("ul", {
      className: "k-devamen"
    }, d.amenities.slice(0, 5).map(a => /*#__PURE__*/React.createElement("li", {
      key: a
    }, /*#__PURE__*/React.createElement(MX.Icon, {
      name: D.amenityIcons[a] || 'Check',
      size: 15
    }), a))), /*#__PURE__*/React.createElement(MX.Button, {
      variant: "dark",
      iconRight: "ArrowRight",
      href: '#/desarrollos/' + d.slug
    }, "Explorar desarrollo")));
  }
  function DevelopmentDetail({
    slug
  }) {
    const D = window.MXData;
    const {
      openModal
    } = useApp();
    const [lb, setLb] = useState(-1);
    const d = D.developments.find(x => x.slug === slug);
    if (!d) return /*#__PURE__*/React.createElement(NotFound, {
      what: "desarrollo"
    });
    const avail = n => n === 0 ? /*#__PURE__*/React.createElement(MX.Badge, {
      tone: "danger"
    }, "Agotado") : n <= 4 ? /*#__PURE__*/React.createElement(MX.Badge, {
      tone: "warning"
    }, "\xDAltimas ", n) : /*#__PURE__*/React.createElement(MX.Badge, {
      tone: "success"
    }, n, " disponibles");
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
      className: "k-hero k-hero--page",
      "aria-label": d.name
    }, /*#__PURE__*/React.createElement("img", {
      className: "k-hero__img",
      src: d.image,
      alt: 'Vista de ' + d.name
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-hero__shade k-hero__shade--b"
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide k-hero__content"
    }, /*#__PURE__*/React.createElement(MX.Breadcrumbs, {
      tone: "dark",
      items: [{
        label: 'Inicio',
        href: '#/'
      }, {
        label: 'Desarrollos',
        href: '#/desarrollos'
      }, {
        label: d.name
      }]
    }), /*#__PURE__*/React.createElement("p", {
      className: "k-eyebrow k-fadeup"
    }, d.status, " \xB7 ", d.location), /*#__PURE__*/React.createElement("h1", {
      className: "k-fadeup",
      style: {
        animationDelay: '100ms',
        textTransform: 'uppercase'
      }
    }, d.name), /*#__PURE__*/React.createElement("p", {
      className: "k-hero__lead k-fadeup",
      style: {
        animationDelay: '200ms'
      }
    }, d.tagline), /*#__PURE__*/React.createElement("div", {
      className: "k-hero__ctas k-fadeup",
      style: {
        animationDelay: '300ms'
      }
    }, /*#__PURE__*/React.createElement(MX.Button, {
      size: "lg",
      iconRight: "ArrowRight",
      onClick: () => scrollToId('dev-form')
    }, "Solicitar informaci\xF3n"), /*#__PURE__*/React.createElement(MX.Button, {
      size: "lg",
      variant: "outline-inverse",
      onClick: () => scrollToId('modelos')
    }, "Ver modelos")), /*#__PURE__*/React.createElement("dl", {
      className: "k-herostats k-fadeup",
      style: {
        animationDelay: '400ms'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Desde"), /*#__PURE__*/React.createElement("dd", null, D.fmtShort(d.from))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Unidades disponibles"), /*#__PURE__*/React.createElement("dd", null, d.units)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Entrega estimada"), /*#__PURE__*/React.createElement("dd", null, d.delivery)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Avance de obra"), /*#__PURE__*/React.createElement("dd", null, d.progress, "%"))))), /*#__PURE__*/React.createElement("section", {
      className: "k-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide k-split"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
      className: "k-eyebrow"
    }, "El proyecto"), /*#__PURE__*/React.createElement("h2", null, d.tagline), /*#__PURE__*/React.createElement("p", {
      className: "k-split__text"
    }, d.description)), /*#__PURE__*/React.createElement(Reveal, {
      delay: 120
    }, /*#__PURE__*/React.createElement("dl", {
      className: "k-facts"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Ubicaci\xF3n"), /*#__PURE__*/React.createElement("dd", null, d.location)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Ciudad"), /*#__PURE__*/React.createElement("dd", null, d.city, ", ", d.state)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Estatus"), /*#__PURE__*/React.createElement("dd", null, d.status)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Total de unidades"), /*#__PURE__*/React.createElement("dd", null, d.total)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Precio desde"), /*#__PURE__*/React.createElement("dd", null, D.fmt(d.from), " MXN")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Entrega"), /*#__PURE__*/React.createElement("dd", null, d.delivery))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-progress-lbl"
    }, /*#__PURE__*/React.createElement("span", null, "Avance de obra"), /*#__PURE__*/React.createElement("b", null, d.progress, "%")), /*#__PURE__*/React.createElement("div", {
      className: "k-progress"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: d.progress + '%'
      }
    })))))), /*#__PURE__*/React.createElement("section", {
      className: "k-section k-white k-bt"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, /*#__PURE__*/React.createElement(MX.SectionHeader, {
      eyebrow: "Galer\xEDa",
      title: "Recorre el desarrollo"
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-galgrid k-mt"
    }, d.gallery.map((src, i) => /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      onClick: () => setLb(i),
      "aria-label": 'Ver imagen ' + (i + 1)
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "",
      loading: "lazy"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "k-sub"
    }, /*#__PURE__*/React.createElement(MX.SectionHeader, {
      eyebrow: "Amenidades",
      title: "Dise\xF1ado para vivirse"
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-amen-grid k-mt"
    }, d.amenities.map(a => /*#__PURE__*/React.createElement(MX.AmenityItem, {
      key: a,
      icon: D.amenityIcons[a] || 'Check',
      label: a
    })))))), /*#__PURE__*/React.createElement("section", {
      className: "k-section",
      id: "modelos"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, /*#__PURE__*/React.createElement(MX.SectionHeader, {
      eyebrow: "Modelos",
      title: "Unidades y disponibilidad",
      description: "Precios de lista vigentes. Consulta esquemas de pago en preventa."
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-table-wrap k-mt"
    }, /*#__PURE__*/React.createElement("table", {
      className: "k-table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Tipo"), /*#__PURE__*/React.createElement("th", null, "Superficie"), /*#__PURE__*/React.createElement("th", null, "Rec\xE1maras"), /*#__PURE__*/React.createElement("th", null, "Precio desde"), /*#__PURE__*/React.createElement("th", null, "Disponibilidad"), /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("span", {
      className: "mx-sr"
    }, "Acci\xF3n")))), /*#__PURE__*/React.createElement("tbody", null, d.models.map(m => /*#__PURE__*/React.createElement("tr", {
      key: m.type
    }, /*#__PURE__*/React.createElement("td", {
      className: "k-serif"
    }, m.type), /*#__PURE__*/React.createElement("td", null, m.area, " m\xB2"), /*#__PURE__*/React.createElement("td", null, m.beds), /*#__PURE__*/React.createElement("td", {
      className: "k-gold"
    }, D.fmt(m.price), " MXN"), /*#__PURE__*/React.createElement("td", null, avail(m.available)), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement(MX.Button, {
      size: "sm",
      variant: m.available ? 'outline' : 'ghost',
      onClick: () => openModal('contact', {
        channel: 'dev',
        devName: d.name,
        model: m.type
      })
    }, m.available ? 'Cotizar' : 'Lista de espera'))))))))), /*#__PURE__*/React.createElement("section", {
      className: "k-section k-dark",
      id: "dev-form"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide k-split"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "k-eyebrow"
    }, d.name), /*#__PURE__*/React.createElement("h2", null, "Solicita informaci\xF3n"), /*#__PURE__*/React.createElement("p", {
      className: "k-split__text"
    }, "Recibe la carpeta comercial con planos, lista de precios, esquemas de pago y calendario de obra."), /*#__PURE__*/React.createElement("ul", {
      className: "k-checks"
    }, ['Planos y acabados por modelo', 'Lista de precios vigente', 'Esquemas de pago en preventa', 'Visita al showroom o recorrido virtual'].map(x => /*#__PURE__*/React.createElement("li", {
      key: x
    }, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "Check",
      size: 16
    }), x)))), /*#__PURE__*/React.createElement("div", {
      className: "k-card"
    }, /*#__PURE__*/React.createElement("h3", null, "Recibe la carpeta comercial"), /*#__PURE__*/React.createElement("p", null, "Un asesor te responde hoy mismo."), /*#__PURE__*/React.createElement(ContactForm, {
      inline: true,
      channel: "dev",
      devName: d.name
    })))), /*#__PURE__*/React.createElement(Lightbox, {
      images: d.gallery,
      index: lb,
      onIndex: setLb,
      title: d.name
    }));
  }
  Object.assign(window, {
    NotFound,
    Favorites,
    Compare,
    Developments,
    DevelopmentDetail
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages2.jsx
try { (() => {
(() => {
  const {
    useState
  } = React;
  const MX = window.MX;
  function SvcGrid({
    items
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "k-svc-grid"
    }, items.map((s, i) => /*#__PURE__*/React.createElement("article", {
      key: s.title,
      className: "k-svc"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-svc__top"
    }, /*#__PURE__*/React.createElement(MX.Icon, {
      name: s.icon,
      size: 28,
      strokeWidth: 1.25,
      className: "k-svc__icon"
    }), /*#__PURE__*/React.createElement("span", {
      className: "k-svc__n"
    }, String(i + 1).padStart(2, '0'))), /*#__PURE__*/React.createElement("h3", null, s.title), /*#__PURE__*/React.createElement("p", null, s.text))));
  }
  function Services() {
    const D = window.MXData;
    const {
      openModal
    } = useApp();
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Servicios",
      title: "Acompa\xF1amiento completo, de la b\xFAsqueda al cierre",
      crumbs: [{
        label: 'Inicio',
        href: '#/'
      }, {
        label: 'Servicios'
      }],
      text: "Un solo equipo para comprar, vender o invertir: asesor\xEDa, an\xE1lisis de mercado, negociaci\xF3n y gesti\xF3n documental."
    }), /*#__PURE__*/React.createElement("section", {
      className: "k-section k-pt0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(MX.SectionHeader, {
      eyebrow: "Para compradores",
      title: "Encuentra la propiedad correcta",
      action: /*#__PURE__*/React.createElement(MX.Button, {
        variant: "dark",
        size: "sm",
        iconRight: "ArrowRight",
        onClick: () => openModal('contact', {
          channel: 'general'
        })
      }, "Iniciar b\xFAsqueda personalizada")
    })), /*#__PURE__*/React.createElement(Reveal, {
      className: "k-mt"
    }, /*#__PURE__*/React.createElement(SvcGrid, {
      items: D.services.buyers
    })))), /*#__PURE__*/React.createElement("section", {
      className: "k-section k-dark"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(MX.SectionHeader, {
      tone: "dark",
      eyebrow: "Para propietarios",
      title: "Vende con la presentaci\xF3n que merece",
      action: /*#__PURE__*/React.createElement(MX.Button, {
        size: "sm",
        iconRight: "ArrowRight",
        onClick: () => openModal('seller', {
          valuation: true
        })
      }, "Solicitar valuaci\xF3n")
    })), /*#__PURE__*/React.createElement(Reveal, {
      className: "k-mt"
    }, /*#__PURE__*/React.createElement(SvcGrid, {
      items: D.services.owners
    })))), /*#__PURE__*/React.createElement("section", {
      className: "k-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-cta"
    }, /*#__PURE__*/React.createElement("p", {
      className: "k-eyebrow"
    }, "Asesor\xEDa sin costo"), /*#__PURE__*/React.createElement("h2", null, "Hablemos de lo que buscas"), /*#__PURE__*/React.createElement("p", null, "La primera sesi\xF3n con un asesor no tiene costo ni compromiso."), /*#__PURE__*/React.createElement("div", {
      className: "k-hero__ctas"
    }, /*#__PURE__*/React.createElement(MX.Button, {
      variant: "dark",
      size: "lg",
      iconRight: "ArrowRight",
      href: "#/contacto"
    }, "Contactar a un asesor"), /*#__PURE__*/React.createElement(MX.Button, {
      variant: "outline",
      size: "lg",
      href: "#/propiedades"
    }, "Ver propiedades")))));
  }
  function About() {
    const D = window.MXData;
    const {
      openModal
    } = useApp();
    const HISTORY = [['2016', 'Abrimos la primera oficina en Guadalajara con un portafolio de doce residencias.'], ['2018', 'Llegamos a Monterrey y sumamos el área de desarrollos en preventa.'], ['2020', 'Oficina en Ciudad de México; enfoque en Polanco, Lomas y Condesa.'], ['2023', 'Alianzas en Los Cabos, Cancún y Mérida para inversión vacacional.'], ['2026', 'Lanzamos la plataforma digital Mextas para buscar, comparar y agendar.']];
    const METHOD = [['Escuchamos', 'Definimos contigo presupuesto, zona y prioridades reales.'], ['Seleccionamos', 'Filtramos el mercado y descartamos lo que no cumple.'], ['Verificamos', 'Revisamos documentación, uso de suelo y estado de la propiedad.'], ['Acompañamos', 'Negociamos y coordinamos el cierre ante notario.']];
    const VALUES = [['Eye', 'Criterio', 'Recomendamos menos opciones, mejor elegidas.'], ['Scale', 'Transparencia', 'Precios, comisiones y riesgos explicados desde el inicio.'], ['Compass', 'Conocimiento local', 'Asesores que viven y conocen cada zona.'], ['Handshake', 'Relación a largo plazo', 'Muchos clientes vuelven para su segunda operación.']];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
      className: "k-hero k-hero--page",
      "aria-label": "Nosotros"
    }, /*#__PURE__*/React.createElement("img", {
      className: "k-hero__img",
      src: D.IMG.lomas,
      alt: "Residencia contempor\xE1nea con vista a la monta\xF1a"
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-hero__shade"
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide k-hero__content"
    }, /*#__PURE__*/React.createElement("p", {
      className: "k-eyebrow k-fadeup"
    }, "Nosotros"), /*#__PURE__*/React.createElement("h1", {
      className: "k-fadeup",
      style: {
        animationDelay: '100ms'
      }
    }, "Arquitectura, ubicaci\xF3n ", /*#__PURE__*/React.createElement("em", null, "y criterio.")), /*#__PURE__*/React.createElement("p", {
      className: "k-hero__lead k-fadeup",
      style: {
        animationDelay: '200ms'
      }
    }, "Mextas es una inmobiliaria mexicana enfocada en propiedades residenciales y desarrollos de alto nivel."))), /*#__PURE__*/React.createElement("section", {
      className: "k-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
      className: "k-eyebrow"
    }, "Filosof\xEDa"), /*#__PURE__*/React.createElement("p", {
      className: "k-statement"
    }, "Una propiedad se elige por c\xF3mo se vive, ", /*#__PURE__*/React.createElement("em", null, "no solo por lo que mide."))), /*#__PURE__*/React.createElement(Reveal, {
      className: "k-cols2"
    }, /*#__PURE__*/React.createElement("p", {
      className: "k-prose"
    }, "Seleccionamos propiedades y desarrollos con criterios de ubicaci\xF3n, arquitectura y potencial de inversi\xF3n. Preferimos presentar pocas opciones bien analizadas que un cat\xE1logo interminable."), /*#__PURE__*/React.createElement("p", {
      className: "k-prose"
    }, "Cada asesor trabaja una zona espec\xEDfica, conoce su oferta y sus precios reales, y acompa\xF1a al cliente hasta la entrega de llaves.")))), /*#__PURE__*/React.createElement("section", {
      className: "k-section k-white k-bt"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, /*#__PURE__*/React.createElement(MX.SectionHeader, {
      eyebrow: "Historia",
      title: "Diez a\xF1os de oficio",
      description: "Contenido de demostraci\xF3n."
    }), /*#__PURE__*/React.createElement("ol", {
      className: "k-timeline"
    }, HISTORY.map(([y, t]) => /*#__PURE__*/React.createElement("li", {
      key: y
    }, /*#__PURE__*/React.createElement("b", null, y), /*#__PURE__*/React.createElement("span", null, t)))))), /*#__PURE__*/React.createElement("section", {
      className: "k-section k-dark"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, /*#__PURE__*/React.createElement(MX.SectionHeader, {
      tone: "dark",
      eyebrow: "Metodolog\xEDa",
      title: "C\xF3mo trabajamos"
    }), /*#__PURE__*/React.createElement("ol", {
      className: "k-process k-mt",
      style: {
        gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))'
      }
    }, METHOD.map(([t, x], i) => /*#__PURE__*/React.createElement("li", {
      key: t
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-process__n"
    }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, x)))))), /*#__PURE__*/React.createElement("section", {
      className: "k-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, /*#__PURE__*/React.createElement(MX.SectionHeader, {
      eyebrow: "Valores",
      title: "Lo que no negociamos"
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-values k-mt"
    }, VALUES.map(([i, t, x]) => /*#__PURE__*/React.createElement(Reveal, {
      key: t
    }, /*#__PURE__*/React.createElement(MX.Icon, {
      name: i,
      size: 28,
      strokeWidth: 1.25
    }), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, x)))))), /*#__PURE__*/React.createElement("section", {
      className: "k-section k-white k-bt"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, /*#__PURE__*/React.createElement(MX.SectionHeader, {
      eyebrow: "Equipo",
      title: "Asesores Mextas"
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-team k-mt"
    }, D.agents.map(a => /*#__PURE__*/React.createElement("div", {
      key: a.id,
      className: "k-member"
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-avatar k-avatar--lg"
    }, a.initials), /*#__PURE__*/React.createElement("b", null, a.name), /*#__PURE__*/React.createElement("small", null, a.role), /*#__PURE__*/React.createElement(MX.Button, {
      size: "sm",
      variant: "outline",
      iconLeft: "Mail",
      onClick: () => openModal('contact', {
        channel: 'general'
      })
    }, "Contactar")))))), /*#__PURE__*/React.createElement("section", {
      className: "k-section k-dark"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, /*#__PURE__*/React.createElement(StatsRow, null), /*#__PURE__*/React.createElement("p", {
      className: "k-demo-note"
    }, "Cifras demostrativas para este prototipo."))), /*#__PURE__*/React.createElement("section", {
      className: "k-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-cta"
    }, /*#__PURE__*/React.createElement("h2", null, "\xBFBuscas comprar, vender o invertir?"), /*#__PURE__*/React.createElement("p", null, "Te asignamos un asesor especializado en la zona que te interesa."), /*#__PURE__*/React.createElement("div", {
      className: "k-hero__ctas"
    }, /*#__PURE__*/React.createElement(MX.Button, {
      variant: "dark",
      size: "lg",
      iconRight: "ArrowRight",
      href: "#/contacto"
    }, "Hablar con un asesor"), /*#__PURE__*/React.createElement(MX.Button, {
      variant: "outline",
      size: "lg",
      href: "#/vender"
    }, "Vender mi propiedad")))));
  }
  function Sell() {
    const D = window.MXData;
    const {
      openModal
    } = useApp();
    const REASONS = [['Calculator', 'Valuación', 'Opinión de valor basada en comparables reales de tu zona.'], ['Sparkles', 'Marketing premium', 'Presentación editorial y campañas segmentadas por perfil de comprador.'], ['Camera', 'Fotografía profesional', 'Fotografía arquitectónica, video y recorrido virtual.'], ['Globe', 'Difusión', 'Publicación en Mextas, portales principales y red de asesores aliados.'], ['Users', 'Acompañamiento', 'Un asesor dedicado de principio a fin.'], ['Handshake', 'Negociación', 'Filtramos ofertas y negociamos con base en datos.']];
    const PROCESS = [['Conocemos tu propiedad', 'Visita, levantamiento y revisión de documentos.'], ['Analizamos el mercado', 'Comparables, demanda y tiempo estimado de venta.'], ['Diseñamos la estrategia', 'Precio de salida, público objetivo y canales.'], ['Publicamos', 'Fotografía, ficha editorial y lanzamiento.'], ['Encontramos compradores', 'Visitas calificadas y seguimiento semanal.'], ['Cerramos contigo', 'Negociación, due diligence y firma ante notario.']];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
      className: "k-hero k-hero--page",
      "aria-label": "Vender con Mextas"
    }, /*#__PURE__*/React.createElement("img", {
      className: "k-hero__img",
      src: D.IMG.interior,
      alt: "Interior de residencia con iluminaci\xF3n c\xE1lida"
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-hero__shade"
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide k-hero__content"
    }, /*#__PURE__*/React.createElement("p", {
      className: "k-eyebrow k-fadeup"
    }, "Vender con Mextas"), /*#__PURE__*/React.createElement("h1", {
      className: "k-fadeup",
      style: {
        animationDelay: '100ms'
      }
    }, "Vende tu propiedad con la ", /*#__PURE__*/React.createElement("em", null, "presentaci\xF3n que merece.")), /*#__PURE__*/React.createElement("p", {
      className: "k-hero__lead k-fadeup",
      style: {
        animationDelay: '200ms'
      }
    }, "Conoce el valor de tu propiedad y llega a m\xE1s compradores calificados."), /*#__PURE__*/React.createElement("div", {
      className: "k-hero__ctas k-fadeup",
      style: {
        animationDelay: '300ms'
      }
    }, /*#__PURE__*/React.createElement(MX.Button, {
      size: "lg",
      iconRight: "ArrowRight",
      onClick: () => openModal('seller', {
        valuation: true
      })
    }, "Solicitar valuaci\xF3n"), /*#__PURE__*/React.createElement(MX.Button, {
      size: "lg",
      variant: "outline-inverse",
      onClick: () => scrollToId('proceso')
    }, "Ver el proceso")))), /*#__PURE__*/React.createElement("section", {
      className: "k-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(MX.SectionHeader, {
      eyebrow: "Propietarios",
      title: "\xBFPor qu\xE9 vender con Mextas?"
    })), /*#__PURE__*/React.createElement(Reveal, {
      className: "k-mt"
    }, /*#__PURE__*/React.createElement(SvcGrid, {
      items: REASONS.map(([icon, title, text]) => ({
        icon,
        title,
        text
      }))
    })))), /*#__PURE__*/React.createElement("section", {
      className: "k-section k-dark",
      id: "proceso"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, /*#__PURE__*/React.createElement(MX.SectionHeader, {
      tone: "dark",
      eyebrow: "Proceso",
      title: "Seis pasos, un solo equipo"
    }), /*#__PURE__*/React.createElement("ol", {
      className: "k-process k-mt"
    }, PROCESS.map(([t, x], i) => /*#__PURE__*/React.createElement("li", {
      key: t
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-process__n"
    }, i + 1), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, x)))))), /*#__PURE__*/React.createElement("section", {
      className: "k-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide k-split"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "k-eyebrow"
    }, "Empieza hoy"), /*#__PURE__*/React.createElement("h2", null, "Cu\xE9ntanos sobre tu propiedad"), /*#__PURE__*/React.createElement("p", {
      className: "k-split__text"
    }, "Con estos datos preparamos una primera opini\xF3n de valor y agendamos la visita."), /*#__PURE__*/React.createElement("ul", {
      className: "k-checks"
    }, ['Valuación inicial sin costo', 'Respuesta en menos de 24 horas', 'Sin exclusividad obligatoria en la primera reunión'].map(x => /*#__PURE__*/React.createElement("li", {
      key: x
    }, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "Check",
      size: 16
    }), x)))), /*#__PURE__*/React.createElement("div", {
      className: "k-card"
    }, /*#__PURE__*/React.createElement("h3", null, "Datos de la propiedad"), /*#__PURE__*/React.createElement("p", null, "Todos los campos marcados con * son obligatorios."), /*#__PURE__*/React.createElement(SellerForm, {
      inline: true,
      valuation: true
    })))));
  }
  function Contact() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Contacto",
      title: "Hablemos de tu pr\xF3xima propiedad",
      crumbs: [{
        label: 'Inicio',
        href: '#/'
      }, {
        label: 'Contacto'
      }],
      text: "Escr\xEDbenos o vis\xEDtanos. Un asesor te responde en menos de 2 horas h\xE1biles."
    }), /*#__PURE__*/React.createElement("section", {
      className: "k-section k-pt0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide k-contact"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "k-info"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "Phone",
      size: 20
    }), /*#__PURE__*/React.createElement("small", null, "Tel\xE9fono"), /*#__PURE__*/React.createElement("a", {
      href: "tel:+523312345678"
    }, "33 1234 5678"), /*#__PURE__*/React.createElement("span", null, "Tambi\xE9n por WhatsApp")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "Mail",
      size: 20
    }), /*#__PURE__*/React.createElement("small", null, "Correo"), /*#__PURE__*/React.createElement("a", {
      href: "mailto:hola@mextas.mx"
    }, "hola@mextas.mx"), /*#__PURE__*/React.createElement("span", null, "Respuesta el mismo d\xEDa")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "Clock",
      size: 20
    }), /*#__PURE__*/React.createElement("small", null, "Horarios"), /*#__PURE__*/React.createElement("b", null, "Lun \u2013 Vie \xB7 9:00 \u2013 19:00"), /*#__PURE__*/React.createElement("span", null, "S\xE1b \xB7 10:00 \u2013 14:00")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "MapPin",
      size: 20
    }), /*#__PURE__*/React.createElement("small", null, "Oficinas"), /*#__PURE__*/React.createElement("b", null, "Guadalajara \xB7 Monterrey \xB7 CDMX"), /*#__PURE__*/React.createElement("span", null, "Visitas con cita"))), /*#__PURE__*/React.createElement(MockMap, {
      label: "Oficina Guadalajara \xB7 Av. Patria, Zapopan"
    })), /*#__PURE__*/React.createElement("div", {
      className: "k-card"
    }, /*#__PURE__*/React.createElement("h3", null, "Env\xEDanos un mensaje"), /*#__PURE__*/React.createElement("p", null, "Selecciona el tipo de consulta para canalizarte con el \xE1rea correcta."), /*#__PURE__*/React.createElement(ContactForm, {
      inline: true,
      showType: true,
      channel: "general"
    })))));
  }
  function Blog() {
    const D = window.MXData;
    const [cat, setCat] = useState('Todos');
    const cats = ['Todos', ...new Set(D.posts.map(p => p.category))];
    const list = D.posts.filter(p => cat === 'Todos' || p.category === cat);
    const [first, ...rest] = list;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Blog Mextas",
      title: "Consejos para tomar mejores decisiones inmobiliarias",
      crumbs: [{
        label: 'Inicio',
        href: '#/'
      }, {
        label: 'Blog'
      }]
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-chiprow",
      style: {
        marginTop: 28
      }
    }, cats.map(c => /*#__PURE__*/React.createElement(MX.Chip, {
      key: c,
      selected: cat === c,
      onClick: () => setCat(c)
    }, c)))), /*#__PURE__*/React.createElement("section", {
      className: "k-section k-pt0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, first ? /*#__PURE__*/React.createElement("a", {
      className: "k-post k-blog-feature",
      href: '#/blog/' + first.slug
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-post__img"
    }, /*#__PURE__*/React.createElement("img", {
      src: first.image,
      alt: ""
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("p", {
      className: "k-post__meta"
    }, first.category, " \xB7 ", first.read, " \xB7 ", first.date), /*#__PURE__*/React.createElement("h3", null, first.title), /*#__PURE__*/React.createElement("p", null, first.excerpt), /*#__PURE__*/React.createElement("span", {
      className: "k-post__cta"
    }, "Leer art\xEDculo", /*#__PURE__*/React.createElement(MX.Icon, {
      name: "ArrowRight",
      size: 14
    })))) : null, rest.length ? /*#__PURE__*/React.createElement("div", {
      className: "k-grid k-grid--3"
    }, rest.map(p => /*#__PURE__*/React.createElement(PostCard, {
      key: p.slug,
      post: p
    }))) : null)));
  }
  function BlogPost({
    slug
  }) {
    const D = window.MXData;
    const post = D.posts.find(p => p.slug === slug);
    if (!post) return /*#__PURE__*/React.createElement(NotFound, {
      what: "publicaci\xF3n"
    });
    const more = D.posts.filter(p => p.slug !== slug).slice(0, 3);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
      className: "k-pagehead"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container"
    }, /*#__PURE__*/React.createElement("article", {
      className: "k-article"
    }, /*#__PURE__*/React.createElement(MX.Breadcrumbs, {
      items: [{
        label: 'Inicio',
        href: '#/'
      }, {
        label: 'Blog',
        href: '#/blog'
      }, {
        label: post.title
      }]
    }), /*#__PURE__*/React.createElement("p", {
      className: "k-eyebrow"
    }, post.category), /*#__PURE__*/React.createElement("h1", null, post.title), /*#__PURE__*/React.createElement("p", {
      className: "k-lead"
    }, post.excerpt), /*#__PURE__*/React.createElement("div", {
      className: "k-article__meta",
      style: {
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement("span", null, post.date), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, post.read, " de lectura"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Equipo Mextas")), /*#__PURE__*/React.createElement("div", {
      className: "k-article__img"
    }, /*#__PURE__*/React.createElement("img", {
      src: post.image,
      alt: ""
    })), post.body.map((t, i) => /*#__PURE__*/React.createElement("p", {
      key: i,
      className: "k-prose",
      style: {
        fontSize: 17
      }
    }, t)), /*#__PURE__*/React.createElement("div", {
      className: "k-note"
    }, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "MessagesSquare",
      size: 18
    }), "\xBFTienes dudas sobre tu caso? ", /*#__PURE__*/React.createElement("a", {
      href: "#/contacto"
    }, "Habla con un asesor \u2192"))))), /*#__PURE__*/React.createElement("section", {
      className: "k-section k-white k-bt"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, /*#__PURE__*/React.createElement(MX.SectionHeader, {
      eyebrow: "Sigue leyendo",
      title: "M\xE1s gu\xEDas"
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-grid k-grid--3 k-mt"
    }, more.map(p => /*#__PURE__*/React.createElement(PostCard, {
      key: p.slug,
      post: p
    }))))));
  }
  Object.assign(window, {
    Services,
    About,
    Sell,
    Contact,
    Blog,
    BlogPost
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/shell.jsx
try { (() => {
(() => {
  const {
    useState,
    useEffect,
    useRef,
    useMemo
  } = React;
  const MX = window.MX;
  const NAV = [['/', 'Inicio'], ['/propiedades', 'Propiedades'], ['/desarrollos', 'Desarrollos'], ['/servicios', 'Servicios'], ['/nosotros', 'Nosotros'], ['/contacto', 'Contacto']];
  const TRUST = [['ShieldCheck', 'Propiedades verificadas', '100% confiables'], ['Headset', 'Asesoría personalizada', 'Expertos a tu servicio'], ['TrendingUp', 'Inversión segura', 'Plusvalía garantizada'], ['Gem', 'Atención premium', 'Acompañamiento total']];
  const STATS = [['+500', 'Propiedades', 'disponibles'], ['+10', 'Años de', 'experiencia'], ['+1,200', 'Clientes', 'satisfechos'], ['+30', 'Zonas premium', 'en México']];
  const isHeroRoute = r => r.path === '/' || r.path === '/vender' || r.path === '/nosotros' || r.parts[0] === 'desarrollos' && !!r.parts[1];
  const isActive = (route, to) => to === '/' ? route.path === '/' : route.path.startsWith(to);
  function Header() {
    const {
      route,
      favs,
      openModal
    } = useApp();
    const [scrolled, setScrolled] = useState(false);
    const [menu, setMenu] = useState(false);
    useEffect(() => {
      const on = () => setScrolled(window.scrollY > 40);
      on();
      window.addEventListener('scroll', on, {
        passive: true
      });
      return () => window.removeEventListener('scroll', on);
    }, []);
    useEffect(() => setMenu(false), [route.path]);
    const top = isHeroRoute(route) && !scrolled;
    const mnav = [...NAV, ['/vender', 'Vender'], ['/blog', 'Blog'], ['/favoritos', 'Favoritos (' + favs.length + ')']];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
      className: 'k-header ' + (top ? 'is-top' : 'is-solid')
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide k-header__in"
    }, /*#__PURE__*/React.createElement(MX.Logo, {
      tone: "light",
      size: "sm",
      href: "#/"
    }), /*#__PURE__*/React.createElement("nav", {
      className: "k-nav",
      "aria-label": "Principal"
    }, NAV.map(([to, l]) => /*#__PURE__*/React.createElement("a", {
      key: to,
      href: '#' + to,
      className: isActive(route, to) ? 'is-active' : '',
      "aria-current": isActive(route, to) ? 'page' : undefined
    }, l))), /*#__PURE__*/React.createElement("div", {
      className: "k-header__right"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#/favoritos",
      className: "k-favlink",
      "aria-label": 'Favoritos, ' + favs.length + ' guardadas'
    }, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "Heart",
      size: 17,
      fill: favs.length ? 'currentColor' : 'none',
      color: favs.length ? 'var(--accent)' : 'currentColor'
    }), /*#__PURE__*/React.createElement("span", {
      className: "k-favtext"
    }, "Favoritos"), favs.length ? /*#__PURE__*/React.createElement("span", {
      key: favs.length,
      className: "k-count"
    }, favs.length) : null), /*#__PURE__*/React.createElement(MX.Button, {
      size: "sm",
      className: "k-header__cta",
      onClick: () => openModal('contact', {
        channel: 'general'
      })
    }, "Consultar propiedad"), /*#__PURE__*/React.createElement(MX.IconButton, {
      className: "k-menu-btn",
      icon: "Menu",
      label: "Abrir men\xFA",
      variant: "ghost",
      onClick: () => setMenu(true)
    })))), /*#__PURE__*/React.createElement(MX.Dialog, {
      open: menu,
      onClose: () => setMenu(false),
      placement: "full",
      tone: "dark",
      hideClose: true
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-mmenu"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-mmenu__top"
    }, /*#__PURE__*/React.createElement(MX.Logo, {
      tone: "light",
      size: "sm"
    }), /*#__PURE__*/React.createElement(MX.IconButton, {
      icon: "X",
      label: "Cerrar men\xFA",
      variant: "ghost",
      onClick: () => setMenu(false)
    })), /*#__PURE__*/React.createElement("nav", {
      "aria-label": "Men\xFA m\xF3vil"
    }, mnav.map(([to, l]) => /*#__PURE__*/React.createElement("a", {
      key: to,
      href: '#' + to,
      className: isActive(route, to) ? 'is-active' : '',
      onClick: () => setMenu(false)
    }, l, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "ArrowRight",
      size: 18
    })))), /*#__PURE__*/React.createElement(MX.Button, {
      fullWidth: true,
      size: "lg",
      onClick: () => {
        setMenu(false);
        openModal('contact', {
          channel: 'general'
        });
      }
    }, "Consultar propiedad"))));
  }
  function Footer() {
    const {
      openModal,
      toast
    } = useApp();
    const col = (t, items) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, t), /*#__PURE__*/React.createElement("ul", null, items.map(([l, h]) => /*#__PURE__*/React.createElement("li", {
      key: l
    }, typeof h === 'function' ? /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "k-linkbtn",
      onClick: h
    }, l) : /*#__PURE__*/React.createElement("a", {
      href: h
    }, l)))));
    const social = l => toast({
      icon: 'Globe',
      title: l + ' · Mextas',
      message: 'Perfil de demostración: los enlaces sociales se conectan al publicar el sitio.'
    });
    return /*#__PURE__*/React.createElement("footer", {
      className: "k-footer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-footer__grid"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-footer__brand"
    }, /*#__PURE__*/React.createElement(MX.Logo, {
      tone: "light"
    }), /*#__PURE__*/React.createElement("p", null, "Conectamos personas con oportunidades", /*#__PURE__*/React.createElement("br", null), "inmobiliarias \xFAnicas. Asesor\xEDa experta,", /*#__PURE__*/React.createElement("br", null), "transparente y personalizada."), /*#__PURE__*/React.createElement("div", {
      className: "k-social"
    }, [['Facebook', 'Facebook'], ['Instagram', 'Instagram'], ['Linkedin', 'LinkedIn']].map(([i, l]) => /*#__PURE__*/React.createElement("button", {
      key: l,
      type: "button",
      "aria-label": l,
      onClick: () => social(l)
    }, /*#__PURE__*/React.createElement(MX.Icon, {
      name: i,
      size: 16
    }))))), col('Navegación', NAV.map(([to, l]) => [l, '#' + to])), col('Tipo de propiedad', [['Casas', '#/propiedades?tipo=Casa'], ['Departamentos', '#/propiedades?tipo=Departamento'], ['Terrenos', '#/propiedades?tipo=Terreno'], ['Oficinas', '#/propiedades?tipo=Oficina'], ['Locales', '#/propiedades?tipo=Local'], ['Desarrollos', '#/desarrollos']]), col('Información', [['Blog', '#/blog'], ['Guía de compra', '#/blog/que-revisar-antes-de-comprar-una-casa'], ['Guía de venta', '#/vender'], ['Términos y condiciones', () => openModal('legal', {
      doc: 'terminos'
    })], ['Aviso de privacidad', () => openModal('legal', {
      doc: 'privacidad'
    })]]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Contacto"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "tel:+523312345678"
    }, "33 1234 5678")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "mailto:hola@mextas.mx"
    }, "hola@mextas.mx")), /*#__PURE__*/React.createElement("li", null, "Lun \u2013 Vie \xB7 9:00 \u2013 19:00"), /*#__PURE__*/React.createElement("li", null, "S\xE1b \xB7 10:00 \u2013 14:00")))), /*#__PURE__*/React.createElement("div", {
      className: "k-footer__bottom"
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Mextas Inmobiliaria"), /*#__PURE__*/React.createElement("span", null, "Sitio de demostraci\xF3n \xB7 propiedades y cifras ficticias"))));
  }
  function PageHead({
    eyebrow,
    title,
    text,
    crumbs,
    children
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "k-pagehead"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-container k-wide"
    }, crumbs ? /*#__PURE__*/React.createElement(MX.Breadcrumbs, {
      items: crumbs
    }) : null, eyebrow ? /*#__PURE__*/React.createElement("p", {
      className: "k-eyebrow"
    }, eyebrow) : null, /*#__PURE__*/React.createElement("h1", null, title), text ? /*#__PURE__*/React.createElement("p", {
      className: "k-lead"
    }, text) : null, children));
  }
  function PCard({
    p,
    layout,
    eager
  }) {
    const {
      navigate,
      isFav,
      toggleFav,
      isCmp,
      toggleCompare,
      cmp
    } = useApp();
    const cp = {
      ...p,
      beds: p.beds || undefined,
      baths: p.baths || undefined
    };
    return /*#__PURE__*/React.createElement(MX.PropertyCard, {
      property: cp,
      layout: layout,
      eager: eager,
      href: '#/propiedades/' + p.slug,
      onOpen: () => navigate('/propiedades/' + p.slug),
      favorite: isFav(p),
      onToggleFavorite: () => toggleFav(p),
      compared: isCmp(p),
      onToggleCompare: () => toggleCompare(p),
      compareDisabled: cmp.length >= 3
    });
  }
  function PostCard({
    post
  }) {
    return /*#__PURE__*/React.createElement("a", {
      className: "k-post",
      href: '#/blog/' + post.slug
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-post__img"
    }, /*#__PURE__*/React.createElement("img", {
      src: post.image,
      alt: "",
      loading: "lazy"
    })), /*#__PURE__*/React.createElement("p", {
      className: "k-post__meta"
    }, post.category, " \xB7 ", post.read), /*#__PURE__*/React.createElement("h3", null, post.title), /*#__PURE__*/React.createElement("p", null, post.excerpt), /*#__PURE__*/React.createElement("span", {
      className: "k-post__cta"
    }, "Leer art\xEDculo", /*#__PURE__*/React.createElement(MX.Icon, {
      name: "ArrowRight",
      size: 14
    })));
  }
  function StatsRow({
    tone = 'dark'
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: 'k-stats' + (tone === 'light' ? ' k-stats--light' : '')
    }, STATS.map(([v, a, b]) => /*#__PURE__*/React.createElement(MX.StatBlock, {
      key: v,
      value: v,
      tone: tone,
      label: /*#__PURE__*/React.createElement(React.Fragment, null, a, /*#__PURE__*/React.createElement("br", null), b)
    })));
  }
  const normTxt = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  function LocationAutocomplete({
    value,
    onChange,
    label = 'Ubicación',
    id = 'loc',
    size,
    placeholder = 'Ciudad, zona o colonia'
  }) {
    const D = window.MXData;
    const [q, setQ] = useState('');
    const [open, setOpen] = useState(false);
    const [hi, setHi] = useState(0);
    const ref = useRef(null);
    const inp = useRef(null);
    const list = useMemo(() => {
      const n = normTxt(q);
      return (n ? D.suggestions.filter(s => normTxt(s.label + ' ' + s.sub).includes(n)) : D.suggestions.slice(0, 6)).slice(0, 7);
    }, [q]);
    useEffect(() => {
      if (!open) return;
      const h = e => {
        if (ref.current && !ref.current.contains(e.target)) setOpen(false);
      };
      document.addEventListener('mousedown', h);
      return () => document.removeEventListener('mousedown', h);
    }, [open]);
    const sel = value ? D.suggestions.find(s => s.value === value) || {
      value,
      label: locLabel(value),
      sub: ''
    } : null;
    const choose = s => {
      onChange(s.value);
      setQ('');
      setOpen(false);
    };
    const onKey = e => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setOpen(true);
        setHi(h => Math.min(list.length - 1, h + 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHi(h => Math.max(0, h - 1));
      } else if (e.key === 'Enter' && open && list[hi]) {
        e.preventDefault();
        choose(list[hi]);
      } else if (e.key === 'Escape') setOpen(false);
    };
    return /*#__PURE__*/React.createElement(MX.Field, {
      label: label,
      htmlFor: id
    }, /*#__PURE__*/React.createElement("div", {
      ref: ref,
      className: 'k-ac mx-input' + (size === 'sm' ? ' mx-input--sm' : '')
    }, sel ? /*#__PURE__*/React.createElement(MX.Chip, {
      icon: "MapPin",
      removeLabel: "Quitar ubicaci\xF3n",
      onRemove: () => {
        onChange('');
        setTimeout(() => inp.current && inp.current.focus(), 30);
      }
    }, sel.label, sel.sub ? /*#__PURE__*/React.createElement("span", {
      className: "k-ac__sub"
    }, " \xB7 ", sel.sub) : null) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "MapPin",
      size: 16,
      className: "mx-input__icon"
    }), /*#__PURE__*/React.createElement("input", {
      ref: inp,
      id: id,
      value: q,
      placeholder: placeholder,
      autoComplete: "off",
      role: "combobox",
      "aria-expanded": open,
      "aria-controls": id + '-list',
      "aria-autocomplete": "list",
      onChange: e => {
        setQ(e.target.value);
        setOpen(true);
        setHi(0);
      },
      onFocus: () => setOpen(true),
      onKeyDown: onKey
    })), open && !sel ? /*#__PURE__*/React.createElement("ul", {
      id: id + '-list',
      role: "listbox",
      className: "k-ac__list"
    }, list.length ? list.map((s, i) => /*#__PURE__*/React.createElement("li", {
      key: s.value + s.label,
      role: "option",
      "aria-selected": i === hi,
      className: 'k-ac__item' + (i === hi ? ' is-hi' : ''),
      onMouseEnter: () => setHi(i),
      onMouseDown: e => {
        e.preventDefault();
        choose(s);
      }
    }, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "MapPin",
      size: 15
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, s.label), /*#__PURE__*/React.createElement("small", null, s.sub)))) : /*#__PURE__*/React.createElement("li", {
      className: "k-ac__none"
    }, "Sin coincidencias para \u201C", q, "\u201D")) : null));
  }
  const RENT_PRICES = [{
    value: '20000',
    label: 'Hasta $20,000 / mes'
  }, {
    value: '40000',
    label: 'Hasta $40,000 / mes'
  }, {
    value: '80000',
    label: 'Hasta $80,000 / mes'
  }, {
    value: '150000',
    label: 'Hasta $150,000 / mes'
  }, {
    value: '',
    label: 'Sin límite'
  }];
  function PropertySearch() {
    const {
      navigate
    } = useApp();
    const D = window.MXData;
    const [tab, setTab] = useState('comprar');
    const [loc, setLoc] = useState('');
    const [tipo, setTipo] = useState(null);
    const [precio, setPrecio] = useState(null);
    const [rec, setRec] = useState(null);
    const submit = e => {
      e.preventDefault();
      if (tab === 'desarrollos' || tipo === 'Desarrollo') {
        navigate('/desarrollos' + (loc ? '?ubicacion=' + loc : ''));
        return;
      }
      navigate('/propiedades' + filtersToQuery({
        op: tab === 'rentar' ? 'renta' : 'venta',
        ubicacion: loc,
        tipo,
        precio,
        rec,
        amen: []
      }));
    };
    return /*#__PURE__*/React.createElement("form", {
      className: "k-search",
      onSubmit: submit,
      role: "search",
      "aria-label": "Buscar propiedades"
    }, /*#__PURE__*/React.createElement(MX.Tabs, {
      label: "Operaci\xF3n",
      value: tab,
      onChange: v => {
        setTab(v);
        setPrecio(null);
      },
      items: [{
        value: 'comprar',
        label: 'Comprar'
      }, {
        value: 'rentar',
        label: 'Rentar'
      }, {
        value: 'desarrollos',
        label: 'Desarrollos'
      }]
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-search__grid"
    }, /*#__PURE__*/React.createElement(LocationAutocomplete, {
      id: "hs-loc",
      value: loc,
      onChange: setLoc
    }), /*#__PURE__*/React.createElement(MX.Select, {
      label: "Tipo de propiedad",
      placeholder: "Selecciona tipo",
      value: tipo,
      onChange: setTipo,
      options: [{
        value: '',
        label: 'Todos los tipos'
      }, ...D.types.map(t => ({
        value: t,
        label: t
      }))]
    }), /*#__PURE__*/React.createElement(MX.Select, {
      label: "Precio m\xE1ximo",
      placeholder: "Sin l\xEDmite",
      value: precio,
      onChange: setPrecio,
      options: tab === 'rentar' ? RENT_PRICES : D.priceOptions
    }), /*#__PURE__*/React.createElement(MX.Select, {
      label: "Rec\xE1maras",
      placeholder: "Cualquiera",
      value: rec,
      onChange: setRec,
      options: D.bedOptions
    }), /*#__PURE__*/React.createElement(MX.Button, {
      type: "submit",
      variant: "dark",
      iconRight: "Search",
      className: "k-search__btn"
    }, "Buscar propiedades")));
  }
  function MockMap({
    p,
    label
  }) {
    const [z, setZ] = useState(1);
    const name = label || p && p.location;
    return /*#__PURE__*/React.createElement("div", {
      className: "k-map",
      role: "img",
      "aria-label": 'Mapa ilustrativo: ' + name,
      style: {
        '--z': z
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-map__roads"
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-map__park"
    }), /*#__PURE__*/React.createElement("span", {
      className: "k-map__radius"
    }), /*#__PURE__*/React.createElement("span", {
      className: "k-map__pin"
    }, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "MapPin",
      size: 30,
      fill: "var(--mx-ink-900)",
      color: "var(--mx-champagne-400)",
      strokeWidth: 1.6
    })), /*#__PURE__*/React.createElement("div", {
      className: "k-map__card"
    }, /*#__PURE__*/React.createElement("b", null, name), /*#__PURE__*/React.createElement("small", null, p ? 'Ubicación aproximada · ' + p.lat.toFixed(3) + ', ' + p.lng.toFixed(3) : 'Mapa ilustrativo')), /*#__PURE__*/React.createElement("div", {
      className: "k-map__zoom"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "Acercar",
      onClick: () => setZ(v => Math.min(1.8, v + 0.2))
    }, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "Plus",
      size: 15
    })), /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "Alejar",
      onClick: () => setZ(v => Math.max(0.8, v - 0.2))
    }, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "Minus",
      size: 15
    }))));
  }
  function Success({
    title,
    text,
    children,
    action
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "k-success",
      role: "status"
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-success__icon"
    }, /*#__PURE__*/React.createElement(MX.Icon, {
      name: "Check",
      size: 26
    })), /*#__PURE__*/React.createElement("h3", null, title), text ? /*#__PURE__*/React.createElement("p", null, text) : null, children, action ? /*#__PURE__*/React.createElement("div", {
      className: "k-success__act"
    }, action) : null);
  }
  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 80,
      behavior: 'smooth'
    });
  }
  Object.assign(window, {
    Header,
    Footer,
    PageHead,
    PCard,
    PostCard,
    StatsRow,
    LocationAutocomplete,
    PropertySearch,
    MockMap,
    Success,
    scrollToId,
    isHeroRoute,
    MX_TRUST: TRUST
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/store.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* App state: hash router, favorites, compare, toasts, modals. */
const {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useContext,
  createContext
} = React;
const AppCtx = createContext(null);
const useApp = () => useContext(AppCtx);
function parseHash() {
  const h = location.hash.replace(/^#/, '') || '/';
  const [path, qs] = h.split('?');
  return {
    path: path || '/',
    parts: (path || '/').split('/').filter(Boolean),
    query: new URLSearchParams(qs || '')
  };
}
const readLS = (k, d) => {
  try {
    const v = JSON.parse(localStorage.getItem(k));
    return v == null ? d : v;
  } catch (e) {
    return d;
  }
};
function AppProvider({
  children
}) {
  const D = window.MXData;
  const [route, setRoute] = useState(parseHash);
  const [favs, setFavs] = useState(() => readLS('mextas:favs', ['casa-en-valle-real', 'penthouse-en-cabo']));
  const [cmp, setCmp] = useState(() => readLS('mextas:compare', []));
  const [toasts, setToasts] = useState([]);
  const [modal, setModal] = useState(null);
  useEffect(() => {
    const on = () => {
      const r = parseHash();
      setRoute(prev => {
        if (prev.path !== r.path) window.scrollTo(0, 0);
        return r;
      });
    };
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  useEffect(() => {
    localStorage.setItem('mextas:favs', JSON.stringify(favs));
  }, [favs]);
  useEffect(() => {
    localStorage.setItem('mextas:compare', JSON.stringify(cmp));
  }, [cmp]);
  const navigate = useCallback((to, opts) => {
    if (opts && opts.replace) {
      history.replaceState(null, '', '#' + to);
      setRoute(parseHash());
    } else location.hash = to;
  }, []);
  const toast = useCallback(t => {
    const id = Date.now() + Math.random();
    setToasts(l => [...l.slice(-2), {
      id,
      ...t
    }]);
    setTimeout(() => setToasts(l => l.filter(x => x.id !== id)), 4200);
  }, []);
  const dismiss = useCallback(id => setToasts(l => l.filter(t => t.id !== id)), []);
  const toggleFav = p => {
    const on = favs.includes(p.slug);
    setFavs(on ? favs.filter(s => s !== p.slug) : [...favs, p.slug]);
    toast(on ? {
      title: 'Eliminada de favoritos',
      message: p.title,
      icon: 'HeartOff'
    } : {
      tone: 'favorite',
      title: 'Guardada en favoritos',
      message: p.title,
      action: /*#__PURE__*/React.createElement("a", {
        className: "k-toast-link",
        href: "#/favoritos"
      }, "Ver")
    });
  };
  const toggleCompare = p => {
    if (cmp.includes(p.slug)) {
      setCmp(cmp.filter(s => s !== p.slug));
      return;
    }
    if (cmp.length >= 3) {
      toast({
        tone: 'error',
        title: 'Máximo 3 propiedades',
        message: 'Quita una para agregar otra al comparador.'
      });
      return;
    }
    setCmp([...cmp, p.slug]);
    if (cmp.length === 0) toast({
      icon: 'Scale',
      title: 'Agregada al comparador',
      message: 'Selecciona al menos una propiedad más.'
    });
  };
  const bySlug = useMemo(() => Object.fromEntries(D.properties.map(p => [p.slug, p])), []);
  const value = {
    route,
    navigate,
    favs,
    isFav: p => favs.includes(p.slug),
    toggleFav,
    cmp,
    isCmp: p => cmp.includes(p.slug),
    toggleCompare,
    clearCompare: () => setCmp([]),
    setCompareList: l => setCmp(l.slice(0, 3)),
    cmpItems: cmp.map(s => bySlug[s]).filter(Boolean),
    favItems: favs.map(s => bySlug[s]).filter(Boolean),
    bySlug,
    toasts,
    toast,
    dismiss,
    modal,
    openModal: (kind, props) => setModal({
      kind,
      props: props || {},
      id: Date.now()
    }),
    closeModal: () => setModal(null)
  };
  return /*#__PURE__*/React.createElement(AppCtx.Provider, {
    value: value
  }, children);
}
function useMedia(q) {
  const [m, setM] = useState(() => window.matchMedia(q).matches);
  useEffect(() => {
    const mq = window.matchMedia(q);
    const h = () => setM(mq.matches);
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, [q]);
  return m;
}
function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [inView, setIn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setIn(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setIn(true);
        io.disconnect();
      }
    }, {
      rootMargin: '0px 0px -6% 0px',
      threshold: 0.05
    });
    io.observe(el);
    const t = setTimeout(() => setIn(true), 2500);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: 'k-reveal ' + (inView ? 'is-in ' : '') + className,
    style: {
      transitionDelay: delay + 'ms'
    }
  }, rest), children);
}

/* Filtering shared by search, listings and categories */
function readFilters(q) {
  return {
    op: q.get('op') || '',
    ubicacion: q.get('ubicacion') || '',
    tipo: q.get('tipo') || '',
    precio: q.get('precio') || '',
    rec: q.get('rec') || '',
    banos: q.get('banos') || '',
    pmin: q.get('pmin') || '',
    pmax: q.get('pmax') || '',
    mmin: q.get('mmin') || '',
    mmax: q.get('mmax') || '',
    amen: (q.get('amen') || '').split(',').filter(Boolean),
    q: q.get('q') || '',
    sort: q.get('sort') || 'rel',
    view: q.get('view') || 'grid'
  };
}
function filtersToQuery(f) {
  const p = new URLSearchParams();
  Object.entries(f).forEach(([k, v]) => {
    if (Array.isArray(v)) {
      if (v.length) p.set(k, v.join(','));
    } else if (v && !(k === 'sort' && v === 'rel') && !(k === 'view' && v === 'grid')) p.set(k, v);
  });
  const s = p.toString();
  return s ? '?' + s : '';
}
function applyFilters(list, f) {
  const norm = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  let r = list.filter(p => {
    if (f.op && p.operation !== f.op) return false;
    if (f.ubicacion && !p.zones.includes(f.ubicacion)) return false;
    if (f.tipo && f.tipo !== 'Desarrollo' && p.type !== f.tipo) return false;
    const max = Number(f.pmax || f.precio || 0);
    if (max && p.price > max) return false;
    if (f.pmin && p.price < Number(f.pmin)) return false;
    if (f.rec && p.beds < Number(f.rec)) return false;
    if (f.banos && p.baths < Number(f.banos)) return false;
    if (f.mmin && p.area < Number(f.mmin)) return false;
    if (f.mmax && p.area > Number(f.mmax)) return false;
    if (f.amen.length && !f.amen.every(a => p.amenities.includes(a))) return false;
    if (f.q) {
      const n = norm(f.q);
      if (!norm(p.title + ' ' + p.location + ' ' + p.type + ' ' + p.zones.join(' ')).includes(n)) return false;
    }
    return true;
  });
  const s = {
    asc: (a, b) => a.price - b.price,
    desc: (a, b) => b.price - a.price,
    new: (a, b) => b.publishedAt.localeCompare(a.publishedAt),
    area: (a, b) => b.area - a.area
  };
  if (s[f.sort]) r = [...r].sort(s[f.sort]);else r = [...r].sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0));
  return r;
}
const locLabel = slug => {
  const D = window.MXData;
  const o = D.locationOptions.find(x => x.value === slug) || D.suggestions.find(x => x.value === slug);
  return o ? o.label : slug;
};
Object.assign(window, {
  AppProvider,
  useApp,
  useMedia,
  Reveal,
  readFilters,
  filtersToQuery,
  applyFilters,
  locLabel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/store.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.AmenityItem = __ds_scope.AmenityItem;

__ds_ns.CategoryTile = __ds_scope.CategoryTile;

__ds_ns.CompareTray = __ds_scope.CompareTray;

__ds_ns.LocationCard = __ds_scope.LocationCard;

__ds_ns.PropertyCard = __ds_scope.PropertyCard;

__ds_ns.PropertySpecs = __ds_scope.PropertySpecs;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.TrustItem = __ds_scope.TrustItem;

})();
