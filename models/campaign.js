const mongoose=require('mongoose')

const campaignSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please provide campaign name."]
    },
    story:{
        type:String,
        required:[true,"Please provide story or short Description. "]
    },
    goal:{
        type:Number,
        required:[true,"Please provide Campaign goal."]
    },
    fundsRaised:{
        type:Number
    },
    fundsNeeded:{
        type:Number
    },
    category:{
        type:String,
        enum:['Child','Women&Girls','Animal','Environment','Food&Hunger','Medical','Education'],
        required:true
    },
    progress:{
        type:String,
        enum:['Goal Achieved','Not Achieved','Active Campaign'],
        default:'Active Campaign'
    },
    FundraisingPeriod:{
        type:Number,
        required:true
    },
    expiresAt:{
        type:Date,
        required:true
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: [true, 'please provide user'],
      },
    creatorName:{
        type:String,
        required:true,
    },
      img:{
          data: Buffer,
          contentType: String
      },
       status:{
        type:String,
        enum:['Pending','Approved'],
        default:'Pending',
    }
   
},{ timestamps: true,})
module.exports=mongoose.model('Campaign',campaignSchema)