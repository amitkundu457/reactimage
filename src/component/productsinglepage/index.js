import React, { useState } from "react";

import "./style.css";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineStar,
  AiFillStar,
  AiOutlineQuestionCircle,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShareAlt,
  AiOutlineInbox,
} from "react-icons/ai";
import "../../App.css";
import { FaEye } from "react-icons/fa";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
export default function Singleproduct() {
  const [tabslide, setTabslide] = useState(0);
  const Product = [
    {
      id: 1,
      Image:
        "https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_04_2-570x760.jpg",
    },
    {
      id: 2,
      Image:
        "https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_04_3-570x760.jpg",
    },
    {
      id: 3,
      Image:
        "https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_04_3-570x760.jpg",
    },
  ];
  return (
    <div className="singlepage-container flex font-Jost justify-center py-10">
      <div className="row w-[40%] flex space-x-4  justify-center">
        <div className="item space-y-3">
          {Product.map((item, idx) => (
            <div
              className={
                idx === tabslide
                  ? "image w-[5rem] border border-black p-1"
                  : " w-[5rem]"
              }
            >
              <img
                onClick={() => setTabslide(idx)}
                src={item.Image}
                alt=""
                className=""
              />
            </div>
          ))}
        </div>
        <div className="item relative group  overflow-hidden w-[70%]">
          <img
            className="m-auto animate"
            src={Product[tabslide].Image}
            alt=""
          />

          <button
            onClick={() => {
              const leftSlide = tabslide === 0;
              const newslide = leftSlide ? Product.length - 1 : tabslide - 1;
              setTabslide(newslide);
            }}
            type=""
            className=" text-[19px]
            group-hover:left-[2rem] duration-300 absolute top-[50%] -left-[25rem] w-[45px] h-[45px]
             bg-white shadow-2xl rounded-full grid place-items-center"
          >
            <AiOutlineArrowLeft />
          </button>
          <button
            onClick={() => {
              const rightSlide = tabslide === Product.length - 1;
              const newslide = rightSlide ? 0 : tabslide + 1;
              setTabslide(newslide);
            }}
            type=""
            className=" text-[19px]
            group-hover:right-[2rem] duration-300 absolute top-[50%] -right-[25rem] w-[45px] h-[45px]
             bg-white shadow-2xl rounded-full grid place-items-center"
          >
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <div className="row w-[35%] ">
        <div className="item space-y-5">
          <div className="space-y-2">
            <div className="flex justify-between">
              <h3 className="text-[30px]">Wedge-Heeled Espadrilles</h3>
              <div className="w-[45px] h-[45px] border  grid place-items-center rounded-full">
                <AiOutlineStar />
              </div>
            </div>
            <div className="flex justify-between">
              <h3 className="text-[24px]">$17.00</h3>
              <div className="flex space-x-2">
                <div className="flex mt-1">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <h3>(1 review)</h3>
              </div>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="grid place-items-center">
              <FaEye />
            </div>
            <h3>
              {" "}
              <span className="text-black font-[600]">30</span> people are
              viewing this right now
            </h3>
          </div>
          <div className="size space-y-3">
            <h3>Size:</h3>
            <div className="flex space-x-3">
              <div className="grid text-[18px] place-items-center w-[45px] h-[45px] rounded-md border">
                36
              </div>
              <div className="grid text-[18px] place-items-center w-[45px] h-[45px] rounded-md border">
                37
              </div>
              <div className="grid text-[18px] place-items-center w-[45px] h-[45px] rounded-md border">
                38
              </div>
              <div className="grid text-[18px] place-items-center w-[45px] h-[45px] rounded-md border">
                45
              </div>
            </div>
          </div>

          <div className="qty-addcrt space-y-5">
            <h3>Quantity:</h3>
            <div className="flex space-x-3">
              <div className="flex justify-between w-[10rem] bg-[#f1f1f1] p-3 rounded-md">
                <div className="item1 grid place-items-center">
                  <AiOutlineMinus />
                </div>
                <div className="item1 grid place-items-center">1</div>
                <div className="item1 grid place-items-center">
                  <AiOutlinePlus />
                </div>
              </div>
              <input
                type="button"
                name=""
                value="Add to cart"
                className="w-full border border-black p-3 rounded-md"
              />
            </div>
            <input
              type="button"
              name=""
              value="Buy Now"
              className="w-full border text-[16px] font-[500] text-white bg-[#333] p-3 rounded-md"
            />
          </div>
          <div className="cmp text-[16px] flex space-x-4">
            <div className="compares flex space-x-2">
              <div className=" text-[21px] grid place-items-center">
                <RiArrowLeftRightLine />
              </div>
              <h3>Compare</h3>
            </div>
            <div className="qus flex space-x-2">
              <div className=" text-[21px] grid place-items-center">
                <AiOutlineQuestionCircle />
              </div>
              <h3>Ask a Question</h3>
            </div>
            <div className="qus flex space-x-2">
              <div className=" text-[21px] grid place-items-center">
                <AiOutlineShareAlt />
              </div>
              <h3>Share</h3>
            </div>
          </div>
          <hr className="border-gray-300 border" />

          <div className="text-[16px] space-y-2">
            <div className="delv flex space-x-3">
              <div className="grid place-items-center">
                <TbTruckDelivery />
              </div>
              <h3>
                {" "}
                <span className="font-[500]">Estimated Delivery:</span>
                <span className="text-[#666]">15 - 22 Oct, 2022</span>
              </h3>
            </div>
            <div className="est flex space-x-3">
              <div className="grid place-items-center">
                <AiOutlineInbox />
              </div>
              <h3>
                {" "}
                <span className="font-[500]">
                  Free Shipping & Returns:
                </span>{" "}
                <span className="text-[#666]">On all orders over $200.00</span>
              </h3>
            </div>
          </div>

          <div className="imgbg grid place-items-center space-y-3 bg-[#f7f7f7] p-4">
            <img
              src="https://minimog-4437.kxcdn.com/wp-content/themes/minimog/assets/woocommerce/product-trust-badge.png"
              alt=""
            />
            <h3 className="text-[15px] ">Guaranteed safe & secure checkout</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
