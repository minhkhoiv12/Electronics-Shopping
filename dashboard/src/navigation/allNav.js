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
    id: 1,
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    role: "admin",
    path: "/admin/dashboard",
  },
  {
    id: 2,
    title: "Đơn hàng",
    icon: <AiOutlineShoppingCart />,
    role: "admin",
    path: "/admin/dashboard/orders",
  },
  {
    id: 3,
    title: "Loại sản phẩm",
    icon: <BiCategory />,
    role: "admin",
    path: "/admin/dashboard/category",
  },
  {
    id: 4,
    title: "Người bán hàng",
    icon: <FaUsers />,
    role: "admin",
    path: "/admin/dashboard/sellers",
  },
  {
    id: 5,
    title: "Kích hoạt tài khoản",
    icon: <FaUserTimes />,
    role: "admin",
    path: "/admin/dashboard/deactive-sellers",
  },
  {
    id: 6,
    title: "Yêu cầu xác thực tài khoản",
    icon: <FaCodePullRequest />,
    role: "admin",
    path: "/admin/dashboard/sellers-request",
  },
  {
    id: 7,
    title: "Trò chuyện trực tiếp",
    icon: <IoIosChatbubbles />,
    role: "admin",
    path: "/admin/dashboard/chat-sellers",
  },
  {
    id: 8,
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    role: "seller",
    path: "/seller/dashboard",
  },
  {
    id: 9,
    title: "Thêm sản phẩm",
    icon: <IoMdAdd />,
    role: "seller",
    path: "/seller/dashboard/add-product",
  },
  {
    id: 10,
    title: "Tất cả sản phẩm",
    icon: <MdViewList />,
    role: "seller",
    path: "/seller/dashboard/products",
  },
  {
    id: 11,
    title: "Đơn hàng",
    icon: <BsCartCheck />,
    role: "seller",
    path: "/seller/dashboard/orders",
  },
  {
    id: 12,
    title: "Chat với khách hàng",
    icon: <IoChatbubbles />,
    role: "seller",
    path: "/seller/dashboard/chat-customer",
  },
  {
    id: 13,
    title: "Chat với Quản trị viên",
    icon: <BsFillChatQuoteFill />,
    role: "seller",
    path: "/seller/dashboard/chat-support",
  },
  {
    id: 14,
    title: "Profile",
    icon: <CgProfile />,
    role: "seller",
    path: "/seller/dashboard/profile",
  },
];
