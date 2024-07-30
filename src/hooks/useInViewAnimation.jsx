import { useInView } from "react-intersection-observer";

const useInViewAnimation = () => {
  // Destructure the ref and inView state returned by the useInView hook
  const { ref, inView } = useInView({
    // Ensures the callback is only triggered once
    triggerOnce: true,
    // Defines the percentage of the target's visibility to trigger the callback
    threshold: 0.2,
  });

  // Return the ref and inView state
  return [ref, inView];
};

export default useInViewAnimation;
