import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import FooterImg from "../../assets/5.png";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${FooterImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const Email = () => {
  return (
    <div style={bgStyle}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="container text-center space-y-10 py-10"
      >
        <div className="space-y-4">
          <p className="text-3xl md:text-4xl font-bold">Cadastre-se em nosso e-mail</p>
          <p>e garanta 20% de desconto em nossos serviços!</p>
        </div>
        <div className=" space-y-5">
          <button className="primary-btn text-black">Inscreva-se</button>
          <div className="flex flex-row justify-center gap-3 hover:cursor-pointer">
            {/*Acrescentar links e referências*/}
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Email;
