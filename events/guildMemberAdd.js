//////////////////////////////////////////////////////////
// A title
//////////////////////////////////////////////////////////


//const profileSchema = require("../models/profileSchema");

module.exports = {
    name: 'guildMemberAdd',
    once: false,
    execute: async (...args) => {
        
        // guildMemberAdd only has one arg - the guildMember item
        // ... so set it to member so we can actually do some shit
        // with it
        let member =  args[0]
        
     //   const existingProfile = await profileSchema.findOne({userID: member.id});
        
     //   if (existingProfile) {
      //      console.log(`${member.user.username} already exists in DB... skipping`)
       //     return;
      //  }
        
      //  new profilec({
     //       userID: member.id,
      //      serverID: member.guild.id,
      //      credits: 1,
      //      bank: 1
      //  }).save()
        
      //  console.log('new profile -  Saved')
    }
    
};