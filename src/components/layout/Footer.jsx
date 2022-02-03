
function Footer() {
  const footerYear = new Date().getFullYear()
  return (
    <footer className="footer p-10 bg-neutral footer-center">
      <div>
        <p className="footer-title"> &copy; {footerYear} Sanki0 </p>
      </div>

    </footer>
  )
}

export default Footer;
