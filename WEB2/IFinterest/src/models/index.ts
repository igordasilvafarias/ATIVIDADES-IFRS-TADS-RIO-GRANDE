import { Tag } from './Tag'
import { User } from './User';
import { Image } from './Image'
import { Gallery } from './Gallery'

Image.belongsTo(User);
Gallery.belongsTo(User);

User.hasMany(Image);
User.hasMany(Gallery);

Image.belongsToMany(Tag, { through: 'imageTags' });
Tag.belongsToMany(Image, { through: 'imageTags' });
Image.belongsToMany(Gallery, { through: 'imageGallery' });
Gallery.belongsToMany(Image, { through: 'imageGallery' });

export {
    User,
    Image,
    Tag,
    Gallery
}