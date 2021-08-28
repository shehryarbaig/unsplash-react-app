import { schema } from "normalizr";

// const data = [{ id: '123', name: 'Jim' }, { id: '456', name: 'Jane' }];
// const userSchema = new schema.Entity('users');

// // or use shorthand syntax:
// const userListSchema = [userSchema]

// const imageUrls = new schema.Entity('urls');

// const tweet = new schema.Entity(
//     'images',
//     { urls: imageUrls },
//     {
//       idAttribute: 'id_str',
//       // Remove the URL field from the entity
//       processStrategy: (entity) => omit(entity, 'url')
//     }
//   );


// const imageUrlsList = [imageUrls]

const url = new schema.Entity('urls', {});

export const imagesSchema = new schema.Entity('images', { urls: [url]});

//const normalizedData = normalize(imageData, [images]);