import {useInView} from 'react-intersection-observer';

const useInViewAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return [ref, inView];
};

export default useInViewAnimation;