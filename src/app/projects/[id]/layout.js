import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProjectLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}