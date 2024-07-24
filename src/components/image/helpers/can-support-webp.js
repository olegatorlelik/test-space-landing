/**
 * Check if browser support webp
 */
const canSupportWebp = (() => {
  let isChecked;

  return () => {
    if (isChecked !== undefined) {
      return isChecked;
    }

    if (typeof document !== 'object') {
      return false;
    }

    const canvas = document.createElement('canvas');

    if (!canvas.getContext || !canvas.getContext('2d')) {
      isChecked = false;

      return isChecked;
    }

    isChecked = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;

    return isChecked;
  };
})();

export default canSupportWebp;
