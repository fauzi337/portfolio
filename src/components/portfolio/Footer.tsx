const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="text-primary font-mono">Portfolio</span> — Built
          with passion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
