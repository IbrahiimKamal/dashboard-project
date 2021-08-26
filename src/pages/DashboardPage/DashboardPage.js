import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';

const DashboardPage = () => {
  return (
    <>
      <Navbar />

      <section className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 col-md-6">
              <Sidebar />
            </div>
            <div className="col-10 col-md-6"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
