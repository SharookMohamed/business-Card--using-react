import twitter from "../assets/Twitter Icon.png";
import Facebook from "../assets/Facebook Icon.png";
import Instagram from "../assets/Instagram Icon.png";
import Github from "../assets/GitHub Icon.png";

// footer.js
function Footer() {
  return (
    <footer>
      <div className="footer-flex">
        <a href="https://x.com/Mohamed4Sharook" target="_blank" >
          <img src={twitter} alt="" />
        </a>
        <a href="https://www.facebook.com/sharook.srk.507/" target="_blank">
          <img src={Facebook} alt=""/>
        </a>{" "}
        <a href="https://www.instagram.com/srk_____" target="_blank">
          <img src={Instagram} alt="" />
        </a>{" "}
        <a href="https://github.com/SharookMohamed" target="_blank">
          <img src={Github} alt="" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
