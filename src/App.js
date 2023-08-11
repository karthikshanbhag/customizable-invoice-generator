import InvoiceForm from './components/InvoiceForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="mx-auto max-w-7xl">
        <InvoiceForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
