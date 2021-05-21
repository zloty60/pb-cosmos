import { useState, useMemo, useReducer, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { sortSpaceXData } from "./../../store/actions/spaceXDataActions";
import {
  ModalWrapper,
  ModalTitle,
  CloseIcon,
  ModalButton,
  ModalHeader,
  ModalList,
  ModalListItem,
  ModalListItemText,
  OutsideClickWrapper,
  Arrows,
} from "./Modal.styled";
import { Margin, Box } from "./../base/Grid.styled";
import { Loader } from "./../base/Feedback.styled";
import closeIcon from "./../../assets/img/Close.png";
import arrowsIcon from "./../../assets/img/Arrows.png";
import arrowDownIcon from "./../../assets/img/ArrowDown.png";
import arrowUpIcon from "./../../assets/img/ArrowUp.png";

export function Modal({ setOpenModal }) {
  const dispatch = useDispatch();
  const { isLoading, isError, modalHeader, sortTypeName, data } = useSelector(
    (state) => state.spaceX
  );

  function sortOrderReducer(state, action) {
    switch (action.type) {
      case "unsorted":
        return "desc";
      case "desc":
        return "asc";
      case "asc":
        return "desc";
      default:
        throw new Error();
    }
  }

  const [hoverColumn, setHoverColumn] = useState(null);
  const [clickedColumn, setClickedColumn] = useState(null);
  const [sortOrder, dispatchsSrtOrder] = useReducer(
    sortOrderReducer,
    "unsorted"
  );

  const handleSortBtn = (columnNumber) => {
    setClickedColumn(columnNumber);
    dispatchsSrtOrder({ type: sortOrder });
  };

  useEffect(() => {
    if (sortOrder !== "unsorted") {
      dispatch(sortSpaceXData(sortTypeName[clickedColumn], sortOrder));
    }
  }, [clickedColumn, sortOrder, sortTypeName, dispatch]);

  const memoModalList = useMemo(
    () =>
      data.map((item) => (
        <ModalListItem key={item.id}>
          <Box display="flex">
            <Box flexBasis="50%" pl="16px" pr="16px">
              <ModalListItemText>{item[sortTypeName[0]]}</ModalListItemText>
            </Box>
            <Box flexBasis="50%" pl="16px" pr="16px">
              <ModalListItemText>{item[sortTypeName[1]]}</ModalListItemText>
            </Box>
          </Box>
        </ModalListItem>
      )),
    [data, sortTypeName]
  );

  if (isError) {
    return (
      <ModalWrapper>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <p>Coś poszło nie tak!</p>
        </Box>
      </ModalWrapper>
    );
  }

  return (
    <ModalWrapper>
      {isLoading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <Loader />
        </Box>
      ) : (
        <>
          <ModalTitle>{modalHeader}</ModalTitle>
          <CloseIcon src={closeIcon} onClick={() => setOpenModal(false)} />
          <Margin mt="16px" />
          <ModalHeader>
            <ModalButton
              onMouseEnter={() => setHoverColumn(sortTypeName[0])}
              onMouseLeave={() => setHoverColumn(null)}
              onClick={() => handleSortBtn(0)}
            >
              {sortTypeName && sortTypeName[0]}
              {hoverColumn === sortTypeName[0] && clickedColumn !== 0 ? (
                <Arrows src={arrowsIcon} alt="arrows icon" />
              ) : null}
              {sortOrder !== "unsorted" && clickedColumn === 0 ? (
                <img
                  src={sortOrder === "asc" ? arrowUpIcon : arrowDownIcon}
                  alt="fsd"
                />
              ) : null}
            </ModalButton>
            <ModalButton
              light
              onMouseEnter={() => setHoverColumn(sortTypeName[1])}
              onMouseLeave={() => setHoverColumn(null)}
              onClick={() => handleSortBtn(1)}
            >
              {sortTypeName && sortTypeName[1]}
              {hoverColumn === sortTypeName[1] && clickedColumn !== 1 ? (
                <Arrows src={arrowsIcon} alt="arrows icon" />
              ) : null}
              {sortOrder !== "unsorted" && clickedColumn === 1 ? (
                <img
                  src={sortOrder === "asc" ? arrowUpIcon : arrowDownIcon}
                  alt="fsd"
                />
              ) : null}
            </ModalButton>
          </ModalHeader>
          <ModalList>{memoModalList}</ModalList>
        </>
      )}
    </ModalWrapper>
  );
}

export function OutsideClickHandler({ setOpenModal }) {
  return <OutsideClickWrapper onClick={() => setOpenModal(false)} />;
}
