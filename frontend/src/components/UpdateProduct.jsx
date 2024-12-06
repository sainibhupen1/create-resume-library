import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [book, setBook] = useState("");
  const [price, setPrice] = useState("");

  // console.log(product);
  const param = useParams();
  // console.log(param.id);

  const navigate = useNavigate();

  const productFindApi = async () => {
    let product = await fetch(`http://localhost:8000/update/${param.id}`);
    const result = await product.json();

    setBook(result.book);
    setPrice(result.price);
  };

  const updateBtn = async () => {
    const res = await fetch(`http://localhost:8000/update/${param.id}`, {
      method: "put",
      body: JSON.stringify({ book, price }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    if (result) {
      toast.success(result.message);
      navigate("/storeroom");
    }
  };

  useEffect(() => {
    productFindApi();
  }, [param.id]);

  return (
    <div className="p-20 flex bg-gray-100 items-center justify-center w-max-7xl h-screen">
      <form className="w-1/3  shadow-lg border border-red-100 rounded-md flex flex-col gap-5 p-8">
        <div>
          <Input
            type="text"
            value={book}
            onChange={(e) => setBook(e.target.value)}
            placeholder="Book Name"
            className=" border-green-700 focus-visible:ring-transparent my-2 "
          />
        </div>

        <div>
          <Input
            type="number"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border-green-700 focus-visible:ring-transparent my-2 "
          />
        </div>

        <Button
          type="button"
          onClick={updateBtn}
          className="bg-blue-700 hover:bg-blue-950"
        >
          Update
        </Button>
      </form>
    </div>
  );
};

export default UpdateProduct;