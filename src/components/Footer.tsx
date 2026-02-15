export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-border/30">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Afsal PT. Designed & Developed with
          precision.
        </p>
      </div>
    </footer>
  );
}
