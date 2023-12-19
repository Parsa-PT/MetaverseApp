export const navVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 110,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 40,
        delay: 1.5,
      },
    },
  };
export const navcontent = {
    hidden: {
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 90,
        delay: 0.3,
      },
    },
  };

  

  type slideInProp = {
    direction : string,
    type : string,
    delay : number,
    duration : number,
  }
  
  export const slideIn = ({direction, type, delay, duration} : slideInProp) => ({
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  });

  type staggerContainerprop ={
    staggerChildren : number,
    delayChildren : number
  }
  
  export const staggerContainer = ({staggerChildren, delayChildren} : staggerContainerprop) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });

  type textVariantprop = {
    delay : number,
  }
  
  export const textVariant = ({delay} : textVariantprop) => ({
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay,
      },
    },
  });
  
  export const textContainer = {
    hidden: {
      opacity: 0,
    },
    show: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
  };
  
  export const textVariant2 = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        ease: 'easeIn',
      },
    },
  };



  
  export const fadeIn = ({direction, type, delay, duration} : slideInProp) => ({
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  });

  type planetVariantsProp ={
    direction : string
  }
  
  export const planetVariants = ({direction} : planetVariantsProp) => ({
    hidden: {
      x: direction === 'left' ? '-100%' : '100%',
      rotate: 120,
    },
    show: {
      x: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        duration: 1.8,
        delay: 0.5,
      },
    },
  });
  
  type zoomInProp ={
    delay: number,
    duration: number
  }

  export const zoomIn = ({delay, duration} : zoomInProp) => ({
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  });
  
  export const footerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        delay: 0.5,
      },
    },
  };