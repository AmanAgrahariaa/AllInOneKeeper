exports.homepage = async (req,res)=>{
     const locals = {
          title: "Home",
          description: "All in One Keeper"
     };
     res.render('index',{
          locals,
          layout: '../views/layouts/front-page',
     
     }); 
}

exports.about = async (req,res)=>{
     const locals = {
          title: "About",
          description: "All in One Keeper"
     };
     res.render('about',locals); 
}


exports.feature = async (req,res)=>{
     const locals = {
          title: "Features",
          description: "All in One Keeper"
     };
     res.render('feature',locals); 
}


exports.faq= async (req,res)=>{
     const locals = {
          title: "FAQ",
          description: "All in One Keeper"
     };
     res.render('faq',locals); 
}
