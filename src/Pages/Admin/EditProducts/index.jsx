import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { getAllProducts } from "../../../store/product/actions";
import swal from "sweetalert";
import productApi from "../../../api/productApi";
import useToggle from "../../../hooks/useToggle";
import Heading from "../../../components/Heading";
import { Table, Wrapper } from "./style";
import Modal from "../../../components/Modal";
import Edit from "../../../modal/Edit";
import Button from "../../../components/Button";

const Products = () => {
  const dispatch = useDispatch();
  const modal = useToggle();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState({});

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const handleEdit = (prod) => {
    setProduct(prod);
    modal.open();
  };

  const handleRemove = (productId) => {
    productApi
      .deleteProduct(productId)
      .then((res) => {
        dispatch(getAllProducts());
        swal("", "Mahsulot o'chirildi", "success");
      })
      .catch((err) => err.response.data);
  };

  return (
    <Wrapper gap="8px">
      <Heading margin="30px">Mahsulotlar ro'yxati</Heading>
      <Table>
        <thead>
          <tr>
            <th>№</th>
            <th>Nomi</th>
            <th>Narxi</th>
            <th>Ma'lumotlar</th>
            <th style={{ width: "120px" }}>T/O'</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: "16px",
                }}
              >
                <Button
                  width="30px"
                  height="30px"
                  onClick={() => handleEdit(product)}
                >
                  <BiEditAlt />
                </Button>
                <Button
                  width="30px"
                  height="30px"
                  onClick={() => handleRemove(product.id)}
                >
                  <MdOutlineDeleteOutline />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal isOpen={modal.isOpen} onClose={modal.close}>
        <Edit product={product} modal={modal} />
      </Modal>
    </Wrapper>
  );
};

export default Products;
