const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">Mr. Praveenkumar Lade</h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            Committed to serving Dhule through education, political leadership, and community development.
          </p>
          <div className="pt-6 border-t border-white/20">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Praveenkumar Lade. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
