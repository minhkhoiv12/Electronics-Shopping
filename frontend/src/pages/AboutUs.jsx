import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <section className='bg-[url("https://hqk-shop.vercel.app/images/banner/aboutme.jpg")] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">Giới Thiệu Bản Thân</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Trang Chủ</Link>
                <span className="pt-1">
                  <IoIosArrowForward />
                </span>
                <span>Giới Thiệu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eeeeee] py-16">
        <div className="w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-3xl font-bold text-center mb-6">Tôi Là Ai?</h2>
            <p className="text-lg text-gray-600">
              Tôi là một lập trình viên backend đầy nhiệt huyết, có niềm đam mê
              với việc xây dựng các hệ thống backend, tối ưu và có khả năng mở
              rộng. Tôi tập trung vào việc phát triển API hiệu quả, tối ưu cơ sở
              dữ liệu và đảm bảo tính ổn định của hệ thống.
            </p>
          </div>

          <div className="mt-12 bg-white p-6 rounded-md shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Kỹ Năng Của Tôi</h3>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>Phát triển Backend (Node.js, Express, NestJS, Django)</li>
              <li>Quản lý cơ sở dữ liệu (MongoDB, MySQL, PostgreSQL)</li>
              <li>Xây dựng API RESTful và GraphQL</li>
            </ul>
          </div>

          <div className="mt-12 bg-white p-6 rounded-md shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Mục Tiêu Của Tôi</h3>
            <p className="text-lg text-gray-600">
              Tôi hướng tới việc trở thành một kỹ sư backend chuyên nghiệp, tập
              trung vào kiến trúc hệ thống, bảo mật và tối ưu hiệu suất. Tôi
              mong muốn tham gia vào các dự án lớn, nơi tôi có thể đóng góp vào
              việc xây dựng các hệ thống mạnh mẽ, đồng thời học hỏi và phát
              triển không ngừng.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
