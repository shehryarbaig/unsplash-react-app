import { createSelector } from "reselect"

export const topicImagesSelector = (state) => state.topicsImagesSetter.topicImages
export const queryImagesSelector = (state) => state.queryImagesData.queryImages
export const querySelector = (state) => state.queryImagesData.query

export const imageSelector = (state,type) => {
    if(type === "Topic")
    {
        return topicImagesSelector(state)
    }
    else if(type === "Query")
    {
        return queryImagesSelector(state)
    }
}



