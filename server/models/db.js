export default function configMongoose(mongoose, url) {
    mongoose.Promise = global.Promise;
    mongoose.connect(url);
}
export let url = 'mongodb://contact:contact@ds037205.mlab.com:37205/contact';