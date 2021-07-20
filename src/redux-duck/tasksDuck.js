import axios from "axios";

const initialState = {
  tasks: [],
};

const POST_TASK = "POST_TASK";
const GET_TASKS = "GET_TASKS";
const PUT_TASK = "PUT_TASK";
const PUTV_TASK = "PUTV_TASK";
const DELETE_TASK = "DELETE_TASK";

export default function tasksReducer(state = initialState, { type, payload }) {
  if (type === "GET_TASKS") return { ...state, tasks: payload };
  if (type === "POST_TASK")
    return { ...state, tasks: state.tasks.concat(payload) };
  if (type === "DELETE_TASK")
    return { ...state, tasks: state.tasks.filter((p) => p.id !== payload) };
  if (type === "PUT_TASK")
    return {
      ...state,
      tasks: state.tasks.filter((p) => {
        if (p.id === payload.id) {
          p.description = payload.description;
          return p;
        } else return p;
      }),
    };

    if (type === "PUTV_TASK")
    return {
      ...state,
      tasks: state.tasks.filter((p) => {
        if (p.id === payload.id) {
        
          p.vigent = payload.vigent;
          return p;
        } else return p;
      }),
    };

  return state;
}

export const getTasks = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("http://localhost:9000/api/tasks");
    dispatch({
      type: GET_TASKS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const putTask =(id,value) =>
  async (dispatch, getState) => {
    try {
      const resp = await axios.put(`http://localhost:9000/api/tasks/${id}`, {
    
      description: value
      });
      dispatch({
        type: PUT_TASK,
        payload: resp.data,
      });
    } catch (error) {
      console.log(error);
    }
  };


  export const putTaskVigent =({id,description,vigent}) =>
  async (dispatch, getState) => {
    try {
      const resp = await axios.put(`http://localhost:9000/api/tasks/${id}`, {

      vigent: !vigent,
      });
      dispatch({
        type: PUTV_TASK,
        payload: resp.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const deleteTask = (id) => async (dispatch, getState) => {
  try {
    const resp = await axios.delete(`http://localhost:9000/api/tasks/${id}`);
    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const postTask = (description) => async (dispatch, getState) => {
  try {
    const resp = await axios.post("http://localhost:9000/api/tasks/", {
      description: description,
      createAt: new Date(),
      vigent: true,
    });
    dispatch({
      type: POST_TASK,
      payload: [resp.data],
    });
  } catch (error) {
    console.log(error);
  }
};
