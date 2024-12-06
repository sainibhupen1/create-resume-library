import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const AddBooks = () => {
  const [book, setBook] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  const Addbook = async () => {
    let res = await fetch("http://localhost:8000/products", {
      method: "post",
      body: JSON.stringify({ book, price }),
      headers: {
        "content-Type": "application/json",
      },
    });

    res = await res.json();
    if (res) {
      toast.success(res.message);
      navigate("/storeroom");
    } else {
      toast.success(res.message);
    }
  };

  return (
    <div className="p-20 flex bg-gray-100 items-center justify-center w-max-7xl h-screen">
      <form className="w-1/3  shadow-lg border border-red-100 rounded-md flex flex-col gap-5 p-8">
        <div>
          <Input
            type="text"
            onChange={(e) => setBook(e.target.value)}
            value={book}
            placeholder="Book Name"
            className=" border-green-700 focus-visible:ring-transparent my-2 "
          />
        </div>

        <div>
          <Input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            placeholder="price"
            className="border-green-700 focus-visible:ring-transparent my-2 "
          />
        </div>

        <Button
          type="button"
          onClick={Addbook}
          className="bg-blue-700 hover:bg-blue-950"
        >
          Add Book
        </Button>
      </form>
    </div>
  );
};

export default AddBooks;
