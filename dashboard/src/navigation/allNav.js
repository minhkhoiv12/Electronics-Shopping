import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUserTimes, FaUsers } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";
import { IoIosChatbubbles } from "react-icons/io";

import { IoMdAdd } from "react-icons/io";
import { MdViewList } from "react-icons/md";
import { TbBasketDiscount } from "react-icons/tb";
import { BsCartCheck } from "react-icons/bs"; 
import { IoChatbubbles } from "react-icons/io5";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export const allNav = [
    {
        id : 1,
        title : 'Trang chủ',
        icon : <AiOutlineDashboard />,
        role : 'admin',
        path: '/admin/dashboard'
    },
    {
        id : 2,
        title : 'Đơn hàng',
        icon : <AiOutlineShoppingCart />,
        role : 'admin',
        path: '/admin/dashboard/orders'
    },
    {
        id : 3,
        title : 'Danh mục',
        icon : <BiCategory  />,
        role : 'admin',
        path: '/admin/dashboard/category'
    },
    {
        id : 4,
        title : 'Người bán',
        icon : <FaUsers   />,
        role : 'admin',
        path: '/admin/dashboard/sellers'
    },
    // {
    //     id : 5,
    //     title : 'Yêu cầu thanh toán',
    //     icon : <MdPayment />,
    //     role : 'admin',
    //     path: '/admin/dashboard/payment-request'
    // },
    // {
    //     id : 6,
    //     title : 'Quản lý người bán',
    //     icon : <FaUserTimes />,
    //     role : 'admin',
    //     path: '/admin/dashboard/deactive-sellers'
    // },
    // {
    //     id : 7,
    //     title : 'Yêu cầu của người bán',
    //     icon : <FaCodePullRequest />,
    //     role : 'admin',
    //     path: '/admin/dashboard/sellers-request'
    // },
    {
        id : 9,
        title : 'Trang chủ',
        icon : <AiOutlineDashboard />,
        role : 'seller',
        path: '/seller/dashboard'
    },
    {
        id : 10,
        title : 'Thêm sản phẩm',
       
        icon : <IoMdAdd />,
        role : 'seller',
        path: '/seller/dashboard/add-product'
    },     
    {
        id : 11,
        title : 'Tất cả sản phẩm',
       
        icon : <MdViewList />,
        role : 'seller',
        path: '/seller/dashboard/products'
    },
    {
        id : 13,
        title : 'Quản lý đơn hàng',
       
        icon : <BsCartCheck />,
        role : 'seller',
        path: '/seller/dashboard/orders'
    },
    // {
    //     id : 14,
    //     title : 'Thanh toán',
       
    //     icon : <MdPayment />,
    //     role : 'seller',
    //     path: '/seller/dashboard/payments'
    // },
    {
        id : 15,
        title : 'Tư vấn khách hàng',
       
        icon : <IoChatbubbles />,
        role : 'seller',
        path: '/seller/dashboard/chat-customer'
    },
    {
        id : 16,
        title : 'Chat với admin',
       
        icon : <BsFillChatQuoteFill />,
        role : 'seller',
        path: '/seller/dashboard/chat-support'
    },
    {
        id : 17,
        title : 'Profile',
       
        icon : <CgProfile />,
        role : 'seller',
        path: '/seller/dashboard/profile'
    }
]