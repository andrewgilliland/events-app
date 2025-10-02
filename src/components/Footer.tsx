function Footer() {
  return (
    <footer className="bg-neutral-800 py-6 mt-12">
      <div className="container mx-auto px-4 text-center text-white">
        &copy; {new Date().getFullYear()} Events Admin. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
