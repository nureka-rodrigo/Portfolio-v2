import {useInView} from 'react-intersection-observer';

const useInViewAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  return [ref, inView];
};

export default useInViewAnimation;