const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // set the mongoose promise equal to global node.JS Promise
const slug = require('slugs');

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim:true,
    required: 'Please enter a store name!'
  },
  slug: String,
  description: {
    type: String,
    trim: true
  },
  tags: [String],
  created: {
    type: Date,
    default: Date.now
  },
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: [{
      type: Number,
      required: 'You must supply coordinates!'
    }],
    address: {
      type: String,
      required: 'You must supply an address!'
    }
  }
});

// not an arrow => because we need 'this'
storeSchema.pre('save',  function(next) {
  // this. current instance of store we are saving
  if (!this.isModified('name')) {
    return next(); // skip it
  }
  this.slug = slug(this.name);
  next();
  // TODO make more resiliant so slugs are unique
});

module.exports = mongoose.model('Store', storeSchema);