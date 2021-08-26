import { Tree } from 'rsuite';

import { tableData } from '../../utils/tableData';

import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';

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
              <Tree data={tableData} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
