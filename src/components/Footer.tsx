const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold">Mr. Praveenkumar Lade</h3>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Committed to educational excellence and teacher empowerment across Dhule Metropolitan.
          </p>
          <div className="pt-8 border-t border-white/10">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Praveenkumar Lade. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
