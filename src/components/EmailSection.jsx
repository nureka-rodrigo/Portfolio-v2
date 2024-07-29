const EmailSection = () => {
  return (
    <div className="hidden xl:flex lg:flex-col lg:items-center fixed right-8 bottom-0 mb-4">
      <div className="flex flex-col items-center">
        <a
          href="mailto:nurekadulshanmc@gmail.com"
          className="text-neutral-900 dark:text-gray-100 hover:text-yellow-500 dark:hover:text-yellow-600 transition duration-300"
          style={{ writingMode: "vertical-rl", transform: "rotate(3600deg)" }}
        >
          nurekadulshanmc@gmail.com
        </a>
        <div className="w-px bg-gray-500 dark:bg-gray-300 h-24 mt-4 transition duration-300"></div>
      </div>
    </div>
  );
};

export default EmailSection;
