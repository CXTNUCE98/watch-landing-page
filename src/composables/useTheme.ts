export const useTheme = () => {
  const colorMode = useColorMode() as any;
  const theme = computed({
    get: () => (colorMode.value === 'dark' ? 'dark' : 'light'),
    set: (val) => {
      colorMode.preference = val;
    },
  });

  const toggleTheme = (event?: MouseEvent) => {
    const x = event?.clientX ?? window.innerWidth / 2;
    const y = event?.clientY ?? window.innerHeight / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Fallback for browsers not supporting View Transitions
    if (!document.startViewTransition) {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
      return;
    }

    const transition = document.startViewTransition(() => {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        { clipPath },
        {
          duration: 500,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
  };

  return {
    theme,
    toggleTheme,
  };
};
