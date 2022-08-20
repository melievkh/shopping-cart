import React, { useState } from "react";
import { BsBasket } from "react-icons/bs";
import { AiOutlineDoubleLeft, AiOutlinePlusCircle } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { SidebarToggler, StyledLink, Wrapper } from "./Sidebar.style";
import useToggle from "../../../hooks/useToggle";
import Heading from "../../../components/Heading/Heading";
import Modal from "../../../components/Modal/Modal";
import Flexbox from "../../Flexbox/Flexbox";
import CreateProducts from "../../../modal/CreateProducts/CreateProducts";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState({});
  const modal = useToggle();

  const handleCreate = (prod) => {
    setProduct(prod);
    modal.open();
  };

  return (
    <Wrapper>
      <SidebarToggler isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineDoubleLeft style={{ color: "grey" }} />
      </SidebarToggler>
      {isOpen ? (
        <Heading secondary margin="10px">
          Admin
        </Heading>
      ) : (
        <Heading secondary size="md">
          A
        </Heading>
      )}
      <StyledLink to="/admin">
        <BsBasket />
        {isOpen && <Heading secondary>Buyurtmalar</Heading>}
      </StyledLink>
      <StyledLink to="/admin/edit-products">
        <MdProductionQuantityLimits />
        {isOpen && <Heading secondary>Mahsulotlar</Heading>}
      </StyledLink>
      <Flexbox
        row
        justifyContent="flex-start"
        gap="8px"
        style={{ cursor: "pointer" }}
        onClick={modal.open}
      >
        <AiOutlinePlusCircle />
        {isOpen && (
          <Heading secondary onClick={() => handleCreate(product)}>
            Qo'shish
          </Heading>
        )}
      </Flexbox>
      <Modal isOpen={modal.isOpen} onClose={modal.close}>
        <CreateProducts product={product} modal={modal} />
      </Modal>
    </Wrapper>
  );
};
export default Sidebar;
