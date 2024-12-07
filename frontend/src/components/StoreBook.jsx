import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const StoreBook = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    productapi();
  }, []);

  const productapi = async () => {
    const res = await fetch(
      "https://create-resume-library.onrender.com/product"
    );
    const result = await res.json();
    setProducts(result);
  };

  const deleteHandler = async (id) => {
    const res = await fetch(
      `https://create-resume-library.onrender.com/product/${id}`,
      {
        method: "delete",
      }
    );
    const result = await res.json();
    if (result) {
      productapi();
    }
  };

  const searchHandler = async (e) => {
    const key = e.target.value;
    if (key) {
      const res = await fetch(
        `https://create-resume-library.onrender.com/search/${key}`
      );
      const result = await res.json();
      if (result) {
        setProducts(result);
      }
    } else {
      productapi();
    }
  };

  return (
    <div className="pt-20 pb-20 px-4 md:px-10 lg:px-20 h-screen bg-gray-100">
      <div className="border shadow-lg border-gray-200 rounded-md p-4 bg-white">
        <div className="mb-6 flex justify-center">
          <Input
            className="border-2 w-full max-w-lg"
            type="text"
            placeholder="Search book"
            onChange={searchHandler}
          />
        </div>

        <div className="overflow-y-auto h-80">
          <ul className="flex justify-between items-center text-center px-4 py-2 bg-blue-100 rounded-md">
            <li className="font-bold text-blue-700 text-sm sm:text-base">
              Book No.
            </li>
            <li className="font-bold text-blue-700 text-sm sm:text-base">
              Book Name
            </li>
            <li className="font-bold text-blue-700 text-sm sm:text-base">
              Price
            </li>
            <li className="font-bold text-blue-700 text-sm sm:text-base">
              Operation
            </li>
          </ul>

          {products.length === 0 ? (
            <div className="flex justify-center items-center mt-10">
              <h1 className="font-bold text-xl md:text-2xl">No Result Found</h1>
            </div>
          ) : (
            products.map((item, index) => (
              <ul
                key={index}
                className="flex justify-between items-center text-center px-4 py-2 border-b border-gray-200"
              >
                <li className="text-purple-800 text-sm sm:text-base">
                  {index + 1}
                </li>
                <li className="text-purple-800 text-sm sm:text-base">
                  {item.book}
                </li>
                <li className="text-purple-800 text-sm sm:text-base">
                  {item.price}
                </li>
                <li className="flex gap-2">
                  <Button
                    onClick={() => deleteHandler(item._id)}
                    className="rounded-full bg-red-700 p-2 hover:bg-red-900 text-white"
                  >
                    <MdDelete />
                  </Button>
                  <Button
                    onClick={() => navigate(`/updateproduct/${item._id}`)}
                    className="rounded-full bg-gray-700 p-2 hover:bg-gray-900 text-white"
                  >
                    <FaEdit />
                  </Button>
                </li>
              </ul>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreBook;
