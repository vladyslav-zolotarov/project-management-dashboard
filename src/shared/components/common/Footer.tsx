export const Footer = () => {
  return (
    <footer className='bg--primaryGray py-4 text-center text-sm text--secondaryGray flex items-center justify-center'>
      &copy; {new Date().getFullYear()} Silhoette PMD. All rights reserved.
    </footer>
  );
};
