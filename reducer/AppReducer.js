// reducer/AppReducer.js

export const initialState = {
  activities: [],
  loading: true,
  error: null,
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
        loading: false,
      };

    case "TOGGLE_GOAL_ACHIEVED":
      return {
        ...state,
        activities: state.activities.map((activity) =>
          activity.activityld === action.payload
            ? {
                ...activity,
                goalAchieved: !activity.goalAchieved,
              }
            : activity
        ),
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
