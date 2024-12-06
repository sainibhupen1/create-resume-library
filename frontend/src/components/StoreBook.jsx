import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Delete } from "lucide-react";
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
    <div className=" pt-20 pb-20 pl-40 pr-40 h-screen ">
      <div className="border-2 shadow-lg  border-red-100 rounded-md p-2">
        <div className="m-4 flex justify-center items-center">
          <Input
            className="border-2 w-[50%]"
            type="text"
            placeholder="search book"
            onChange={searchHandler}
          />
        </div>

        <div className="overflow-y-auto h-[340px]">
          <ul className="flex justify-between m-4  ">
            <li className="font-bold text-[#0000ff] text-lg">Book No.</li>
            <li className="font-bold text-[#0000ff] text-lg">Book Name</li>
            <li className="font-bold text-[#0000ff] text-lg">Price</li>
            <li className="font-bold text-[#0000ff] text-lg">Operation</li>
          </ul>

          {products.length === 0 ? (
            <div className="flex justify-center items-center mt-20">
              <h1 className="font-bold text-[40px]">No Result Found</h1>
            </div>
          ) : (
            products.map((item, index) => {
              return (
                <ul key={index} className="flex justify-between m-4  ">
                  <li className="text-[rgb(130,11,72)]">{index + 1}</li>
                  <li className="ml-10 text-[rgb(130,11,72)]">{item.book}</li>
                  <li className="ml-8 text-[rgb(130,11,72)]">{item.price}</li>
                  <li className="ml-2  ">
                    <div className=" flex gap-1">
                      <Button
                        onClick={() => deleteHandler(item._id)}
                        className="size-6 rounded-full bg-red-700"
                      >
                        <MdDelete />
                      </Button>
                      <Button
                        onClick={() => navigate(`/updateproduct/${item._id}`)}
                        className="size-6  rounded-full bg-gray-700"
                      >
                        <FaEdit />
                      </Button>
                    </div>
                  </li>
                </ul>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreBook;
