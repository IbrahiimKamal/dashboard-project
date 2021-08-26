import InputSearch from '../../components/InputSearch/InputSearch';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import TreeTable from '../../components/TreeTable/TreeTable';

const DashboardPage = () => {
  return (
    <>
      <Navbar />

      <section className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 col-md-2">
              <Sidebar />
            </div>
            <div className="col-10 col-md-10">
              <InputSearch />
              <TreeTable />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
