export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-4 border-t border-slate-700/50 bg-slate-900/50">
      <div className="max-w-4xl mx-auto text-center space-y-2">
        <p className="text-slate-500 text-sm">
          Powodzenia! • Good luck with your Polish learning journey!
        </p>
        <p className="text-slate-600 text-xs">
          © {currentYear} Abhishek Shaji. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
