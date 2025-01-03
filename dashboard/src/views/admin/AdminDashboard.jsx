import React, { useEffect } from 'react';
import { MdCurrencyExchange, MdProductionQuantityLimits } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6"; 
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get_admin_dashboard_data } from '../../store/Reducers/dashboardReducer';
const AdminDashboard = () => {
    const dispatch = useDispatch();
    const { totalSale, totalOrder, totalProduct, totalSeller, recentOrder } = useSelector(state => state.dashboard);
    
    useEffect(() => {
        dispatch(get_admin_dashboard_data());
    }, [dispatch]);

    return (
        <div className='px-2 md:px-7 py-5'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                
                <div className='flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                        <h2 className='text-3xl font-bold'>${totalSale}</h2>
                        <span className='text-md font-medium'>Tổng danh thu</span>
                    </div>
                    <div className='w-[40px] h-[47px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl'>
                        <MdCurrencyExchange className='text-[#fae8e8] shadow-lg' /> 
                    </div> 
                </div>

                <div className='flex justify-between items-center p-5 bg-[#fde2ff] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                        <h2 className='text-3xl font-bold'>{totalProduct}</h2>
                        <span className='text-md font-medium'>Số lượng sản phẩm</span>
                    </div>
                    <div className='w-[40px] h-[47px] rounded-full bg-[#760077] flex justify-center items-center text-xl'>
                        <MdProductionQuantityLimits className='text-[#fae8e8] shadow-lg' /> 
                    </div> 
                </div>

                <div className='flex justify-between items-center p-5 bg-[#e9feea] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                        <h2 className='text-3xl font-bold'>{totalSeller}</h2>
                        <span className='text-md font-medium'>Người bán hàng</span>
                    </div>
                    <div className='w-[40px] h-[47px] rounded-full bg-[#038000] flex justify-center items-center text-xl'>
                        <FaUsers className='text-[#fae8e8] shadow-lg' /> 
                    </div> 
                </div>

                <div className='flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                        <h2 className='text-3xl font-bold'>{totalOrder}</h2>
                        <span className='text-md font-medium'>Đơn hàng</span>
                    </div>
                    <div className='w-[40px] h-[47px] rounded-full bg-[#0200f8] flex justify-center items-center text-xl'>
                        <FaCartShopping className='text-[#fae8e8] shadow-lg' /> 
                    </div> 
                </div>

            </div>

            <div className='w-full p-4 bg-[#6a5fdf] rounded-md mt-6'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3 '>Recent Orders</h2>
                    <Link className='font-semibold text-sm text-[#d0d2d6]'>View All</Link>
                </div>
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left text-[#d0d2d6]'>
                        <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>Order Id</th>
                                <th scope='col' className='py-3 px-4'>Price</th>
                                <th scope='col' className='py-3 px-4'>Payment Status</th>
                                <th scope='col' className='py-3 px-4'>Order Status</th>
                                <th scope='col' className='py-3 px-4'>Active</th>
                            </tr>
                        </thead>

                        <tbody>
                            {recentOrder.map((d, i) => (
                                <tr key={i}>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>#{d._id}</td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>${d.price}</td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>{d.payment_status}</td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>{d.delivery_status}</td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <Link to={`/admin/dashboard/order/details/${d._id}`}>View</Link> 
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AdminDashboard;
