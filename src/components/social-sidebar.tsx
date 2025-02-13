import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div className="fixed left-0 top-1/3 z-50 flex flex-col space-y-4 bg-black bg-opacity-50 p-3 rounded-r-lg shadow-lg">
      <a
        href="https://facebook.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-500 transition"
      >
        <FaFacebook size={24} />
      </a>
      <a
        href="https://twitter.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400 transition"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href="https://instagram.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-pink-500 transition"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-600 transition"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
};

export default SocialSidebar;
