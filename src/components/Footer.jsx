import "./Footer.css";
function Footer() {
  return (
    <footer id="footer" style={{ backgroundColor: "white", color: "black" }}>
      <div className="container">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>SilentVox</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
export default Footer;
