// Initial State
export const initialState = {
  title: "",
  description: "",
  handling_time: "",
  barcode: false,
  category: "",
  image_select: "",
};
// Reducer
const formReducer = (state, action) => {
  switch (action.type) {
    // Case For Input Field
    case "HANDLE_INPUT_TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      };
    // Case For Checkbox
    case "HANDLE_CHECKBOX":
      return {
        ...state,
        barcode: !state.barcode,
      };
    default:
      return state;
  }
};

export default formReducer;
