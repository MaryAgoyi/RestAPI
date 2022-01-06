import mongoose from 'mongoose';


const { Schema } = mongoose;
const userSchema = new Schema({

    Name: {
      type: String,
      required: true
  },
  Surname: {
      type: String,
  },
  Telephone: {
      type: String
  },
 Email: {
      type: String
  }
});

export default mongoose.model('users', userSchema);