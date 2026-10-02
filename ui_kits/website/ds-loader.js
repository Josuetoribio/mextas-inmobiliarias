/* Exposes Mextas DS components as window.MX (from the compiled bundle; dev fallback transpiles sources). */
(function () {
  var NS = 'MextasDesignSystem_8aabb9';
  window.MX = window.MX || {};
  if (window[NS] && window[NS].PropertyCard) { Object.assign(window.MX, window[NS]); window.MX_READY = Promise.resolve(); return; }
  var BASE = '../../components/';
  var FILES = ['core/Icon.jsx', 'core/Logo.jsx', 'core/Button.jsx', 'core/IconButton.jsx', 'core/Badge.jsx', 'core/Chip.jsx',
    'forms/Field.jsx', 'forms/Input.jsx', 'forms/Select.jsx', 'forms/Checkbox.jsx', 'forms/Radio.jsx', 'forms/Switch.jsx', 'forms/Slider.jsx',
    'navigation/Tabs.jsx', 'navigation/Breadcrumbs.jsx', 'feedback/Dialog.jsx', 'feedback/Toast.jsx', 'feedback/Tooltip.jsx', 'feedback/Skeleton.jsx', 'feedback/EmptyState.jsx',
    'realestate/format.js', 'realestate/PropertySpecs.jsx', 'realestate/PropertyCard.jsx', 'realestate/LocationCard.jsx', 'realestate/CategoryTile.jsx',
    'realestate/StatBlock.jsx', 'realestate/TrustItem.jsx', 'realestate/SectionHeader.jsx', 'realestate/AmenityItem.jsx', 'realestate/CompareTray.jsx'];
  var NAMES = 'Icon,Logo,Button,IconButton,Badge,Chip,Field,Input,Select,Checkbox,Radio,Switch,Slider,Tabs,Breadcrumbs,Dialog,Toast,ToastStack,Tooltip,Skeleton,EmptyState,PropertySpecs,PropertyCard,LocationCard,CategoryTile,StatBlock,TrustItem,SectionHeader,AmenityItem,CompareTray,formatMXN';
  window.MX_READY = Promise.all(FILES.map(function (f) { return fetch(BASE + f).then(function (r) { return r.text(); }); })).then(function (srcs) {
    var code = 'var {useState,useEffect,useRef,useId}=React;\n' + srcs.map(function (s) { return s.replace(/^import[^\n]*\n/gm, '').replace(/^export\s+/gm, ''); }).join('\n') + '\nObject.assign(window.MX,{' + NAMES + '});';
    (0, eval)(Babel.transform('(function(){' + code + '})();', { presets: ['react'] }).code);
  });
})();
