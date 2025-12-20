const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      {/* <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div> */}

      <div className="flex gap-3">
        <a
          href="mailto:aravapalliprahas@gmail.com"
          className="social-icon"
          aria-label="Send email via Gmail"
        >
          <img
            src={`${import.meta.env.BASE_URL}assets/gmail.svg`}
            alt="gmail"
            className="w-1/2 h-1/2"
          />
        </a>

        <a
          href="mailto:nx24383@bristol.ac.uk"
          className="social-icon"
          aria-label="Open Outlook mail"
        >
          <img
            src={`${import.meta.env.BASE_URL}assets/outlook.svg`}
            alt="outlook"
            className="w-1/2 h-1/2"
          />
        </a>
      </div>


      <p className="text-white-500">© 2025 Prahas Aravapalli. All rights reserved.</p>
    </footer>
  );
};

export default Footer;