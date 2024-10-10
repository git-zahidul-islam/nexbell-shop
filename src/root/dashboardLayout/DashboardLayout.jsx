import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex gap-4 pr-3">
      <nav className="md:w-[15%] w-full bg-[#131921ce] text-white h-screen flex flex-col justify-between py-10 px-5">

        <div>
          <ul className="text-xl">
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link to={"/dashboard/add-products"}>Add Products</Link>
            </li>
          </ul>
        </div>
        {/* b to h */}
        <div>
          <ul className="text-xl">
            <li>
              <Link to={"/"}>Back To Home</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="md:w-[85%] w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
