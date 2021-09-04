export const topicImagesSelector = (state) => state.topicsImagesSetter.topicImages
export const homePageImagesSelector = (state) => state.homePageImages.homePageImages
export const likedImagesSelector = (state) => state.photoLikes.likedImages
export const queryImagesSelector = (state) => state.queryImagesData.queryImages
export const querySelector = (state) => state.queryImagesData.query
export const userLikesUrlSelector = (state) => state.profile.userProfile? state.profile.userProfile.links.likes:null;
export const userTotalLikesSelector = (state) => state.profile.userProfile? state.profile.userProfile.total_likes:null;
export const userProfileSelector = (state) => state.profile.userProfile;

export const imageSelector = (state,type) => {
    if(type === "Topic")
    {
        return topicImagesSelector(state)
    }
    else if(type === "Query")
    {
        return queryImagesSelector(state)
    }
    else if(type === "Profile")
    {
        return likedImagesSelector(state)
    }
    else if(type === "Home Page")
    {
        return homePageImagesSelector(state)
    }
}



