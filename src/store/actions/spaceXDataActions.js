import axios from "axios";

import { spaceXDataActions } from "./../actionConstants";

const baseUrl = "https://api.spacexdata.com/v4";

export const fetchSpaceXData = (name) => async (dispatch) => {
  try {
    dispatch({
      type: spaceXDataActions.FETCH_DATA_START,
    });
    const { data } = await axios.get(`${baseUrl}/${name}`);
    const sortTypeName = setSortNameInModalHeader(name);
    dispatch({
      type: spaceXDataActions.FETCH_DATA_SUCCESS,
      payload: { data: data, modalHeader: name, sortTypeName: sortTypeName },
    });
  } catch (err) {
    dispatch({
      type: spaceXDataActions.FETCH_DATA_FAIL,
    });
  }
};

export const sortSpaceXData = (sortTypeName, isDesc) => (dispatch) => {
  dispatch({
    type: spaceXDataActions.SORT_DATA,
    payload: { sortTypeName, isDesc },
  });
};

function setSortNameInModalHeader(name) {
  switch (name) {
    case "capsules":
      return ["type", "status"];
    case "crew":
      return ["name", "agency"];
    case "rockets":
      return ["name", "first_flight"];
    case "starlink":
      return ["version", "id"];
    default:
      throw new Error("wrong name");
  }
}
