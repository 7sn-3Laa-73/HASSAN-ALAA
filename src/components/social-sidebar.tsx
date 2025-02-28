import { FaLinkedin, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div className="fixed left-0 top-1/3 z-50 flex flex-col space-y-4 bg-black bg-opacity-50 p-3 rounded-r-lg shadow-lg">
      <a
        href="https://www.linkedin.com/in/hsn-alaa/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-600 transition"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://wa.me/qr/LXXMSV4C7CPZO1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-green-500 transition"
      >
        <FaWhatsapp size={24} />
      </a>
      <a
        href="https://github.com/Hassan-Alaa-73"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transition"
      >
        <FaGithub size={24} />
      </a>
      <a
  href="mailto:hassan.alaa.hafez73@gmail.com?subject=Hello%20Hassan"
  className="text-white hover:text-red-500 transition"
>


        <FaEnvelope size={24} />
      </a>
    </div>
  );
};

export default SocialSidebar;
