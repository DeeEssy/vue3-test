export default {
  name: "intersection",
  mounted(el, binding) {
    const interSectionOptions = {
      threshold: 0.7,
    };
    const interSectionCallback = (entries, observer) => {
      if (entries[0].isIntersecting) binding.value();
    };
    const observer = new IntersectionObserver(
      interSectionCallback,
      interSectionOptions
    );
    observer.observe(el);
  },
};
