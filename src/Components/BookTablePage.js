import React from 'react';
import Footer from './Footer';
import Header from './Header';
import BookTable from './BookTable';
import BookHero from './BookHero';

function BookTablePage() {
  return (
    <>
      <Header></Header>
      <BookHero />
      <BookTable />
      <Footer></Footer>
    </>
  );
}

export default BookTablePage;
