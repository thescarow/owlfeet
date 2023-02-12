const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({


postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},

content:{
  type: String, required:true, trim: true
},

repliedBy:[{ replyPostedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
             replyContent: String}],

likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]

})


const trendSchema = new mongoose.Schema({
  
trendType:{
  type:Number,
  required: true

},



title:{
  type: String,
  required: true,
  lowercase: true,
  trim: true
},


titleSlug:{
  type: String,
  required: true,
  unique:true,
  lowercase:true
},






//here i have to work on foreign country where people have no idea about city or state. we have to  access country and according to country change the required value of city and state





likes:{
 type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
},


comments:{
type: [commentSchema] 
},




trendName:{
    type:String,
    required: true,
    lowercase: true
          
},

trendType:{
    type:String,
    required: true,
    lowercase: true
          
},
  

reports:{
  type: [{
    user:{type: mongoose.Schema.type.ObjectId,
    ref: 'User'},
    reportMessage: String
  }]
},


hashTags: {
  type: [String],
  validate:{
    validator: arr => { 
      arr.forEach(element => {  if(element[0] =='#')return false } )
  
      return true
                      }
           } 
},

user:{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'User',
required:true
}






}, {timestamps:true})  

// bookSchema.virtual('imagesPath').get(function() {
//   if (this.imagesName.length > 0 && this.coverImageType != null) {
//     return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`
//   }
// })

module.exports = mongoose.model('Trend', trendSchema)