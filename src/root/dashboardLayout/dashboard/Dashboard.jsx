
const Dashboard = () => {
    return (
        <div className="">
            <h1 className=" mt-5 md:text-3xl text-xl font-bold text-[#F58515] text-center">Welcome To Our Shop</h1>
            
            <div className="flex md:flex-row flex-col justify-between w-[40%] my-10">
                <div className="bg-[#f58515b8] p-4">
                    <p className="text-xl font-bold">Total Product</p>
                    <p>50</p>
                </div>
                <div className="bg-[#f58515b8] p-4">
                    <p className="text-xl font-bold">Total Sell</p>
                    <p>300</p>
                </div>
                <div className="bg-[#f58515b8] p-4">
                    <p className="text-xl font-bold">Total Revinue</p>
                    <p>3,00,00</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;