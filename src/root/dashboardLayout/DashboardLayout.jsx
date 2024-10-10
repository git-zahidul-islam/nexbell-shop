import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex pr-3">
      <nav className="md:w-[15%] w-full bg-[#f5851597] text-black/80 h-screen flex flex-col justify-between py-10 px-5">

        <div>
          <ul className="text-xl space-y-4 flex flex-col w-full">
            <li className="w-full bg-[#F58515] px-3 py-1">
              <Link className="font-bold" to={"/dashboard"}>Dashboard</Link>
            </li>
            <li className="w-full bg-[#F58515] px-3 py-1">
              <Link className="font-bold w-full" to={"/dashboard/add-products"}>Add Products</Link>
            </li>
            <li className="w-full bg-[#F58515] px-3 py-1">
              <Link className="font-bold w-full" to={"/dashboard/edit"}>Edit / Update</Link>
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
      <main className="md:w-[85%] w-full bg-[#F6F6EF] pl-5">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
